$(".menu-btn").on("click", function (e) {
	e.preventDefoult;
	$(this).toggleClass("menu-btn_active");
	$(".menu-nav").toggleClass("menu-nav_active");
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

ScrollSmoother.create({
  wrapper: '.wrapper-content',
  content: '.content',
  smooth: 3,
  smoothTouch: 0.1,
  effects: true
});

gsap.fromTo('.header-content', {opacity:1}, {opacity:0, 
  scrollTrigger: {
    trigger: '.header-content',
    start: 'center',
    end: '1450px',
    scrub: true
  },
  duration: 5,
});

let itemsL = gsap.utils.toArray('.gallery__left')
itemsL.forEach((item) => {
  gsap.fromTo(item, {x:-500, opacity: 0}, {opacity: 1, x:0, scrollTrigger: {
    trigger: item,
    start: '-950px',
    end: "-300px",
    scrub: true
  }, duration: 3, rotate: 360,})
})

gsap.to('.img-fluid',{
  boxShadow: "0px 0px 25px #6b6a6a",
  boxShadow: "0px 0px 50px #6b6a6a",
  borderRadius: "5px",
  duration: 3,
});

let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')
itemsR.forEach((item) => {
  gsap.fromTo(item, {x:500, opacity: 0}, {opacity: 1, x:0, scrollTrigger: {
    trigger: item,
    start: '-950px',
    end: "-300px",
    scrub: true
  }})
});

let itemsC = gsap.utils.toArray('.gallery__center')
itemsC.forEach((item) => {
  gsap.fromTo(item, {x:-250, y:-250, opacity:0}, {opacity:1, x:0, y:0,
    scrollTrigger: {
      trigger: item,
      start: 'top top',
      end: 'bottom center',
      scrub: true
    }, duration: 3,})
});

let itemsZ = gsap.utils.toArray('.gallery-prize__center .img-fluid')
itemsZ.forEach((item) => {
  gsap.fromTo(item, {x:-250, opacity:0}, {opacity:1, x:0,
    scrollTrigger: {
      trigger: item,
      start: '-550px',
      end: 'top',
      scrub: true
    }, duration: 5,})
});

gsap.fromTo('.header-content__img', {opacity:1}, {opacity:0, 
  scrollTrigger: {
    trigger: '.header-content__img',
    start: 'top',
    end: 'center',
    scrub: true
  },
  duration: 1,
});
gsap.fromTo('.header-content__maintext', {opacity:1}, {opacity:0, 
  scrollTrigger: {
    trigger: '.header-content__maintext',
    start: 'top',
    end: 'center',
    scrub: true
  },
  duration: 1,
});
gsap.fromTo('#donntu', {opacity:1}, {opacity:0, 
  scrollTrigger: {
    trigger: '#donntu',
    start: 'top',
    end: 'center',
    scrub: true
  },
  duration: 1,
});
gsap.fromTo('#photomag', {opacity:1}, {opacity:0, 
  scrollTrigger: {
    trigger: '#photomag',
    start: 'top',
    end: 'center',
    scrub: true
  },
  duration: 1,
});
gsap.fromTo('.header-maintext', {opacity:1}, {opacity:0, 
  scrollTrigger: {
    trigger: '.header-maintext',
    start: 'top',
    end: 'center',
    scrub: true
  },
  duration: 1,
});
gsap.fromTo('hr', {opacity:1}, {opacity:0, 
  scrollTrigger: {
    trigger: 'hr',
    start: 'top',
    end: 'center',
    scrub: true
  },
  duration: 1,
});

gsap.fromTo('.header-content__text', {opacity:1}, {opacity:0, 
  scrollTrigger: {
    trigger: '.header-content__text',
    start: 'top',
    end: 'center',
    scrub: true
  },
  duration: 1,
});
gsap.fromTo('.menu-nav .link .menu-btn', {opacity:1}, {opacity:0, 
  scrollTrigger: {
    trigger: '.menu-nav',
    start: 'top',
    end: 'center',
    scrub: true
  },
  duration: 1,
});

gsap.fromTo('.portfolio__maintext-1', {opacity:0}, {opacity:1, 
  scrollTrigger: {
    trigger: '.portfolio__maintext-1',
    start: '-550px',
    end: 'center',
    scrub: true
  },
  duration: 3,
});
gsap.fromTo('.portfolio__maintext-2', {opacity:0}, {opacity:1, 
  scrollTrigger: {
    trigger: '.portfolio__maintext-2',
    start: '-550px',
    end: 'center',
    scrub: true
  },
  duration: 3,
});
gsap.fromTo('.portfolio__text-1', {opacity:0}, {opacity:1, 
  scrollTrigger: {
    trigger: '.portfolio__maintext',
    start: '-75px',
    end: 'center',
    scrub: true
  },
  duration: 3,
});

gsap.fromTo('.portfolio__maintext-3', {opacity:0}, {opacity:1, 
  scrollTrigger: {
    trigger: '.portfolio__maintext-3',
    start: '-500px',
    end: 'center',
    scrub: true
  },
  duration: 3,
});
gsap.fromTo('.portfolio__maintext-4', {opacity:0}, {opacity:1, 
  scrollTrigger: {
    trigger: '.portfolio__maintext-4',
    start: '-400px',
    end: 'center',
    scrub: true
  },
  duration: 4,
});
gsap.fromTo('#bakalavr', {opacity:0}, {opacity:1, 
  scrollTrigger: {
    trigger: '#bakalavr',
    start: '-300px',
    end: 'center',
    scrub: true
  },
  duration: 5,
});
gsap.fromTo('#bakalavr-2', {opacity:0}, {opacity:1, 
  scrollTrigger: {
    trigger: '#bakalavr-2',
    start: '-500px',
    end: 'center',
    scrub: true
  },
  duration: 5,
});
gsap.fromTo('.portfolio__text-2', {opacity:0}, {opacity:1, 
  scrollTrigger: {
    trigger: '.portfolio__text-2',
    start: '-300px',
    end: 'center',
    scrub: true
  },
  duration: 5,
});

gsap.fromTo('#prize', {opacity:0}, {opacity:1, 
  scrollTrigger: {
    trigger: '#prize',
    start: '-300px',
    end: 'center',
    scrub: true
  },
  duration: 3,
});