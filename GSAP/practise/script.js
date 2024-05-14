gsap.to("#page2 .card",{
  transform:"translateY(-500%)",
    duration:2,
    delay:0.5,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 0",
    end:"top -200%",
    scrub:4,
    pin:true,
    stagger:1
  
    }
})

