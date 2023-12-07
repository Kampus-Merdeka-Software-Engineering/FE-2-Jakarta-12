$(document).ready(function () {
  // Add smooth scrolling to all links
  $('a').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  // Add fadeIn animation to elements with the 'fadeIn' class
  $(window).scroll(function () {
    $('.fadeIn').each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      if (position < scroll + $(window).height()) {
        $(this).addClass('visible');
      }
    });
  });
});
