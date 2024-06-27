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
          trigger: element,
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
          trigger: element,
          start: "top center",
        },
      }
    );
  });
};

///////////////////////////
// Slam In Top
///////////////////////////
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
      ease: "power4.inOut",
    }
  );
};

///////////////////////////
// Fade In Top Angle
///////////////////////////
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
    }
  );
};

///////////////////////////
// Long Fade In
///////////////////////////
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

///////////////////////////
// Elastic Move Right
///////////////////////////
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

///////////////////////////
// Fade In From Side
///////////////////////////
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
