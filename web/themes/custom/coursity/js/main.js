$ = jQuery;
$(document).ready(function() {
    console.log('Jquery Run....');
    // Make Sticky navbar
    $(window).on('scroll', function() {
        let screenTop = $(this).scrollTop();
        if (screenTop >= 100) {
            $('.navbar').addClass('scroll');
        } else {
            $('.navbar').removeClass('scroll');
        }
    });
    // Navbar links activation
    $(".navbar .navbar-nav .nav-item").on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
    });

    // OWL Slider
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        dots: false,
        stagePadding: 50,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,

            }
        }
    });

    // FAQ Accordion
    $('#FAQAccordion .card-header button').on('click', function(e) {
        $(this).toggleClass('open');
        $('#FAQAccordion .open .fa').toggleClass('fa-chevron-up fa-chevron-down');
    });
    // collapse accordion
    $('.collapse').on('show.bs.collapse', function(e) {
        $('.collapse').collapse("hide")
    });

    // Contact form
    $('.contact-form .form-item').addClass('form-group');
    $('.contact-form input,.contact-form textarea').addClass('form-control');

    // Login form
    $('.user-login-form .form-item').addClass('form-group');
    $('.user-login-form input,.contact-form textarea').addClass('form-control');

    // Register form
    $('.user-register-form .form-item').addClass('form-group');
    $('.user-register-form input,.contact-form textarea ,select').addClass('form-control');
    $('.user-register-form input[type="checkbox"]').removeClass('form-control');
    $('.user-pass-form input').addClass('form-control');
});
