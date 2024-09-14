const frame = document.querySelector(".frame")
const lerp = (x, y, a) => x * (1 - a) + y * a;

const dims = frame.getBoundingClientRect()
const x1 = dims.x
const x2 = dims.x + dims.width

window.addEventListener("mousemove", function(dets){
    gsap.to("#crsr", {
        x: dets.clientX,
        y: dets.clientY,
        duration: .4,
        ease: "circle"
    })
})


frame.addEventListener("mousemove", function(dets){
    gsap.to("#crsr", {
        scale: 8,
    })

    const alpha = gsap.utils.mapRange(x1, x2, 0, 1, dets.clientX) // alpha is Interpolation Factor for lerp fn
    const moveX = lerp(-50, 50, alpha) // ouputs -50 on extreme left side and 50 on extreme right of frame

    gsap.to(".frame span", {
        x: moveX,
        y: "-7vw",
        color: "#fff",
        duration: .3
    })
})

frame.addEventListener("mouseleave", function(){
    gsap.to("#crsr", {
        scale: 1
    })

    gsap.to(".frame span", {
        x: 0, // moves back element to its original posn
        y: 0,
        color: "#000",
        duration: .3
    })
})
