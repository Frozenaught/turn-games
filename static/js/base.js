$(document).ready(function () {
    // Show mobile menu
    $(".navbar-burger").click(function () {
        $(".navbar-burger").toggleClass("is-active");
        $("#navbar-menu").toggleClass("is-active");
    });

    //Spin logo on hover
    $(".main-logo-container").mouseenter(function () {
        if (!$('#logo-image').hasClass(".image-spin")) {
            $('#logo-image').addClass("image-spin")
        }
    }).mouseleave(function () {

            $('#logo-image').removeClass("image-spin");
        }
    )
});