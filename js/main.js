// Initialize Swiper for reviews slider
document.addEventListener('DOMContentLoaded', function () {
	const swiper = new Swiper('.reviews__slider', {
		slidesPerView: 1.5, // трохи більше ніж 1
		centeredSlides: true,
		spaceBetween: 40,
		loop: true,
		navigation: {
			nextEl: '.reviews__nav-next',
			prevEl: '.reviews__nav-prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			576: {
				slidesPerView: 1.1,
				spaceBetween: 100,
			},
			768: {
				slidesPerView: 1.2,
				spaceBetween: 100,
			},
			1024: {
				slidesPerView: 1.5,
				spaceBetween: 100,
			},
			1400: {
				slidesPerView: 1.8,
				spaceBetween: 120,
			},
			1920: {
				slidesPerView: 1.9,
				spaceBetween: 200,
			},
			2560: {
				slidesPerView: 2,
				spaceBetween: 300,
			},
			3840: {
				slidesPerView: 2.2,
				spaceBetween: 350,
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
function positionNavButtons() {
	const activeSlide = document.querySelector('.swiper-slide-active')
	if (!activeSlide) return

	const container = document.querySelector('.reviews__slider-container')
	const prevBtn = document.querySelector('.reviews__nav-prev')
	const nextBtn = document.querySelector('.reviews__nav-next')

	const slideRect = activeSlide.getBoundingClientRect()
	const containerRect = container.getBoundingClientRect()

	const offset = 40 // відстань у px від активного слайду

	// позиціонуємо стрілки відносно активного слайду
	prevBtn.style.left = `${
		slideRect.left - containerRect.left - prevBtn.offsetWidth - offset
	}px`
	nextBtn.style.left = `${slideRect.right - containerRect.left + offset}px`
}

swiper.on('slideChangeTransitionEnd', () => {
	positionNavButtons()
})
window.addEventListener('resize', () => {
	positionNavButtons()
})
positionNavButtons()
