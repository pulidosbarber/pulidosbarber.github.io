// Change navbar color on scroll
$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('.navbar').addClass('navbar-scrolled');
    } else {
      $('.navbar').removeClass('navbar-scrolled');
    }
  });


  $(document).ready(function(){
    // Detect screen size
    var windowWidth = $(window).width();
    
    // Initialize Slick slider with appropriate settings based on screen size
    if (windowWidth >= 768) { // Desktop mode
        $('.slick-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            dots: true
            // Add more settings for desktop mode if needed
        });
    } else { // Mobile mode
        $('.slick-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            dots: true
            // Add more settings for mobile mode if needed
        });
    }
    
    // Re-initialize Slick slider on window resize
    $(window).resize(function() {
        var windowWidth = $(window).width();
        
        // Destroy existing Slick slider instance
        $('.slick-slider').slick('unslick');
        
        // Re-initialize Slick slider with appropriate settings based on screen size
        if (windowWidth >= 768) { // Desktop mode
            $('.slick-slider').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1000,
                dots: true
                // Add more settings for desktop mode if needed
            });
        } else { // Mobile mode
            $('.slick-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1000,
                dots: true
                // Add more settings for mobile mode if needed
            });
        }
    });
});



  
  
  // Function to scroll to top smoothly
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  let lastScrollTop = 0;
  // Show/hide the scroll-to-top button based on scroll direction
  $(window).scroll(function() {
    let currentScroll = $(this).scrollTop();
    if (currentScroll < lastScrollTop) {
      // Scrolling down
      $('#scroll-top-btn').removeClass('show');
    } else {
      // Scrolling up
      $('#scroll-top-btn').addClass('show');
    }
    lastScrollTop = currentScroll;
  });

  // Gallery Starts Here //
