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

	if ((document.querySelector('.hello__play') !== null) && (document.querySelector('.hello__pause') !== null)) {
		document.querySelector('.hello__play').addEventListener('click', function() {
			this.classList.add('hello__play--hidden');
			let index = document.querySelector('.hello__video-item--active').dataset.index;
			document.querySelector('.hello__main-video--' + index).play();
			document.querySelector('.hello__pause').classList.add('hello__pause--active');
		});

		document.querySelector('.hello__pause').addEventListener('click', function() {
			let videoArr = document.querySelectorAll('.hello__main-video');
			videoArr.forEach(itemVideo => {
				itemVideo.pause();
			});
			document.querySelector('.hello__pause').classList.remove('hello__pause--active');
			document.querySelector('.hello__play').classList.remove('hello__play--hidden');
		});
	};

	if (document.querySelector('.hello__video-item') !== null) {
		let videoItems  = document.querySelectorAll('.hello__video-item');
		videoItems.forEach(item => {
			item.addEventListener('click', function(e) {
				let videoItemsActive = document.querySelector('.hello__video-item--active');
				let index = item.dataset.index;
				videoItemsActive.classList.remove('hello__video-item--active');
				item.classList.add('hello__video-item--active');
				let videoArr = document.querySelectorAll('.hello__main-video');
				videoArr.forEach(itemVideo => {
					itemVideo.classList.add('visually-hidden');
					itemVideo.pause();
				});
				let activeVideo = document.querySelector('.hello__main-video--' + index);
				activeVideo.classList.remove('visually-hidden');
				activeVideo.play();
				document.querySelector('.hello__play').classList.add('hello__play--hidden');
				document.querySelector('.hello__pause').classList.add('hello__pause--active');
			});
		});
	};

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

	if (document.querySelector('.js--hello__slider') !== null) {
		let arrowPrev = document.querySelector('.js--hello__prev');
		let arrowNext = document.querySelector('.js--hello__next');
		arrowPrev.style.opacity = 0;
		const swiper1 = new Swiper('.js--helo__slider', {
			slidesPerView: 2,
			spaceBetween: 10,
			navigation: {
				nextEl: '.js--hello__next',
				prevEl: '.js--hello__prev',
			},
		});
    	swiper1.on('slideChange', function() {
			console.lo
      		let realIndex = swiper1.realIndex;
			  console.log(realIndex );
			if (realIndex == 0) {
				arrowPrev.style.opacity = 0;
				arrowNext.style.opacity = 1;
			} else {;
				arrowPrev.style.opacity = 1;
				arrowNext.style.opacity = 0;
			}
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
			if (document.querySelector('.hello__arrow-2') !== null) {
				document.querySelector('.hello__arrow-2').classList.remove('hello__arrow-2--hidden');
			};
			if (document.querySelector('.video__decoration-crown')) {
				document.querySelector('.video__decoration-crown').classList.remove('video__decoration-crown--start');
			};
		} else {
			if (document.querySelector('.hello__arrow-2') !== null) {
				document.querySelector('.hello__arrow-2').classList.add('hello__arrow-2--hidden');
			}
			if (document.querySelector('.hello__arrow-2') !== null) {
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
