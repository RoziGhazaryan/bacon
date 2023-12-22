// sliders
$(".mission-cnt__slider").slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	isFinite: true,
	arrows: true,
	dots: false,
	focusOnSelect: true,
	prevArrow: ".mission-prev",
	nextArrow: ".mission-next",
	responsive: [
		{
			breakpoint: 991.98,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 767.98,
			settings: {
				slidesToShow: 1,
			},
		},
	],
});

$(".positions-cnt__slider").slick({
	slidesToShow: 2,
	slidesToScroll: 1,
	isFinite: true,
	arrows: true,
	dots: false,
	focusOnSelect: true,
	prevArrow: ".position-prev",
	nextArrow: ".position-next",
	responsive: [
		{
			breakpoint: 767.98,
			settings: {
				slidesToShow: 1,
			},
		},
	],
});

$(".gallery-cnt__slider").slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	isFinite: true,
	arrows: true,
	dots: false,
	focusOnSelect: true,
	prevArrow: ".gallery-prev",
	nextArrow: ".gallery-next",
	responsive: [
		{
			breakpoint: 767.98,
			settings: {
				slidesToShow: 1,
			},
		},
	],
});

// toggle FAQ content
document
	.querySelectorAll(".faq-cnt__answers-block .sign")
	.forEach((item) =>
		item.addEventListener("click", (event) => toggleContent(event))
	);

function toggleContent(e) {
	const block = e.target.closest(".faq-cnt__answers-block");
	if (block.classList.contains("open")) {
		block.classList.remove("open");
	} else {
		block.classList.add("open");
	}
}

// toggle header menu
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".header-menu__item");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");

function toggleMenu() {
	if (menu.classList.contains("mobile")) {
		document.body.style.overflowY = "auto";
		menu.classList.remove("mobile");
		closeIcon.style.display = "none";
		menuIcon.style.display = "block";
	} else {
		document.body.style.overflowY = "hidden";
		menu.classList.add("mobile");
		closeIcon.style.display = "block";
		menuIcon.style.display = "none";
	}
}

function closeMenu() {
	if (menu.classList.contains("mobile")) {
		document.body.style.overflowY = "auto";
		menu.classList.remove("mobile");
		closeIcon.style.display = "none";
		menuIcon.style.display = "block";
	}
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(function (menuItem) {
	menuItem.addEventListener("click", closeMenu);
});
