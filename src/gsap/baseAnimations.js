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
// Fade From Top | No Trigger
///////////////////////////
export const fadeFromTopNT = (selector) => {
  gsap.fromTo(
    selector,
    { y: -50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
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
          start: "top top",
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
    { y: -40, opacity: 0, scale: 2 },
    {
      y: 0,
      x: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      //   ease: 'power3.inOut',
      // either the scale of the power 4 causes layout shifts when paired with moving backgrounds
      ease: "power4.inOut",
    }
  );
};

export const FadeInTopAngle = (selector, side) => {
  gsap.fromTo(
    selector,
    { y: -40, opacity: 0, scale: 1.15, x: side === "left" ? -100 : 100 },
    {
      y: 0,
      x: 0,
      opacity: 1,
      scale: 1,
      duration: 1,
      scrollTrigger: {
        trigger: selector,
        start: "center center",
        ease: "sine.out",
      },
      //   ease: 'power3.inOut',
    }
  );
};

export const longFadeIn = (selector) => {
  gsap.fromTo(
    selector,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      delay: 1,
    }
  );
};

export const elasticMoveRight = (selector, ref) => {
  gsap.fromTo(
    selector,
    { opacity: 0, x: -300 },
    {
      x: 0,
      opacity: 1,
      duration: 2,
      ease: "elastic.out",
      scrollTrigger: {
        trigger: ref,
        start: "top 70%",
      },
    }
  );
};

export const fadeInFromSide = (selector, ref, side) => {
  gsap.fromTo(
    selector,
    { x: side === "left" ? -100 : 100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "sine.out",
      scrollTrigger: {
        trigger: ref,
        start: "top 70%",
      },
    }
  );
};
