$('document').ready(function () {
  const topline = $('.top-menu');
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $('.to-top').fadeIn();
    } else {
      $('.to-top').fadeOut();
    }
  });

  $('.to-top').click(function () {
    $('body,html').animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });
});
