gsap.from("#page2 img",{
    width:"100%",
    duration:3,
    delay:0.5,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
scrub:3,
markers:true,
start:"top 0",
end:"top -80%",
pin:true,
    }
})