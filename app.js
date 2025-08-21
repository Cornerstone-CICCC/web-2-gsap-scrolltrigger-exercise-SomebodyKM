gsap.registerPlugin(ScrollTrigger)

// YOUR CODE HERE

const lineOneTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.line-one',
        start: 'top',
        end: 'bottom 20%',
        // markers: true,
        pin: true,
        scrub: true
    }
})

lineOneTl
    .from('.line-one span', {
        x: 0,
        y: '100vh',
        stagger: .2
    })
    .to('.line-one', {
        backgroundColor: 'yellow'
    })
    .from('.sun', {
        x: '100vw',
    })
    .to('.sun', {
        x: '-100vw'
    }, '+=2')
    .to('.line-one span', {
        x: '100vw'
    }, '<')
    .to('.line-one', {
        backgroundColor: 'white'
    }, '<')

const lineTwoTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.line-two',
        start: 'top',
        end: 'bottom 20%',
        scrub: true,
        pin: true,
        // markers: true
    }
})

lineTwoTl
    .from('.line-two span:first-child', {
        x: '-100vw',
        scale: 10
    })
    .from('.line-two span:last-child', {
        x: '100vw',
        scale: 10
    }, '<')
    .to('.line-two span:first-child', {
        y: '-10px',
    })
    .to('.line-two span:first-child', {
        y: 0,
    })
    .to('.line-two span:last-child', {
        y: '-10px',
    })
    .to('.line-two span:last-child', {
        y: 0,
    })

const lineThreeTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.line-three',
        start: 'top',
        end: 'bottom 20%',
        scrub: true,
        pin: true,
        // markers: true
    }
})

lineThreeTl
    .from('.line-three span', {
        y: '100vh',
        stagger: .2
    })
    .to('.line-three', {
        backgroundPositionX: 0
    })
    .to('.line-three span', {
        color: 'white'
    }, '<')
    .from('.moon', {
        x: '100vw'
    }, '-=.5')
