(() => {

	const box = document.querySelector('.box');

	// basic structure of a TweenMacx Tween
	// TweenMax.to(el, time, {properties});
	
	function startAnimation() {
		TweenMax.to(box, 0.8, {x: 400, rotation: 180, scale: 1.5});
	}

	function resetAnimation() {
		TweenMax.to(box, 0.8, {x: 0, rotation: 0, scale: 1});
	}
	// can use library to do this?
	box.addEventListener("mouseover", startAnimation);
	box.addEventListener("mouseout", resetAnimation);

})();