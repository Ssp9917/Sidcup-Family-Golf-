var crsr = document.querySelector(".cursor")
var blur = document.querySelector(".cursor-blur")
document.addEventListener("mousemove",function(dets){
    // console.log(dets.y)
    crsr.style.top=dets.y+"px";
    crsr.style.left=dets.x+"px"
    crsr.style.display="block"
    blur.style.display="block"
    blur.style.top=dets.y-100+"px";
    blur.style.left=dets.x-100+"px"
    

})


gsap.to(".nav",{
    // color:"red"
    backgroundColor:"#000",
    duration:0.5,
    scrollTrigger:{
    trigger:".nav",
    scroller:"body",
    // markers:true,
    start:"top -7%",
    end:"top -8%",
    scrub:2
}
})

gsap.to(".main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        // markers:true,
        start:"top -30%",
        end:"top -70%",
        scrub:2
    }
})



gsap.from(".about-us img,.about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".about-us",
      scroller: "body",
      // markers:true,
      start: "top 50%",
      end: "top 4           5%",
      scrub: 1,
    },
  });

  gsap.from(".cards",{
    scale:0.8,
    duration:1,
    opacity:0,
    stagger:0.1,
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
  })

  gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 35%",
        end:"top 30%",
        scrub:4,
    }
  })

  gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 35%",
        end:"top 30%",
        scrub:1,
    }
  })

  gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
  })