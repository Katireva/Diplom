$('.open-popup').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(500);
    $('html').addClass('no-scroll');
});

$('.close-popup').click(function() {//закрытие кнопкой
    $('.popup-bg').fadeOut(500);
    $('html').removeClass('no-scroll');
});

$(document).click(function (e) {//закрытие оверлей
    if ($(e.target).is('.popup-bg')) {
        $('.popup-bg').fadeOut(500);
        $('html').removeClass('no-scroll');
    }
});