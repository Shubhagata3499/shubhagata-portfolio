function breakTheText() {
var h1 = document.querySelector("h1")
var h1Text= h1.textContent

var splittedText=h1Text.split("")

var clutter = ""

splittedText.forEach(function(elem){
    clutter += `<span>${elem}</span>`
})
 h1.innerHTML=clutter
}
breakTheText()

gsap.from("h1 span",{
    y:50,
    opacity:0,
    duration:0.8,
    delay:2,
    stagger:0.15
})
function marqueAnimation(){

window.addEventListener("wheel",function(dets){
    if(dets.deltaY>0){
        gsap.to(".marque",{
    transform:'translateX(-200%)',
    duration:5,
    repeat:-1,
    ease:"none"
})
gsap.to(".marque img",{
    rotate:180
})
    }else{
        gsap.to(".marque",{
    transform:'translateX(0%)',
    duration:5,
    repeat:-1,
    ease:"none"
})
gsap.to(".marque img",{
    rotate:0
})
 }
})
}
marqueAnimation()


// Preloader timeout script
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.style.opacity = "0";
    setTimeout(() => preloader.style.display = "none", 500);
  }, 1000); // show for 1 second
});


window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const overlay = document.getElementById("transition-overlay");

  // Fade out preloader after 1.8s
  setTimeout(() => {
    preloader.style.opacity = "0";

    setTimeout(() => {
      preloader.style.display = "none";

      // Trigger transition animation
      overlay.classList.add("open");

      // Remove overlay after 0.6s
      setTimeout(() => {
        overlay.style.display = "none";
      }, 600); // transition duration = 0.6s
    }, 500); // short fade-out before showing transition
  }, 1800); // preloader visible for 1.8s
});

