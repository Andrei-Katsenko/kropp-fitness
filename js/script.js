
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