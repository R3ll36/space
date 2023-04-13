
	const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: 'vertical', // vertical, horizontal
  gestureDirection: 'vertical', // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
})

//get scroll value
lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
  console.log({ scroll, limit, velocity, direction, progress })
})
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

//header shadow
let navContent = document.getElementById('navbar_component');
$(window).scroll(function() {
if($(window).scrollTop() > 0) {
navContent.style.boxShadow = '0 12px 5px #fff 30%';
navContent.style.transition = 'all 0.5s';
} else {
navContent.style.boxShadow = '0 0 0 rgba(0, 0, 0, 0)';
navContent.style.transition = 'all 0.2s';
}
});
