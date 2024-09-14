const frame = document.querySelector(".frame")

window.addEventListener("mousemove", function(dets){
    gsap.to("#crsr", {
        x: dets.clientX,
        y: dets.clientY,
        duration: .4,
        ease: "circle"
    })
})


frame.addEventListener("mousemove", function(){
    gsap.to("#crsr", {
        scale: 6,
    })

    gsap.to(".frame span", {
        y: "-5vw",
        color: "#fff",
        duration: .3
    })
})

frame.addEventListener("mouseleave", function(){
    gsap.to("#crsr", {
        scale: 1
    })

    gsap.to(".frame span", {
        y: 0,
        color: "#000",
        duration: .3
    })
})
