'use strict';

document.addEventListener("DOMContentLoaded", function() {
	this.querySelector(".icon").addEventListener("click", function() {
		let waitClass = "waiting",
			runClass = "running",
			classList = this.classList;

		if (!classList.contains(waitClass) && !classList.contains(runClass)) {
			classList.add(waitClass);
			setTimeout(function(){
				classList.remove(waitClass);
				setTimeout(function(){
					classList.add(runClass);
					setTimeout(function(){
						classList.remove(runClass);
					}, 4000);
				}, 200);
			}, 1800);
		}
	});
});