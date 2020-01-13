$(function(){ 

	var  header = $("#header"), 
		 introH = $("#intro").innerHeight(), 
	      scrolloffset = $(window).scrollTop(); 
	
	checkScroll(scrolloffset); 
	
	$(window).on("scroll", function(){ 

		scrolloffset = $(this).scrollTop(); 

		checkScroll(scrolloffset); 
	}); 

	function checkScroll(scrolloffset){ 
	if (scrolloffset >= introH){ 
	header.addClass("fixed"); 
	} 
		else{
			header.removeClass("fixed")
		}
	} 

});



/*Collaps*/ 
$("[data-collapse]").on("click", function(event){
	event.preventDefault();
	
	var $this = $(this),
		blockId = $this.data('collapse');
	
	$this.toggleClass("activee"); 
});








/* Индекс слайда по умолчанию */
var slideIndex = 1;
    showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// Модальное окно
$('.btn').on('click', function() {
    $('.overlay').fadeIn();
});

$('.modal_close').on('click', function() {
    $('.overlay').fadeOut();
});













