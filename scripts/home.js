const tl = gsap.timeline({defaults: {
        ease: 'power1.out'
    }});

tl.to('.slider', {opacity:0, duration:5});
tl.fromTo('header',{opacity: 0}, {opacity:1, duration:5}, '-=5');
/*tl.fromTo('.categories',{opacity: 0}, {opacity:1, duration:5}, '-=3.5');*/
/*tl.to('.head-title', {y:'0%', duration: 2.5}, '-=4');*/
/*tl.fromTo('.title-text',{opacity: 0}, {opacity:1, duration:2.5}, '-=2.5');*/
