// Initialize Swiper for reviews slider
document.addEventListener('DOMContentLoaded', function () {
	const swiper = new Swiper('.reviews__slider', {
		slidesPerView: 1.8,
		spaceBetween: 40,
		centeredSlides: true,
		loop: true,
		navigation: {
			nextEl: '.reviews__nav-next',
			prevEl: '.reviews__nav-prev',
		},
		on: {
			init: function () {
				updateSlideScales(this)
			},
			slideChange: function () {
				updateSlideScales(this)
			},
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 1.4,
				spaceBetween: 30,
			},
			1024: {
				slidesPerView: 1.8,
				spaceBetween: 40,
			},
			1200: {
				slidesPerView: 2.2,
				spaceBetween: 50,
			},
			1400: {
				slidesPerView: 2.6,
				spaceBetween: 60,
			},
		},
	})

	function updateSlideScales(swiper) {
		swiper.slides.forEach((slide, index) => {
			const slideEl = slide
			const reviewItem = slideEl.querySelector('.reviews__item')

			if (slideEl.classList.contains('swiper-slide-active')) {
				slideEl.style.transform = 'scale(1.1)'
				slideEl.style.opacity = '1'
				if (reviewItem) {
					reviewItem.style.transform = 'scale(1.05)'
					reviewItem.style.boxShadow = '0 20px 40px rgba(234, 255, 86, 0.3)'
				}
			} else if (
				slideEl.classList.contains('swiper-slide-prev') ||
				slideEl.classList.contains('swiper-slide-next')
			) {
				slideEl.style.transform = 'scale(0.85)'
				slideEl.style.opacity = '0.7'
				if (reviewItem) {
					reviewItem.style.transform = 'scale(1)'
					reviewItem.style.boxShadow = 'none'
				}
			} else {
				slideEl.style.transform = 'scale(0.75)'
				slideEl.style.opacity = '0.4'
				if (reviewItem) {
					reviewItem.style.transform = 'scale(1)'
					reviewItem.style.boxShadow = 'none'
				}
			}
		})
	}
})
