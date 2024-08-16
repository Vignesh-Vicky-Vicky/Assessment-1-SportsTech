gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', () => {

    gsap.to('.line', {
        width: 300,
        duration: 1.25
    })

    // One
    const timelineOne = gsap.timeline({
        duration: 0.75,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '.section-one',
            start: "top 70%",
        }
    })

    timelineOne.fromTo('.section-one .left-section .img-wrapper', {
        x: 700,
        opacity: 0
    }, {
        x: 0,
        opacity: 1
    })
    timelineOne.fromTo('.section-one .right-section h5', {
        x: -600,
        opacity: 0
    }, {
        x: 0,
        opacity: 1
    }, '<')
    timelineOne.fromTo('.section-one .right-section p', {
        x: -600,
        opacity: 0
    }, {
        x: 0,
        opacity: 1
    }, '<30%')

    // Two
    const timelineTwo = gsap.timeline({
        scrollTrigger: {
            trigger: '.section-two',
            start: "top 55%",
        }
    });

    timelineTwo.fromTo('.section-two .left-section .img-wrapper', {
        scale: 0,
        opacity: 0
    }, {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "bounce.out",
    }, '<')
    timelineTwo.fromTo('.section-two .right-section h5', {
        scale: 0,
        opacity: 0
    }, {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "bounce.out",
    }, '<')
    timelineTwo.fromTo('.section-two .right-section p', {
        opacity: 0,
        scale: 0
    }, {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "bounce.out",
    }, '<30%')


    // Three
    const timelineThree = gsap.timeline({
        duration: 0.75,
        scrollTrigger: {
            trigger: '.section-three',
            start: "top 50%",
        }
    });

    timelineThree.fromTo('.section-three .left-section .img-wrapper', {
        scaleX: 0,
        opacity: 0
    }, {
        scaleX: 1,
        opacity: 1,
        duration: 0.75
    }, '<')
    timelineThree.fromTo('.section-three .right-section h5 span', {
        y: 80
    }, {
        y: 0
    }, '<')
    timelineThree.fromTo('.section-three .right-section p span', {
        y: -50
    }, {
        y: 0
    }, '<')

    // Four
    const timelineFour = gsap.timeline({
        scrollTrigger: {
            trigger: '.section-four',
            start: "top 55%",
        }
    }, '<');

    timelineFour.fromTo('.section-four .left-section .img-wrapper', {
        x: 100,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        duration: 0.75
    }, '<')
    timelineFour.fromTo('.section-four .right-section h5 span', {
        y: 120
    }, {
        y: 0,
        duration: 1.5,
        ease: "bounce.inOut",
        stagger: 0.1
    }, '<')
    timelineFour.fromTo('.section-four .right-section p span', {
        y: 60
    }, {
        y: 0
    }, '<')

    // Five
    const timelineFive = gsap.timeline({
        duration: 1.25,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '.section-five',
            start: "top 20%",
        }
    });

    timelineFive.fromTo('.section-five .left-section .img-wrapper img', {
        scale: 3,
        filter: 'grayscale(100%)'
    }, {
        scale: 1,
        filter: 'grayscale(0%)'
    }, '<')
    timelineFive.fromTo('.section-five .right-section h5 span', {
        x: -350
    }, {
        x: 0
    }, '<')
    timelineFive.fromTo('.section-five .right-section p span', {
        y: -30
    }, {
        y: 0
    }, '<50%')
})
