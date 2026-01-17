---
title: "ADR 2: 버전 관리 전략 (Step, Snapshot, 사용자 대면 버전)"
---

# ADR 2: 버전 관리 전략 (Step, Snapshot, 사용자 대면 버전)

## 컨텍스트

협업 편집 환경에서 콘텐츠 버전을 추적하는 것은 중요합니다. 사용자는 동시에 block을 편집할 것이며, 실시간 동기화, 히스토리 및 잠재적 롤백을 위해 이러한 변경 사항을 기록해야 합니다. 과제는 _세밀한 변경 사항_(실시간 병합이 원활하도록)을 관리하면서 사용자에게 모든 작은 편집으로 압도하지 않고 _의미 있는 버전 히스토리_를 제공하는 것입니다. 또한 문서를 로드하는 것은 효율적이어야 합니다 – 새로운 협업자마다 처음부터 무한한 작업 로그를 다시 적용할 수 없습니다. **세분성, 성능 및 명확성**의 균형을 맞추는 전략이 필요합니다.

## 결정

**3계층 버전 관리 접근 방식 채택:** (1) 실시간 협업을 위한 원자적 변경으로서의 **Step**, (2) 효율성을 위한 주기적 전체 상태 체크포인트로서의 **Snapshot**, (3) 히스토리의 레이블이 지정된 마일스톤으로서의 **사용자 대면 버전**.

- **Step (작업 변경):** 모든 편집 작업을 _Step_으로 기록합니다. ProseMirror의 컨텍스트에서 Step은 "위치 X에 텍스트 삽입" 또는 "범위 Y에서 5자 삭제"와 같은 작은 변경입니다. 각 step은 편집 중인 특정 Block 또는 문서와 연결되며 적용된 기본 버전을 전달합니다. Step은 Convex 테이블(예: steps)에 다음 필드로 저장됩니다: {documentId, stepData, version, clientId, timestamp}. 각 문서에 단조 증가하는 **버전 번호**를 할당하며, 이는 확인된 각 step마다 증가합니다. ProseMirror의 선형 버전 카운터와 유사합니다[[3]](https://marijnhaverbeke.nl/blog/collaborative-editing.html#:~:text=changes%2520in%2520a%2520different%2520order,will%2520produce%2520the%2520same%2520document). 이 버전은 본질적으로 "진실의 원천" 상태 인덱스입니다.
- **Snapshot (주기적 체크포인트):** 정기적으로 전체 콘텐츠 상태를 Snapshot으로 캡처합니다. snapshot은 특정 버전의 주어진 block/문서에 대한 전체 ProseMirror 문서 JSON일 수 있습니다. Snapshot은 snapshots 테이블에 저장됩니다: {documentId, version, contentState, timestamp}. **디바운스된 snapshot** 메커니즘을 구현합니다: 편집이 쇄도한 후 문서가 짧은 간격(예: 1초) 동안 유휴 상태이고 마지막 편집자가 현재 사용자인 경우, 클라이언트는 전체 문서 상태를 패키징하여 서버에 snapshot으로 보냅니다[[4]](https://github.com/get-convex/prosemirror-sync#:~:text=*%2520Server,side,%2520enabling%2520easy%2520AI%2520interoperation)[[5]](https://github.com/get-convex/prosemirror-sync#:~:text=const%2520prosemirrorSync%2520=%2520new%2520ProsemirrorSync\(components,//). 이는 과도한 오버헤드를 피하기 위해 안정적인 상태만 snapshot한다는 것을 의미합니다. 새로운 협업자는 최신 snapshot을 로드하고 오래된 step의 긴 체인을 적용하는 것을 건너뛸 수 있습니다[[6]](https://github.com/get-convex/prosemirror-sync#:~:text=Configuring%2520the%2520snapshot%2520debounce%2520interval).
- **사용자 대면 버전:** 모든 낮은 수준의 step을 최종 사용자에게 노출하지 않기 위해 더 높은 수준의 버전 마커를 정의합니다. 이는 자동으로 생성되거나(예: 일일 버전 또는 편집의 중요한 일시 중지 후) 수동으로 생성될 수 있습니다("버전 저장" 작업). 사용자 대면 버전은 기본적으로 친숙한 이름이나 번호가 있는 step 로그의 특정 snapshot 또는 체크포인트를 가리킵니다. 이러한 버전을 메타데이터(작성자, 레이블, 타임스탬프, snapshot 참조)와 함께 버전 로그에 유지할 수 있습니다. MVP에서는 snapshot 자체를 사용자에게 보이는 버전으로 취급할 수 있습니다(특정 시간의 문서 상태를 나타내므로). 결국 사용자가 특정 snapshot에 태그를 지정하거나(또는 요청 시 생성) 주목할 만한 버전으로 사용할 수 있습니다.

이 체계에서 **문서의 상태는 최신 snapshot에서 시작하여 후속 step을 적용하여 재구성됩니다**. 새로운 클라이언트는 (Convex를 통해) 최신 snapshot과 해당 snapshot 이후의 step 목록을 가져옵니다. 이는 시작부터 전체 히스토리가 필요하지 않도록 방지합니다. 또한 **히스토리 잘라내기**를 구현할 것입니다: snapshot이 존재한 후 더 이상 필요하지 않은 오래된 step은 공간을 절약하기 위해 보관하거나 삭제할 수 있습니다[[4]](https://github.com/get-convex/prosemirror-sync#:~:text=*%2520Server,side,%2520enabling%2520easy%2520AI%2520interoperation). Convex ProseMirror 동기화 컴포넌트는 오래된 snapshot/step을 안전하게 삭제하는 API를 포함하고 있으며[[7]](https://github.com/get-convex/prosemirror-sync#:~:text=*%2520Server,for%2520old%2520snapshots%2520&%2520steps), 이를 활용하거나 모방할 것입니다.

## 근거

이 다층 접근 방식은 협업 편집 및 소스 제어의 모범 사례에서 영감을 받았습니다:

- **동시성을 위한 세밀한 OT:** Step 로그(버전 번호 포함)는 실시간 OT(Operational Transform) 스타일 병합에 필수적입니다. 각 변경에 버전을 할당하고 순서가 맞지 않는 변경을 리베이스함으로써 ProseMirror의 알고리즘이 예상하는 선형 히스토리를 보장합니다[[8]](https://marijnhaverbeke.nl/blog/collaborative-editing.html#:~:text=Like%2520OT,%2520ProseMirror%2520uses%2520a,will%2520produce%2520the%2520same%2520document). 드물게 전체 문서 버전만 저장했다면 동시 편집을 올바르게 병합하는 데 필요한 세부 정보를 잃게 됩니다.
- **성능을 위한 Snapshot:** 시간이 지남에 따라 문서는 수천 개의 step을 축적할 수 있습니다. 처음부터 모두 재생하는 것은 느릴 것입니다. Snapshot을 사용하면 새 사용자가 최근 상태에서 시작하고 전체 히스토리를 재생하지 않을 수 있습니다[[4]](https://github.com/get-convex/prosemirror-sync#:~:text=*%2520Server,side,%2520enabling%2520easy%2520AI%2520interoperation). 이는 데이터베이스 체크포인팅이나 Git이 커밋 시 전체 트리 객체를 사용하는 방식과 유사합니다 – 상태를 재구성하는 데 필요한 작업을 제한합니다.
- **사용자 친화적인 버전 히스토리:** 모든 키 입력(step)의 원시 목록은 사람에게 유용하지 않습니다. Snapshot은 더 의미 있는 상태를 제공합니다(예: 단락이 완성된 후). 선택된 snapshot을 노출하거나(또는 step을 더 큰 "커밋"으로 결합) 사용자에게 이해 가능한 버전 히스토리를 제공합니다. 이는 여러 step 업데이트가 백엔드에서 하나의 커밋으로 그룹화되는 **커밋 기반 협업** 아이디어와 일치합니다[[9]](https://stepwisehq.com/blog/2023-07-25-prosemirror-collab-performance/#:~:text=The%2520gist%2520is%2520that%2520we,them%2520back%2520to%2520the%2520clients). 가능한 경우 한 사용자의 연속 step을 논리적 커밋으로 **일괄 처리**할 계획이므로 히스토리가 사소한 편집으로 넘치지 않습니다. 예를 들어, 단어를 입력하면 여러 문자 삽입 step이 생성될 수 있지만 히스토리를 볼 때 전체 단어 삽입을 하나의 버전으로 취급할 수 있습니다.
- **ProseMirror 및 Convex와의 호환성:** ProseMirror의 협업 스키마에는 이미 step과 버전의 개념이 포함되어 있으며, Convex _prosemirror-sync_ 컴포넌트는 디바운스와 함께 snapshot 및 step 처리를 구현합니다[[10]](https://github.com/get-convex/prosemirror-sync#:~:text=,side,%2520enabling%2520easy%2520AI%2520interoperation)[[11]](https://github.com/get-convex/prosemirror-sync#:~:text=Configuring%2520the%2520snapshot%2520debounce%2520interval). 이 모델을 따름으로써 알려지고 테스트된 패턴을 활용합니다. "버전" 정수는 작업하기 쉽고(단조 카운터) Convex 데이터에 잘 맞습니다(비교할 숫자일 뿐).
- **복구 및 감사:** 이 전략을 사용하면 snapshot에 step을 적용하여 문서의 과거 버전을 검색할 수 있으며, "히스토리 보기" 또는 "이전 버전으로 실행 취소"와 같은 기능을 용이하게 합니다. 또한 변경 사항의 감사 로그를 제공합니다(누가 언제 어떤 편집을 했는지, step 레코드에 사용자 ID를 포함하는 경우). 주기적으로 snapshot을 저장하면 긴 작업 시퀀스가 손실되거나 복구하기에 너무 비용이 많이 드는 경우를 방지합니다.

## 고려된 대안

- **세밀한 히스토리 없음 (마지막 쓰기 우선):** 각 block에 대한 최신 콘텐츠 상태만 저장하고 편집 시 덮어씁니다. 협업 편집이나 실행 취소를 지원할 수 없기 때문에 거부되었습니다. 또한 모든 히스토리를 잃게 됩니다 – 변경 사항 추적이 중요한 지식 시스템에는 허용되지 않습니다.
- **전체 Snapshot만 저장 (버전당 문서):** 각 중요한 변경에 대해 문서의 전체 복사본을 저장하는 것을 고려했습니다(step 없는 버전 히스토리처럼). 간단하지만 대용량 콘텐츠에 대해 매우 저장 공간이 비효율적이며 동시 편집 병합을 어렵게 만듭니다(콘텐츠 diff/병합을 수행해야 하며, 본질적으로 OT 또는 CRDT를 처음부터 다시 구현).
- **CRDT 기반 버전 관리 (예: Yjs):** CRDT는 기본적으로 병합을 허용하고 본질적으로 버전이 없는 충돌 없는 히스토리를 가집니다. ProseMirror의 스키마와의 통합을 복잡하게 하고 데이터 크기를 증가시키기 때문에(CRDT 툼스톤 등) MVP에서는 이를 결정하지 않았습니다. 중앙 집중식 서버를 고려할 때 ProseMirror의 자체 협업 접근 방식(중앙 권한이 있는 OT)이 충분하고 더 간단합니다[[12]](https://marijnhaverbeke.nl/blog/collaborative-editing.html#:~:text=The%2520design%2520decisions%2520that%2520make,be%2520interesting%2520to%2520work%2520on). 오프라인 편집이나 분산 작업이 필요한 경우 CRDT를 향후 옵션으로 언급합니다(확장 경로 참조).
- **Git과 같은 커밋 트리:** 또 다른 아이디어는 각 저장된 버전을 체인의 커밋으로 취급하고, 동시 편집을 위해 분기한 다음 병합하는 것이었습니다. 이는 강력하지만(문서 분기/포크 허용) 모델과 UI에 많은 복잡성을 추가합니다. ProseMirror의 선형 버전과 일치하는 MVP용 선형 히스토리를 선택했습니다(실시간 협업에서 기본적으로 분기를 지원하지 않음)[[13]](https://marijnhaverbeke.nl/blog/collaborative-editing.html#:~:text=changes%2520on%2520top%2520of%2520them,,before%2520retrying%2520the%2520push).

## 영향

- **저장소 증가:** 모든 편집은 step 레코드를 생성하고 주기적 snapshot은 문서 콘텐츠를 복제합니다. 오래된 데이터를 정리하여 저장소를 관리해야 합니다. **보존 정책**을 구현할 것입니다. 예: 지난 X일 동안의 모든 step과 주요 버전의 snapshot을 유지하되, 공간이 문제가 되면 오래된 세부 정보를 제거합니다. Convex 협업 컴포넌트는 사용할 수 있는 오래된 snapshot/step을 삭제하는 API를 제공합니다[[7]](https://github.com/get-convex/prosemirror-sync#:~:text=*%2520Server,for%2520old%2520snapshots%2520&%2520steps).
- **충돌 해결 UX:** 기술적 수준에서 충돌은 OT(리베이스)로 처리됩니다. 그러나 사용자 관점에서 동시 편집은 콘텐츠에서 혼란스러운 결과를 생성할 수 있습니다(예: 인터리브된 텍스트). 버전 히스토리는 무슨 일이 일어났는지 캡처하지만 겹침을 _방지_하지는 않습니다. 두 사람이 같은 문장을 편집하면 사용자는 콘텐츠가 빠르게 변경되는 것을 볼 수 있습니다. 버전 히스토리는 두 편집을 순차적으로 표시합니다. 충돌을 강조하거나 최소한 presence 표시기(ADR 7)가 근처에서 편집할 때 사용자에게 경고하도록 해야 할 수 있습니다.
- **버전 번호 및 클라이언트 상태:** 각 block 또는 문서에는 현재 versionNumber가 있습니다. 클라이언트는 로컬 버전을 추적하고 서버와 동기화할 때마다 업데이트해야 합니다. 클라이언트가 오프라인 상태였다가 돌아오면 마지막으로 알려진 버전 이후의 모든 step을 가져와야 합니다. 이는 모델에서 지원됩니다(Convex에서 버전 X > step 가져오기). 그러나 클라이언트가 너무 뒤처진 경우(예: 마지막 버전 snapshot이 제거됨) 대신 snapshot을 보냅니다(서버는 누락된 step 수가 많은지 감지하고 다시 동기화하기 위해 snapshot을 보낼 수 있음).
- **히스토리를 위한 사용자 인터페이스:** 처음에는 최종 사용자에게 전체 히스토리 UI를 노출하지 않을 수 있지만 내부적으로 데이터가 있습니다. 나중에 변경 사항의 타임라인을 표시하거나 "여기로 실행 취소"를 허용하는 것은 snapshot과 step을 활용하여 가능합니다. 히스토리를 표시할 때 일괄 처리된 step을 조정하는 방법을 조정해야 합니다(히스토리를 표시할 때 시간이나 작성자별로 step을 그룹화할 수 있음).
- **감사 및 귀속:** 각 step은 작성자의 사용자 ID와 타임스탬프를 전달할 수 있습니다. 이를 통해 각 block에 대한 감사 로그를 구축할 수 있습니다. 누가 무엇을 기여했는지 아는 것은 지식 시스템에 중요합니다. step 세분성으로 저장하면 매우 상세한 감사가 가능합니다. 용이성을 위해 snapshot/버전 수준에서 요약할 수 있습니다(예: "Alice가 10:45에 이 단락을 편집했고, Bob이 10:47에 편집했습니다").

## 확장 경로

- **CRDT 또는 오프라인 지원:** 향후 오프라인 편집이나 분산 서버 네트워크가 필요한 경우 순수 OT에서 CRDT 기반 접근 방식(예: Yjs)으로 전환할 수 있습니다. CRDT는 중앙 진실의 원천이 필요하지 않으며 명시적 snapshot 없이 변경 사항을 병합할 수 있습니다. 그런 다음 ProseMirror step 대신 CRDT 상태 또는 업데이트를 저장합니다. 현재 아키텍처는 협업 엔진을 교체하여 이를 수용할 수 있습니다(ADR 3 확장 참조) – 사용 가능한 경우 Yjs 전용 Convex 컴포넌트를 사용할 수 있습니다[[14]](https://github.com/get-convex/prosemirror-sync#:~:text=,and%2520doesn't%2520have%2520local%2520changes). 이를 통해 여러 서버 또는 오프라인 클라이언트가 선형 버전 없이 상태를 수렴할 수 있습니다.
- **명명된 버전 관리 및 분기:** 주요 마일스톤에 대한 "명명된 버전"(git 태그 또는 분기와 같은) 개념을 도입할 계획입니다. 예를 들어, 사용자는 block 또는 문서를 "v1.0 Published"로 표시할 수 있습니다. 이는 레이블이 있는 snapshot을 생성하기만 하면 됩니다. 향후 분기(block을 두 개의 분기 버전으로 포크)는 대체 편집을 제안하거나 다른 방향으로 지식을 포크하는 시나리오에 대해 지원될 수 있습니다. step/snapshot 모델은 분기 ID에 step을 키잉하여 여러 병렬 로그를 유지해야 하며, 이는 사소하지 않은 확장이지만 개념적으로 가능합니다.
- **전역 버전 시계 또는 연합 버전 관리:** block이 다른 도메인이나 시스템에서 참조되는 경우 더 전역적인 버전 식별이 필요할 수 있습니다. 예를 들어, 두 개의 다른 Convex 배포가 block을 교환하는 경우 편집을 병합하는 방법은? 잠재적 확장은 단일 정수 대신 연합 설정에서 버전 관리를 위해 **Lamport 타임스탬프 또는 벡터 시계**와 같은 것을 사용하는 것입니다. 이는 연합이 필요한 경우 CRDT 접근 방식과 쌍을 이룰 것입니다.
- **최적화된 일괄 커밋:** step 일괄 처리 아이디어를 기반으로 서버 측 커밋 집계를 구현할 수 있습니다. 예를 들어, 각 개별 step을 즉시 브로드캐스트하는 대신 서버는 동일한 이전 버전을 기반으로 하는 여러 사용자의 step을 축적하고 하나의 논리적 커밋에 적용할 수 있습니다(필요에 따라 변환). 이 접근 방식은 연구에서 언급한 바와 같이[[9]](https://stepwisehq.com/blog/2023-07-25-prosemirror-collab-performance/#:~:text=The%2520gist%2520is%2520that%2520we,them%2520back%2520to%2520the%2520clients) 많은 클라이언트 재시도를 피하고 처리량을 향상시킬 수 있습니다[[22]](https://stepwisehq.com/blog/2023-07-25-prosemirror-collab-performance/#:~:text=Can%2520we%2520eliminate%2520the%2520need,work%2520closer%2520to%2520the%2520database). 이를 구현하면 서버가 때때로 순서가 맞지 않는 step을 수락하고 내부적으로 변환하여 거부하지 않습니다(더 고급 알고리즘). 필요한 경우 부하가 많은 상태에서 협업 원활성을 개선하기 위해 이를 반복할 수 있습니다.
- **Workflow/AI와의 통합 (Mastra):** 버전 히스토리는 AI 에이전트에서 활용될 수 있습니다(ADR 8 참조). 예를 들어, 에이전트는 버전 간의 diff를 분석하여 변경 사항을 요약하거나 문제가 있는 편집을 자동으로 되돌릴 수 있습니다. 구조화된 히스토리는 이러한 기능을 가능하게 합니다. 에이전트나 UI에 대한 빈번한 작업인 경우 빠른 비교를 위해 **차이 저장소**(사전 계산된 diff)를 추가할 수 있습니다.
