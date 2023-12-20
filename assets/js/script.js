$(".mission-cnt__slider").slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	isFinite: true,
	arrows: true,
	dots: false,
	focusOnSelect: true,
	prevArrow: ".mission-prev",
	nextArrow: ".mission-next"
	// responsive: [
	// 	{
	// 		breakpoint: 1199.98,
	// 		settings: {
	// 			arrows: false,
	// 		},
	// 	},
	// 	{
	// 		breakpoint: 991.98,
	// 		settings: {
	// 			arrows: false,
	// 		},
	// 	},
	// 	{
	// 		breakpoint: 767.98,
	// 		settings: {
	// 			arrows: false,
	// 		},
	// 	},
	// 	{
	// 		breakpoint: 575.98,
	// 		settings: {
	// 			arrows: false,
	// 		},
	// 	},
	// ],
});

$(".positions-cnt__slider").slick({
	slidesToShow: 2,
	slidesToScroll: 1,
	isFinite: true,
	arrows: true,
	dots: false,
	focusOnSelect: true,
	prevArrow: ".position-prev",
	nextArrow: ".position-next"
	// responsive: [
	// 	{
	// 		breakpoint: 1199.98,
	// 		settings: {
	// 			arrows: false,
	// 		},
	// 	},
	// 	{
	// 		breakpoint: 991.98,
	// 		settings: {
	// 			arrows: false,
	// 		},
	// 	},
	// 	{
	// 		breakpoint: 767.98,
	// 		settings: {
	// 			arrows: false,
	// 		},
	// 	},
	// 	{
	// 		breakpoint: 575.98,
	// 		settings: {
	// 			arrows: false,
	// 		},
	// 	},
	// ],
});


$(".gallery-cnt__slider").slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	isFinite: true,
	arrows: true,
	dots: false,
	focusOnSelect: true,
	prevArrow: ".gallery-prev",
	nextArrow: ".gallery-next"
	// responsive: [
	// 	{
	// 		breakpoint: 1199.98,
	// 		settings: {
	// 			arrows: false,
	// 		},
	// 	},
	// 	{
	// 		breakpoint: 991.98,
	// 		settings: {
	// 			arrows: false,
	// 		},
	// 	},
	// 	{
	// 		breakpoint: 767.98,
	// 		settings: {
	// 			arrows: false,
	// 		},
	// 	},
	// 	{
	// 		breakpoint: 575.98,
	// 		settings: {
	// 			arrows: false,
	// 		},
	// 	},
	// ],
});

// $(document).ready(function () {
// 	$(".other-products-slider-js").slick({
// 		arrows: ,
// 		slidesToShow: 4,
// 		autoplay: false,
// 		autoplaySpeed: 1000,
// 		dots: true,
// 		infinite: true,
// 		responsive: [
// 			{
// 				breakpoint: 1200,
// 				settings: {
// 					slidesToShow: 3,
// 					arrows: false,
// 				},
// 			},
// 			{
// 				breakpoint: 991.98,
// 				settings: {
// 					slidesToShow: 3,
// 					arrows: false,
// 				},
// 			},
// 			{
// 				breakpoint: 767.98,
// 				settings: {
// 					slidesToShow: 3,
// 					arrows: false,
// 				},
// 			},
// 			{
// 				breakpoint: 576,
// 				settings: {
// 					slidesToShow: 1,
// 					arrows: false,
// 					autoplay: true,
// 				},
// 			},
// 		],
// 	});
// });

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
