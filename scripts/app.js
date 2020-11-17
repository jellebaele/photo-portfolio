const tl = gsap.timeline({defaults: {
    ease: 'power1.out'
    }});

tl.to('.slider', {opacity:0, duration:3});
tl.fromTo('.main-text', {opacity: 0}, {opacity: 1, duration: 1.5}, '-=1');
tl.to('.view-site', {y:'0%', duration: 1.5}, '-=1.5');
/*
tl.to('.text', {y:'0%', duration: 1, stagger: 0.25});
tl.to(".slider", {y: '-100%', duration: 1.5, delay: 0.5});
tl.to('.intro', {y:'-100%', duration: 1}, '-=1');
tl.fromTo('.main-text', {opacity: 0}, {opacity: 1, duration: 1});*/