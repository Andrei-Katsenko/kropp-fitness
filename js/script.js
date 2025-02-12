
class Header {

	selectors = {
		root: '[data-js-header]',
		overlay: '[data-js-header-overlay]',
		burgerButton: '[data-js-header-burger-button]'

	}

	stateClasses = {
		isActive: 'is-active',
		isLock: 'is-lock'
	}

	constructor() {
		this.rootElement = document.querySelector(this.selectors.root)
		this.overlayElement = this.rootElement.querySelector(this.selectors.overlay)
		this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton)
		this.bindEvents()
	}

	burgerButtonOnClick = () => {
		this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)
		this.overlayElement.classList.toggle(this.stateClasses.isActive)
		document.documentElement.classList.toggle(this.stateClasses.isLock)
	}

	bindEvents() {
		this.burgerButtonElement.addEventListener('click', this.burgerButtonOnClick)
	}

}

// burger-menu
new Header()


// Carousel banner section

let slides = document.querySelectorAll(".banner-slide");
let bottom = document.querySelector(".banner-pagination");
// на будующее при желании добавить стрелки в слайдер
// let btnPrev = document.querySelector(".arrow-left");
// let btnNext = document.querySelector(".arrow-right");

// Хранится индекс слайда который отображается в данный момент
let currentSlideIndex = 0;
// хранятся кружки пагинации
const paginationCircles = []; 3

function createPaginationCircle() {
	const div = document.createElement('div');
	div.className = "banner-pagination-circle";
	bottom.appendChild(div);
	paginationCircles.push(div);
}

function addPagination() {
	slides.forEach(createPaginationCircle);
	paginationCircles[0].classList.add('active')
	paginationCircles.forEach((circle, index) => {
		circle.addEventListener('click', () => changeSlide(index));
	});
}

// удаляем класс active у кружка пагинации
function removeActiveClass() {
	paginationCircles[currentSlideIndex].classList.remove('active');
}

// добавляем класс active текущему кружку пагинации
function addActiveClass() {
	paginationCircles[currentSlideIndex].classList.add('active');
}

// добавляем класс banner-slide__active
function showSlide() {
	slides[currentSlideIndex].classList.add("banner-slide__active");
}

// удаляем класс banner-slide__active
function hideSlide() {
	slides[currentSlideIndex].classList.remove("banner-slide__active")
}


function changeSlide(slideIndex) {
	hideSlide();
	removeActiveClass();
	currentSlideIndex = slideIndex;
	addActiveClass();
	showSlide();
}
// Переключаемся на следующий слайд
function nextSlide() {
	let newSladeInsex = currentSlideIndex + 1;
	if (newSladeInsex > slides.length - 1) {
		newSladeInsex = 0;
	};
	changeSlide(newSladeInsex);
}

function prevSlide() {
	let newSladeInsex = currentSlideIndex - 1;
	if (newSladeInsex < 0) {
		newSladeInsex = slides.length - 1;
	};
}
addPagination();
setInterval(nextSlide, 7000);
// btnNext.addEventListener("click", nextSlide);
// btnPrev.addEventListener("click", prevSlide);

// ToTop button
document.addEventListener("DOMContentLoaded", function () {
	const gototop = document.querySelector(".to-top");
	const root = document.documentElement;

	window.addEventListener("scroll", () => {
		if (window.scrollY >= 500) {
			gototop.classList.add("to-top-view");
		} else {
			gototop.classList.remove("to-top-view");
		}
	});

	gototop.addEventListener("click", () => {
		scrollToTop(700);
	});

	function scrollToTop(duration) {
		const start = root.scrollTop;
		const startTime = performance.now();

		function animateScroll(currentTime) {
			const elapsed = currentTime - startTime;
			const progress = Math.min(elapsed / duration, 1);
			root.scrollTop = start * (1 - progress);

			if (progress < 1) {
				requestAnimationFrame(animateScroll);
			}
		}

		requestAnimationFrame(animateScroll);
	}
});

