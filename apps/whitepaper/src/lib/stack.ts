export interface StackState {
  stack: string[];
  focusIndex: number;
}

export function parseStackFromParams(
  rootSlug: string,
  searchParams: URLSearchParams
): StackState {
  const stackParam = searchParams.get('stack');
  const focusParam = searchParams.get('focus');
  
  const additionalSlugs = stackParam
    ? stackParam.split(',').map((slug) => slug.trim()).filter((s) => s.length > 0)
    : [];
  
  const stack = [rootSlug, ...additionalSlugs];
  const parsedFocusIndex = focusParam ? Number.parseInt(focusParam, 10) : stack.length - 1;
  const focusIndex = Number.isNaN(parsedFocusIndex) ? stack.length - 1 : parsedFocusIndex;
  
  return {
    stack,
    focusIndex: Math.min(Math.max(0, focusIndex), stack.length - 1),
  };
}

export function serializeStackToParams(stack: string[]): string {
  if (stack.length <= 1) {
    return '';
  }
  
  const additionalSlugs = stack.slice(1);
  return `stack=${additionalSlugs.join(',')}`;
}

export function buildStackUrl(stack: string[], focusIndex?: number): string {
  if (stack.length === 0) return '/';
  
  const rootSlug = stack[0];
  const stackParams = serializeStackToParams(stack);
  
  const params: string[] = [];
  if (stackParams) params.push(stackParams);
  if (focusIndex !== undefined && focusIndex !== stack.length - 1) {
    params.push(`focus=${focusIndex}`);
  }
  
  return `/notes/${rootSlug}${params.length > 0 ? `?${params.join('&')}` : ''}`;
}

export function pushToStack(
  currentStack: string[],
  newSlug: string,
  fromIndex: number
): string[] {
  if (currentStack.length === 0) {
    return [newSlug];
  }
  const safeIndex = Math.min(Math.max(fromIndex, 0), currentStack.length - 1);
  return [...currentStack.slice(0, safeIndex + 1), newSlug];
}

export function popFromStack(currentStack: string[]): string[] {
  if (currentStack.length <= 1) {
    return currentStack;
  }
  return currentStack.slice(0, -1);
}

export function isInStack(stack: string[], slug: string): boolean {
  return stack.includes(slug);
}

export function getStackIndex(stack: string[], slug: string): number {
  return stack.indexOf(slug);
}
