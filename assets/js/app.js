$(function() {

    let header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();



         /* Fixed Header*/
        checkScroll(scrollOffset);


    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* Smooth плавный scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;

            $("#nav a").removeClass("active");
            $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 900);
    });

    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    /* Collapse Аккордеон */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('collapse');

            /*$this.toggleClass("active");*/
            $(blockId).slideToggle();

    });

    /* Slider */

    $("[data-slider]").slick({
         infinite: true,
         fade: false,
         slidesToShow: 1,
         slidesToScroll: 1,

    });
});