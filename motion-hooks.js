/**
 * GSAP integration boundary.
 *
 * Static structure stays in HTML/CSS.
 * Motion orchestration should be composed here by selecting nodes via
 * stable data-gsap and data-gsap-item hooks.
 */

const motionHooks = {
  hero: document.querySelector('[data-gsap="hero-sequence"]'),
  services: document.querySelector('[data-gsap="services-stagger"]'),
  builds: document.querySelector('[data-gsap="builds-track"]'),
};

export function getMotionHooks() {
  return motionHooks;
}

// Future: inject GSAP timelines conditionally after importing gsap and plugins.
// Keep animations intentional: focus hero, section transitions, and CTA emphasis only.
