import type { RefObject } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import type { Transition } from 'framer-motion';

/** True only when the element is on screen and the user hasn't asked for reduced motion. */
export function useAmbientMotion(ref: RefObject<Element>): boolean {
  const reduced = useReducedMotion();
  const inView = useInView(ref);
  return !reduced && inView;
}

/** Looping opacity pulse; settles on the brightest value when inactive. */
export function pulseOpacity(active: boolean, values: number[], transition: Transition) {
  return active
    ? { animate: { opacity: values }, transition: { ...transition, repeat: Infinity } }
    : { animate: { opacity: Math.max(...values) } };
}
