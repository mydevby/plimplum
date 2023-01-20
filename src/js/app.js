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

		if (pageYOffset > 50) {
			document.querySelector('.video__decoration-crown').classList.remove('video__decoration-crown--start'); 
		} else {
			document.querySelector('.video__decoration-crown').classList.add('video__decoration-crown--start');
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

	const swiper2 = new Swiper('.js--video__list', {
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

	const swiper1 = new Swiper('.js--banner__slider', {
		slidesPerView: "auto",
		loop: true,
	});
};