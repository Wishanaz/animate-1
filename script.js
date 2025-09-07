var crsr = document.querySelector("#cursor");
var crsrblur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + 30 + "px";
    crsr.style.top = dets.y + "px";
    crsrblur.style.left = dets.x - 250 + "px";
    crsrblur.style.top = dets.y - 250 + "px";
});

let h4all = document.querySelectorAll("#nav h4");

h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.transform = "scale(3)";
        crsr.style.border = "0.5px solid #fff";
        crsr.style.backgroundColor = "transparent";
    });
    elem.addEventListener("mouseleave", function(){
        crsr.style.transform = "scale(1)";
        crsr.style.border = "0px solid #95C11E";
        crsr.style.backgroundColor = "#95C11E"; // reset to original
    });
});


let circle = document.querySelector(".circle");
circle.addEventListener("mouseenter", function(){
    circle.style.transform = "scale(2)";
    circle.style.backgroundColor = "#96c11e91"
})
circle.addEventListener("mouseleave", function(){
    circle.style.transform = "scale(1)";
    circle.style.backgroundColor = "transparent";
})


gsap.to('#nav',{
    backgroundColor:"#000",
    height: "15vh",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -75%",
        scrub:2
    }
})


gsap.from("#about-us img, #about-us-in",{
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger:{
        trigger: "#about-us",
        scroller: "body",
        // markers:true,
        start: "top 60%",
        end: "top 50%",
        scrub:1,

    }

})


gsap.from(".card",{
    
    scale: 0.8,
    opacity: 0,
    duration: 1,
    
    scrollTrigger:{
        trigger: ".card",
        scroller: "body",
        // markers:true,
        start: "top 90%",
        end: "top 80%",
        scrub:2
    }

})

gsap.from(".colon1", {
    x: -20,
    y:-40,
  duration: 0.2,
  scrollTrigger:{
    trigger: "#page4",
    scroller: "body",
    // markers:true,
    start:"top 50%",
    end:"top 10%",
    scrub:2
  }
  
});
gsap.from(".colon2", {
    x: -20,
    y: 40,
  duration: 0.2,
  scrollTrigger:{
    trigger: "#page4",
    scroller: "body",
    // markers:true,
    start:"top 50%",
    end:"top 10%",
    scrub:4
  }
  
});


gsap.from("#page5 h1",{
    y:90,
    scrollTrigger:{
    trigger: "#page5",
    scroller: "body",
    // markers:true,
    start:"top 40%",
    end:"top 30%",
    scrub:2
  }
})







const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;

function showSlide(index) {
  // Animate only slides
  slides.forEach((slide, i) => {
    if (i === index) {
      gsap.to(slide, { opacity: 1, duration: 0.6, ease: "power2.inOut" });
    } else {
      gsap.to(slide, { opacity: 0, duration: 0.6, ease: "power2.inOut" });
    }
  });

  // Update dots (no GSAP, just color change)
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });

  currentIndex = index;
}

// Dot click
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => showSlide(i));
});

// Auto slide
setInterval(() => {
  let nextIndex = (currentIndex + 1) % slides.length;
  showSlide(nextIndex);
}, 4000);


gsap.to(".marquee-track", {
  x: "-90%",         // move  its width
  duration: 10,      // speed
  ease: "linear",
  repeat: -1         // infinite loop
});





