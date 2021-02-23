$(document).ready(function () {
    $(".header__outside-button").click(function () {
        $("body").addClass("open-modal");
    });

    $(".modal-area__button").click(function () {
        $("body").removeClass("open-modal");
    });
});