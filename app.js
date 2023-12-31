// PRELOADER

function startLoader() {
  let counterElement = document.querySelector(".counter");
  let currentValue = 0;

  function updateCounter() {
    if (currentValue === 100) {
      return;
    }

    currentValue += Math.floor(Math.random() * 10) + 1;

    if (currentValue > 100) {
      currentValue = 100;
    }

    counterElement.textContent = currentValue;

    let delay = Math.floor(Math.random() * 200) * 50;
    setTimeout(updateCounter, delay);
  }
  updateCounter();
}

startLoader();

gsap.to(
  ".counter",
  0.25,
  {
    delay: 3,
    opacity: 0,
    display: "none",
  },
  ">"
);

gsap.to(
  ".bar",
  1.5,
  {
    delay: 3,
    height: 0,
    stagger: {
      amount: 0.5,
    },
    ease: "bounce.out",
  },
  ">"
);

gsap.to(
  ".overlay",
  5,
  {
    display: "none",
  },
  ">"
);

//  ANIMATING OF HEADER IMG

gsap.fromTo(
  ".header-color",
  {   opacity: 0 },
  { opacity: 1, duration: 0.1 },
  ">"
);

gsap.fromTo(
  ".nav-container",
  { yPercent: -50, opacity: 0 },
  { yPercent: 0, opacity: 1 },
  ">"
);

gsap.fromTo(
  ".section--1-title",
  { opacity: 0, scale: 2 },
  {
    opacity: 1,
    stagger: 1,
    duration: 0.5,

    scale: 1,
    ease: "bounce.out",
  },
  ">"
);

gsap.fromTo(".svg-header", { opacity: 0 }, { opacity: 1 }, ">");

gsap.fromTo(
  ".duck-body",
  { opacity: 0 },
  {
    opacity: 1,

    stagger: 1,
    duration: 0.2,
    ease: "bounce.out",
  },
  ">"
);
gsap.fromTo(
  ".duck-mouth",
  { opacity: 0 },
  {
    opacity: 1,

    stagger: 1,
    duration: 0.2,

    ease: "bounce.out",
  },
  ">"
);
gsap.fromTo(
  ".duck-neck",
  { opacity: 0, scale: 2 },
  {
    opacity: 1,
    y: "00px",

    duration: 0.2,
    scale: 1,
    ease: "bounce.out",
  },
  ">"
);

gsap.fromTo(
  ".box-1",
  { opacity: 0, scale: 2 },
  {
    opacity: 1,

    duration: 0.2,
    scale: 1,
    ease: "bounce.out",
  },
  ">"
);

gsap.fromTo(
  ".box-2",
  { opacity: 0, scale: 2 },
  {
    opacity: 1,
    y: "00px",

    duration: 0.2,
    scale: 1,
    ease: "bounce.out",
  },
  ">"
);

gsap.fromTo(
  ".mouth",
  { scale: 0.2 },
  {
    scale: 1,
    stagger: 1,
    duration: 0.2,
    ease: "bounce.out",
  },
  ">"
);

gsap.fromTo(
  ".main-mouth",
  { scale: 0.2 },
  {
    scale: 1,
    stagger: 1,
    duration: 0.2,
    ease: "bounce.out",
  },
  ">"
);

gsap.fromTo(
  ".main-chest",
  { opacity: 0, scale: 0.2 },
  {
    opacity: 1,
    duration: 0.2,
    scale: 1,
    stagger: 1,
    ease: "bounce.out",
  },
  ">"
);
gsap.fromTo(
  ".chest-1",
  { opacity: 0, scale: 0.2 },
  {
    opacity: 1,
    duration: 0.2,
    scale: 1,
    stagger: 1,
    ease: "bounce.out",
  },
  "<"
);
gsap.fromTo(
  ".chest-2",
  { opacity: 0, scale: 0.2 },
  {
    opacity: 1,
    duration: 0.2,
    scale: 1,
    stagger: 1,
    ease: "bounce.out",
  },
  "<"
);

gsap.fromTo(
  ".mobile",
  {
    backgroundColor: "#1e6f50;",
    opacity: 0,
    skewY: 1,
  },
  {
    backgroundColor: "#d9bd62",
    opacity: 1,
    skewY: 0,
    ease: "bounce.out",
    duration: 0.2,
  },
  ">"
);

gsap.fromTo(
  ".hero-text",
  { opacity: 0, color: "gray" },
  {
    opacity: 1,
    color: "white",
    stagger: 1,
    duration: 0.5,
    scale: 1,
    ease: "bounce.out",
  },
  ">"
);

gsap.fromTo(
  ".desktop",
  {
    backgroundColor: "#1e6f50;",
    opacity: 0,
    skewY: 1,
  },
  {
    backgroundColor: "#d9bd62",
    opacity: 1,
    skewY: 0,
    ease: "bounce.out",
    duration: 0.2,
  },
  ">"
);

// SHOW WHEN HOVERED
// document
//   .querySelector(".search-content")
//   .addEventListener("mouseenter", function () {
//     document.querySelector(".search").style.visibility = "visible";
//   });

// LEAVE WHEN NOT HOVERED
// document
//   .querySelector(".search-content")
//   .addEventListener("mouseleave", function () {
//     document.querySelector(".search").style.visibility = "hidden";
//   });

// SMOOTH SCROLLING
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  // console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
