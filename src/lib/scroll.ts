export function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function scrollToSelector(selector: string): void {
  document.querySelector(selector)?.scrollIntoView({
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
  });
}
