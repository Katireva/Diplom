
/* eslint-env jquery */
/* eslint-env browser, node */
/* eslint-disable no-console */

$(function() {
    
    var header = $("#header");
    var introH = $("#intro").innerHeight();//висота блоку
    var scrollOffset = $(window).scrollTop();
    
    /*Fixed header*/
    checkScroll(scrollOffset);//перевірка де саме знаходиться відвідувач
    
    $(window).on("scroll", function() {

        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
        
    });
    //якщо головна сторінка вже пролистана, то головне меню фіксується
    function checkScroll(scrollOffset){
        if(scrollOffset >= introH){
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
        
    }
    
    /*Smooth scrol*/
    //плавний перехід до обраного розділу
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        
        var blockId = $(this).data("scroll"),
            blockOffset = $(blockId).offset().top;
        
        $("#nav a").removeClass("active");
        $(this).addClass("active");
        
        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });
    
    /*Menu nav_toggle*/
    //перехід до обраного розділу та закриття бургер меню після цього
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
     
       /* $("#nav").on("click", function() {
            $("#nav_toggle").removeClass("active");
            $(this).removeClass("active");
        });*/
    });
    
    /*Colapse*/
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();
                
        $(this).toggleClass("active");
    });
    
    /* Slider */
    //реалізація слайдеру відгуків
    $("[data-slider]").slick({
       infinite: true,
       fade: false,
       slidesToShow: 1,
       slidesToScroll: 1
    });
});

