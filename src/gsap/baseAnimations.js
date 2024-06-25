import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

///////////////////////////
// Fade From Top
///////////////////////////
export const fadeFromTop = (selector) => {
  gsap.fromTo(
    selector,
    { y: -50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: selector,
        start: "bottom center",
      },
    }
  );
};

///////////////////////////
// Fade From Top | Multiple
///////////////////////////
export const fadeFromTopMultiple = (selector) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    gsap.fromTo(
      element,
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: selector,
          start: "top center",
        },
      }
    );
  });
};

///////////////////////////
// Fade In| Multiple
///////////////////////////
export const fadeInMultiple = (selector) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    gsap.fromTo(
      element,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: selector,
          start: "top center",
        },
      }
    );
  });
};

export const slamInTop = (selector) => {
  gsap.fromTo(
    selector,
    { y: -40, opacity: 0, scale:2 },
    {
      y: 0,
      x:0,
      opacity: 1,
      scale:1,
      duration: 1,
    //   ease: 'power3.inOut',
      ease: 'power4.inOut',
    }
  );
};
