$('.owl-carousel').owlCarousel({
    center: true,
    items: 5,
    loop: true,
    margin: 5,
    autoplay: true,
    autoplayTimeout: 2200,
    autoplayHoverPause: true,
    loop: true,
    nav: true,
    stagePadding: 100,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        568: {
            items: 2
        },
        600: {
            items: 3
        },
    }
})
