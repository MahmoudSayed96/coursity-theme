$ = jQuery;
$(document).ready(function() {
    console.log('Jquery Run....');

    // WOW animation
    // new WOW().init();

    // Make Sticky navbar
    $(window).on('scroll', function() {
        var screenTop = $(this).scrollTop();
        console.log(screenTop);
        if (screenTop >= 100) {
            $('.navbar').addClass('scroll');
        } else {
            $('.navbar').removeClass('scroll');
        }
    });


    // Navbar links activation
    $(".navbar .navbar-nav .nav-item").on('click', function() {
        // Store url path in local storage
        var route = $(this).data('url');
        localStorage.setItem('activeRoute', route);
    });


    // Add active class to menu link
    var activeRoute = localStorage.getItem('activeRoute');
    if (activeRoute === '/') {
        $('nav a[href="' + activeRoute + '"]').parent().addClass('active');
    } else {
        $('nav a[href^="' + activeRoute + '"]').parent().addClass('active');
    }

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
        $(this).addClass('open').siblings().removeClass('open');
        // $(this).toggleClass('open');
        $('#FAQAccordion .open .fa').toggleClass('fa-chevron-up fa-chevron-down');
    });
    // collapse accordion
    $('.collapse').on('show.bs.collapse', function(e) {
        $('.collapse').collapse("hide")
    });

    // Contact form
    $('.contact-form .form-item').addClass('form-group');
    $('.contact-form input').addClass('form-control');
    $('.contact-form textarea').addClass('form-control');
    $('.contact-form input[type="checkbox"]').removeClass('form-control');

    // Login form
    $('.user-login-form .form-item').addClass('form-group');
    $('.user-login-form input').addClass('form-control');

    // Register form
    $('.user-register-form .form-item').addClass('form-group');
    $('.user-register-form input').addClass('form-control');
    $('.user-register-form textarea').addClass('form-control');
    $('.user-register-form select').addClass('form-control');
    $('.user-register-form input[type="checkbox"]').removeClass('form-control');

    // Reset Password
    $('.user-pass-form input').addClass('form-control');

    // User Edit form
    $('.user-edit-form .form-item').addClass('form-group');
    $('.user-edit-form input, textarea ,select').addClass('form-control');
    $('.user-edit-form input[type="checkbox"]').removeClass('form-control');
    $('.user-edit-form input[id="edit-submit"]').addClass('btn btn-success').removeClass('form-control');
    $('.user-edit-form input[value="Remove"]').addClass('btn btn-danger').removeClass('form-control');
    $('.user-edit-form img').addClass('img-thumbnail');
});