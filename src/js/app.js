window.onload = function() {

	new WOW().init();

	if (document.querySelector('[data-scroll-container]') !== null) {
		const scroll = new LocomotiveScroll({
			el: document.querySelector('[data-scroll-container]'),
			smooth: true
		});
	};

	if (document.querySelector('.header__burger') !== null) {
		let mobMenuBtn  = document.querySelector('.header__burger');
		mobMenuBtn.addEventListener('click', function(e) {
			document.querySelector('.header__mob-menu').classList.toggle('header__mob-menu--open');
			document.querySelector('.header__burger').classList.toggle('header__burger--open');
			document.querySelector('html').classList.toggle('no-scroll');
			document.querySelector('body').classList.toggle('no-scroll');
		});
	};

	/*start section banner*/

	if ((document.querySelector('.banner__play') !== null) && (document.querySelector('.banner__pause') !== null)) {
		document.querySelector('.banner__play').addEventListener('click', function() {
			this.classList.add('banner__play--hidden');
			let index = document.querySelector('.banner__video-item--active').dataset.index;
			document.querySelector('.banner__main-video--' + index).play();
			document.querySelector('.banner__pause').classList.add('banner__pause--active');
		});

		document.querySelector('.banner__pause').addEventListener('click', function() {
			let videoArr = document.querySelectorAll('.banner__main-video');
			videoArr.forEach(itemVideo => {
				itemVideo.pause();
			});
			document.querySelector('.banner__pause').classList.remove('banner__pause--active');
			document.querySelector('.banner__play').classList.remove('banner__play--hidden');
		});
	};

	if (document.querySelector('.banner__video-item') !== null) {
		let videoItems  = document.querySelectorAll('.banner__video-item');
		videoItems.forEach(item => {
			item.addEventListener('click', function(e) {
				let videoItemsActive = document.querySelector('.banner__video-item--active');
				let index = item.dataset.index;
				videoItemsActive.classList.remove('banner__video-item--active');
				item.classList.add('banner__video-item--active');
				let videoArr = document.querySelectorAll('.banner__main-video');
				videoArr.forEach(itemVideo => {
					itemVideo.classList.add('visually-hidden');
					itemVideo.pause();
				});
				let activeVideo = document.querySelector('.banner__main-video--' + index);
				activeVideo.classList.remove('visually-hidden');
				activeVideo.play();
				document.querySelector('.banner__play').classList.add('banner__play--hidden');
				document.querySelector('.banner__pause').classList.add('banner__pause--active');
			});
		});
	};

	/*end section banner */

	/*start section video*/

	if ((document.querySelector('.video__play') !== null) && (document.querySelectorAll('.video__pause') !== null)) {
		document.querySelector('.video__play').addEventListener('click', function() {
			this.classList.add('video__play--hidden');
			let index = document.querySelector('.video__item--active').dataset.index;
			document.querySelector('.video__main-video--' + index).play();
			document.querySelector('.video__pause').classList.add('video__pause--active');
		});

		document.querySelector('.video__pause').addEventListener('click', function() {
			let videoArr = document.querySelectorAll('.video__main-video');
			videoArr.forEach(itemVideo => {
				itemVideo.pause();
			});
			document.querySelector('.video__pause').classList.remove('video__pause--active');
			document.querySelector('.video__play').classList.remove('video__play--hidden');
		});
	};

	if (document.querySelectorAll('.video__item') !== null) {
		let videoItems  = document.querySelectorAll('.video__item');
		videoItems.forEach(item => {
			item.addEventListener('click', function(e) {
				let videoItemsActive = document.querySelector('.video__item--active');
				let videoName  = document.querySelector('.video__name');
				let name = item.dataset.name;
				let index = item.dataset.index;
				videoItemsActive.classList.remove('video__item--active');
				item.classList.add('video__item--active');
				let videoArr = document.querySelectorAll('.video__main-video');
				videoArr.forEach(itemVideo => {
					itemVideo.classList.add('visually-hidden');
					itemVideo.pause();
				});
				let activeVideo = document.querySelector('.video__main-video--' + index);
				activeVideo.classList.remove('visually-hidden');
				activeVideo.play();
				document.querySelector('.video__play').classList.add('video__play--hidden');
				document.querySelector('.video__pause').classList.add('video__pause--active');
				videoName.textContent = name;
			});
		});
	};

	/*end section video */

	if (document.querySelector('.faq-answers__item') !== null) {
		let faqItems = document.querySelectorAll('.faq-answers__item');
		faqItems.forEach(item => {
			item.addEventListener('click', function(e) {
				if (document.querySelector('.faq-answers__item--active') !== null) {
					let faqItemActive = document.querySelector('.faq-answers__item--active');
					faqItemActive.classList.remove('faq-answers__item--active');
				}
				item.classList.add('faq-answers__item--active');
			});
		});
	};

	if (document.querySelector('.js--banner__slider') !== null) {
		const swiper1 = new Swiper('.js--banner__slider', {
			slidesPerView: "auto",
			loop: true,
			spaceBetween: 10,
			navigation: {
				nextEl: '.js--banner__prev',
			},
		});
	};

	if (document.querySelector('.js--video__list') !== null) {
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
	};

	if (document.querySelector('.mission__swiper') !== null) {
		const swiper3 = new Swiper('.mission__swiper', {
			slidesPerView: 1,
			breakpoints: {
				768: {
				  slidesPerView: 2,
				},
			},
			autoHeight: true,
			spaceBetween: 10,
			pagination: {
				el: ".mission__swiper-pagination",
				clickable: true,
				renderBullet: function (index, className) {
				  return '<span class="' + className + '">' + (index + 1) + "</span>";
				},
			  },
		});
	};

	if (document.querySelector('.communication__swiper') !== null) {
		const swiper4 = new Swiper('.communication__swiper', {
			slidesPerView: "auto",
			centeredSlides: true,
			spaceBetween: 18,
			pagination: {
				el: ".communication__swiper-pagination",
				clickable: true,
				renderBullet: function (index, className) {
				  return '<span class="' + className + '">' + (index + 1) + "</span>";
				},
			  },
		});
	};

	window.onscroll = function () {
		let pageYOffset = window.pageYOffset;

		if (pageYOffset > 10) {
			if (document.querySelector('.banner__arrow-2') !== null) {
				document.querySelector('.banner__arrow-2').classList.remove('banner__arrow-2--hidden');
			};
			if (document.querySelector('.video__decoration-crown')) {
				document.querySelector('.video__decoration-crown').classList.remove('video__decoration-crown--start');
			};
		} else {
			if (document.querySelector('.banner__arrow-2') !== null) {
				document.querySelector('.banner__arrow-2').classList.add('banner__arrow-2--hidden');
			}
			if (document.querySelector('.banner__arrow-2') !== null) {
				document.querySelector('.video__decoration-crown').classList.add('video__decoration-crown--start');
			}
		}

		if (document.querySelector('.scroll-top') !== null) {
			if (pageYOffset > 200) {
				document.querySelector('.scroll-top').classList.remove('visually-hidden');
			} else {
				document.querySelector('.scroll-top').classList.add('visually-hidden');
			}
		}
    };

	if (document.querySelector('.scroll-top') !== null) {
		let scrollTop = document.querySelector('.scroll-top');
		scrollTop.addEventListener('click', function(e) {
			const pageHeight = document.documentElement.scrollHeight;
			window.scrollBy({
				top: -pageHeight,
				behavior: 'smooth'
			});
		});
	};

	document.querySelectorAll('a[href^="#"').forEach(link => {
		link.addEventListener('click', function(e) {
			e.preventDefault();    
			let href = this.getAttribute('href').substring(1);
			const scrollTarget = document.getElementById(href);
			const elementPosition = scrollTarget.getBoundingClientRect().top;
			const offsetPosition = elementPosition;
			window.scrollBy({
				top: offsetPosition,
				behavior: 'smooth'
			});
		});
	});
};