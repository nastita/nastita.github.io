import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export type { ScrollConfig };

interface ScrollConfig {
  containerId: string;
  triggerSelector: string;
  itemsSelector: string;
  scrubValue?: number;
  extraScrollPercent?: number;
}

export function createHorizontalScroll({
  containerId,
  triggerSelector,
  itemsSelector,
  scrubValue = 1,
  extraScrollPercent = 0,
}: ScrollConfig) {
  const container = document.querySelector(containerId);
  const items = gsap.utils.toArray(itemsSelector);

  // Create horizontal scroll animation
  gsap.to(items, {
    xPercent: -100 * (items.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: triggerSelector,
      start: 'top top',
      end: `+=${extraScrollPercent}%`,
      pin: true,
      scrub: scrubValue,
    },
  });

  // Animate each item as it comes into view
  items.forEach((item) => {
    gsap.from(item as Element, {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      scrollTrigger: {
        trigger: item as Element,
        start: 'left center',
        toggleActions: 'play none none reverse',
      },
    });
  });

  return {
    container,
    items,
  };
}
