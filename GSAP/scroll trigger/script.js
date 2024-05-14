gsap.from("#page1 #circle",{
    scale:0.5,
    duration:2,
    delay:0.5,
    rotate:360,
})

gsap.from("#page2 #circle",{
    scale:0.5,
    duration:2,
    delay:1,
    rotate:360,
    scrollTrigger:{
        trigger:"#page2 #circle",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 20%",
        scrub:2 ,
    }

})

gsap.from("#page3 #circle",{
    scale:0.5,
    duration:2,
    delay:1,
    rotate:360,
    scrollTrigger:{
        trigger:"#page3 #circle",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 20%",
        scrub:2 ,
    }

})

// gsap.from("#page2 #circle2",{
//     scale:0.5,
//     duration:2,
//     delay:0.5,
//     rotate:360,

// })

// gsap.from("#page3 #circle3",{
//     scale:0.2,
//     duration:2,
//     delay:0.5,
//     rotate:360,

// })