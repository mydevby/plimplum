window.onload = function(){
	let header = document.querySelector('.header');
	let videoItems  = document.querySelectorAll('.video__item');
	videoItems.forEach(item => {
		item.addEventListener('click', function(e) {
			let videoItemsActive = document.querySelector('.video__item--active');
			let videoName  = document.querySelector('.video__name');
			let name = item.dataset.name;
			videoItemsActive.classList.remove('video__item--active');
			item.classList.add('video__item--active');
			videoName.textContent = name;
		});
	});	

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

	const swiper = new Swiper('.js--video__list', {
		direction: 'vertical',
		slidesPerView: 3,
		navigation: {
		  nextEl: '.js--video__next',
		  prevEl: '.js--video__prev',
		},
		scrollbar: {
		  el: '.swiper-scrollbar',
		},
	  });
};