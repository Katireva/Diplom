jQuery(document).ready(function($) {

$(".ajax-contact-form").submit(function() {
var str = $(this).serialize();

$.ajax({
type: "POST",
url: "contact.php",
data: str,
success: function(msg) {
if(msg == 'Ok') {
    swal("Ваши данные отправлены","Мы свяжемся с Вами в ближайшее время", "success");
    $(".notification_error").hide();
    document.getElementById("mailForm").reset();
    $("#mailForm").trigger("reset");

} else {
    result = msg;
    swal("Ваши данные не отправлены","Произошла ошибка", "error");
    $('.note').html(result);
}
}
});
return false;
});
});
