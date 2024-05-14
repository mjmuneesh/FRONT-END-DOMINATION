//1. gsap inital and final value 

// gsap.to("#box",{
//     x:1000,
//     duration:2,
//     delay:0.5,
//     rotate:360,
//     backgroundColor:"blue"
// })

// gsap.from("#box",{
//     y:1000,
//     duration:2,
//     delay:0.5,
//     rotate:360,
//     backgroundColor:"blue"
// })


//2. Timeline in gsap

// let tl = gsap.timeline()
// tl.from("#box1", {
//     x:1000,
//     rotate:360,
//     backgroundColor:"royalblue",
//     scale:0.5,
//     duration:2
// })

// tl.from("#box2", {
//     x:1000,
//     rotate:360,
//     backgroundColor:"green",
//     scale:0.5,
//     duration:2
// })

// tl.from("#box3", {
//     x:1000,
//     rotate:360,
//     backgroundColor:"red",
//     scale:0.5,
//     duration:2
// })

// 3.mini project 


let tl = gsap.timeline()

tl.from("#nav h3",{
    y: -50,
   opacity:0,
   delay:0.4,
   duration:0.6,
   stagger:0.3
});

tl.from("#main h1",{
    x:-500,
    opacity:0,
    duration:0.6,
    stagger:0.3
})

tl.from("img", {
    x:100,
    rotate:65,
    opacity:0,
    duration:0.6
})