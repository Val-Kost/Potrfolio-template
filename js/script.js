const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    hamburger.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
    hamburger.classList.remove('active');
});
// menu

const slider = tns({
	container: '.skills-wrapper',
	items: 4,
    slideBy: '1',
    gutter: 35,
    center: true,
	nav: false,
	mouseDrag: false,
	autoplay: true,
	autoplayButtonOutput: false,
	autoplayTimeout: 3500,
    speed: 1500,
    autoWidth: true,
    viewportMax: true,
	controls: false
});

document.querySelector('.skills__btn-prev').addEventListener('click', function () {
	slider.goTo('prev');
});
document.querySelector('.skills__btn-next').addEventListener('click', function () {
	slider.goTo('next');
});

// /slider================================/ https://github.com/ganlanyuan/tiny-slider

const counter = document.querySelectorAll('.skills-bar__value'),
line = document.querySelectorAll('.skills-bar__counter-line');

counter.forEach( (item, i) => {
    line[i].style.width = item.innerHTML;
});
// skills bar

$(document).ready(function () {
	$(window).scroll(function() {
		if ($(this).scrollTop()> 800) {
			$('.pageup').fadeIn('slow');
		}
		else {
			$('.pageup').fadeOut('slow');
		}
	});
	$("a[href^='#up']").click(function(){
                const _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
    });
// smooth scroll and pageup

	function valideForms(form) {
			$(form).validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 12
			},
			email: {
				required: true,
				email: true
			},
			ccomment: {
				required: true
			},
			checkbox: {
				required: true
			}
		},
		messages: {
			name: "Пожалуйста, введите свое имя, от 2 до 12 букв.",
			email: "Пожалуйста, введите корректный адрес электронной почты.",
			ccomment: "Пожалуйста, коротко опишите суть предложения.",
			checkbox: ""
			}
		});
	};
	valideForms('.feedback-form');
// validateform https://jqueryvalidation.org/documentation/


});

