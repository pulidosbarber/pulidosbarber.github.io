// Change navbar color on scroll
$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('.navbar').addClass('navbar-scrolled');
    } else {
      $('.navbar').removeClass('navbar-scrolled');
    }
  });


  $(document).ready(function(){
    $('.slick-slider').slick({
      // Slick slider settings
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000, // Adjust the speed as needed
      dots: true // Display dots for navigation
      // Add more settings as required
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