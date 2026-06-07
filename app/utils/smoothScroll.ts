import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const NAV_OFFSET = 92;

export const scrollToSection = (sectionId: string) => {
  if (typeof window === "undefined") return;

  const target = document.getElementById(sectionId);
  if (!target) return;

  gsap.to(window, {
    duration: 0.9,
    ease: "power2.out",
    scrollTo: {
      y: target,
      offsetY: NAV_OFFSET,
    },
  });
};

export const scrollToTop = () => {
  if (typeof window === "undefined") return;

  gsap.to(window, {
    duration: 0.9,
    ease: "power2.out",
    scrollTo: 0,
  });
};
