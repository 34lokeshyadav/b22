gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

// $('#page1 h1').textillate({ in: { effect: 'fadeInUp' } });


var overlay = document.querySelector("#overlay")
var iscroll = document.querySelector("#scroll")
console.log("hello")

overlay.addEventListener("mouseenter",function(){
    iscroll.style.transform = `scale(1)`
    console.log("hello")
})

overlay.addEventListener("mouseleave",function(){
    iscroll.style.transform = `scale(0)`
    console.log("hello")

})

overlay.addEventListener("mousemove",function(dets){
    iscroll.style.left =`${dets.x - 45 }px`
    iscroll.style.top =`${dets.y - 38 }px`
})



document.querySelector("#page3").addEventListener("mousemove",function(dets){
  document.querySelector("#page3 #img-div").style.left = `${dets.x}px` 
  document.querySelector("#page3 #img-div").style.top= `${dets.y}px` 
  })
 
  document.querySelector("#page3").addEventListener("mousemove",function(dets){
    document.querySelector("#page3 #img-div").style.left = `${dets.x}px`
    document.querySelector("#page3 #img-div").style.top = `${dets.y}px`
  })
  
  document.querySelector("#page4").addEventListener("mousemove",function(dets){
    document.querySelector("#page4>img").style.left = dets.x+"px"
    document.querySelector("#page4>img").style.top = dets.y+"px"
    document.querySelector("#page4>button").style.left = (dets.x+50) +"px"
    document.querySelector("#page4>button").style.top = (dets.y+200 )+"px"
  })
///////////////////////////////////////////////////////////////
  var page = document.querySelector("#text-page5")
var img = document.querySelector("#div-img")
console.log("hello")

page.addEventListener("mouseenter",function(){
  img.style.transform = `scale(1)`
  console.log("hello")
})

page.addEventListener("mouseleave",function(){
  img.style.transform = `scale(0)`
  console.log("hello")

})

page.addEventListener("mousemove",function(dets){
  img.style.left =`${dets.x - 50 }px`
  img.style.top =`${dets.y - 25 }px`
})
  ////////////////////////////////////////////////////
  var elem = document.querySelectorAll(".elem")
  elem.forEach(function (e) {
      var a = e.getAttribute("data-img")
      e.addEventListener("mouseenter", function () {
          document.querySelector("#page4>img").setAttribute("src", a)
      })
  })
  /////////////////////////////////////////
 

  
  /////////////////////////////////////


  gsap.from("#page2 h1",{
    duration:0.5,
    onStart:function(){
        $('#page2 h1').textillate({ 
          in: { 
               effect: 'fadeInUp',
               delaysale:0.5, 
              } 
              });
    },
    scrollTrigger:{
      trigger:"#page2 h1",
      scroller:"#main",
      // markers:true,
      start:"top 90%"
    }
  })


gsap.to("#page2 img",{
  rotate:-10,
  scrollTrigger:{
      scroller:"#main",
      trigger:"#page2 img",
      start:"top 50%",
      // markers:true,
      scrub:3
  }
 })

 gsap.to("#main",{
  backgroundColor:"#111",
  scrollTrigger:{
      scroller:"#main",
      trigger:"#page2",
      start:"top -100%",
      end:"top -100%",
      // markers:true, 
      scrub:3
  }
})

var tl = gsap.timeline({
  scrollTrigger:{
    trigger:"svg", 
    scroller:"#main",
    // markers:true,
    start:"top 40%",
    end:"top -50%",
    scrub:true
  }

})
 tl.to("svg",{
  scale:1,
  top:"5%",
  fill:"#111",
 })

 


 tl.to("#nav",{
  color:"#111",
  background: "linear-gradient(#ffffffeb,#ffffff6e,#ffffff00)",
 })

 var tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:"svg", 
    scroller:"#main",
    // markers:true,
    start:"top -350%",
    end:"top -350%"
  }

 })
 tl2.to("svg",{
  scale:1,
  top:"5%",
  fill:"#fff",
  
 })
 tl2.to("#nav",{
  color:"#fff",
  background: "linear-gradient(#000000d5,#00000089,#00000000)",
 
 })

 gsap.to("#page5",{
  scrollTrigger:{
    trigger:"#page5",
    scroller:"#main",
    start:"top 0%",
    end:"top -100%",
    scrub:true,
    pin:true,
    // markers:true
  }
})

gsap.to("#page5-div1",{
  rotate:-5,
  y:570,
  scrollTrigger:{
      trigger:"#page5-div1",
      scroller:"#main",
      start:"top 85%",
      end:"top 30%",
      // markers:true,
      // scrub:true,
      pin:true
  }
})

gsap.from("#page5-div2",{
  y:570,
  rotate:-15,
  scrollTrigger:{
      trigger:"#page5-div2",
      scroller:"#main",
      start:"top 80%",
      end:"top 50%",
      scrub:2,
      // markers:true,
  }
})

document.querySelector("#nav i").addEventListener("click",function(){
  document.querySelector("#full-scr").style.top = "0vh"
})
document.querySelector("#full-scr i").addEventListener("click",function(){
  document.querySelector("#full-scr").style.top = "-100vh"
})
 


 

