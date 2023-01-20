window.onload = function(){
	let header = document.querySelector('.header');
	
	window.onscroll = function () {
		let pageYOffset = window.pageYOffset;

		if (pageYOffset > 0) {
			//header.classList.add('header--scroll'); 
		} else {
			//header.classList.remove('header--scroll'); 
		}
    };

	document.querySelectorAll('a[href^="#"').forEach(link => {
		link.addEventListener('click', function(e) {
			e.preventDefault();    
			let href = this.getAttribute('href').substring(1);    
			const scrollTarget = document.getElementById(href);    
			const topOffset = header.offsetHeight;
			const elementPosition = scrollTarget.getBoundingClientRect().top;
			const offsetPosition = elementPosition - topOffset;
			window.scrollBy({
				top: offsetPosition,
				behavior: 'smooth'
			});
		});
	});
};