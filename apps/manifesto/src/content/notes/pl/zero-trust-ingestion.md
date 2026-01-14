---
title: Ingestia zero-trust
description: Protokół wymagający jawnej proweniencji przed przyjęciem twierdzeń
---

Ingestia zero-trust to protokół, który domyślnie traktuje napływające informacje jako niezweryfikowane. Każde [twierdzenie](./claim) musi zawierać jawną [proweniencję](./provenance) i przejść przez [weryfikację](./verification), zanim zyska autorytet w systemie wiedzy.

Nazwa nawiązuje do bezpieczeństwa zero-trust: nie zakładaj, że cokolwiek jest bezpieczne, dopóki nie zostanie to udowodnione. W praktyce oznacza to, że nowe twierdzenia wchodzą ze statusem `tentative`, muszą dać się prześledzić do [źródeł](./source) oraz [fragmentów dowodowych](./evidence-span), a także powinny zostać poddane [wyszukiwaniu „najpierw obalenie"](./rebuttal-first-search), zanim zostaną uznane za ugruntowane.

Ingestia zero-trust stanowi obronę przed [Śmieci AI](./ai-slop) i [Załamanie Encyklopedii](./encyclopedia-meltdown). Gdy środowisko zostaje zalane wiarygodnie brzmiącymi, lecz niezweryfikowanymi treściami, jedyną bezpieczną postawą jest wymaganie dowodu pochodzenia i odporności na zakwestionowanie przed akceptacją.
