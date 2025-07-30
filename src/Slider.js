import React from "react";
import Hero from "./components/Hero";
import 

const slides = gsap.utils.toArray(".slide");
// Pause between slides
const delay = 2;
const tl = gsap.timeline({
  repeat: -1,
  defaults: {
    ease: "power1.inOut",
    transformOrigin: "center center -150px"
  }
});

gsap.set(slides, {
  rotationY: (i) => (i ? 90 : 0),
  transformOrigin: "center center -150px"
});

slides.forEach((slide, i) => {
  const nextSlide = slides[i + 1];
  tl.to(
    slide,
    {
      rotationY: -90,
      onComplete: () => gsap.set(slide, { rotationY: 90 })
    },
    "+=" + delay
  );
  if (nextSlide) {
    tl.to(
      nextSlide,
      {
        rotationY: 0
      },
      "<"
    );
  }
});
// At the end of the timeline move in the first element
tl.to(
  slides[0],
  {
    rotationY: 0
  },
  "<"
);