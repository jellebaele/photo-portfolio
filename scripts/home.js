const tl = gsap.timeline({defaults: {
        ease: 'power1.out'
    }});

tl.to('.slider', {opacity:0, duration:5});
tl.fromTo('header',{opacity: 0}, {opacity:1, duration:5}, '-=5');
