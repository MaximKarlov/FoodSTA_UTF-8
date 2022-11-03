$('document').ready(function () {
  const $page = $('html, body');
  $('a[href*="#"]').click(function () {
    $page.animate(
      {
        scrollTop: $($.attr(this, 'href')).offset().top,
      },
      1000
    );
    return false;
  });
});
