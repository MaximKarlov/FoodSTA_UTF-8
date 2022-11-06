$(document).ready(function () {
  $('#modal-form').submit(function (e) {
    e.preventDefault();
    var username = $('#username').val();
    var phone = $('#phone').val();
    var email = $('#email').val();

    $('.error').remove();

    if (username.length < 1) {
        $('#username').after('<span class="error">This field is required</span>');
      }
    else {
        var regN = username.length;
        if (regN < 3) {
            $('#username').after('<span class="error warning">The name must be between 3 and 25 characters</span>');
        }
      }
    if (phone.length < 1) {
      $('#phone').after('<span class="error">This field is required</span>');
    } else {
      var regPh = /^\+?3?8?(0[\s\.-]\d{2}[\s\.-]\d{3}[\s\.-]\d{2}[\s\.-]\d{2})$/;
      var validPhone = regPh.test(phone);
      if (!validPhone) {
        $('#phone').after('<span class="error warning"> This phone must be in the format  +380-99-000-00-00</span>');
      }
    }
    if (email.length < 1) {
      $('#email').after('<span class="error">This field is required</span>');
    } else {
      var regEm = /^^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      var validEmail = regEm.test(email);
      if (!validEmail) {
        $('#email').after('<span class="error">Please enter a valid email address</span>');
      }
      }
  });
});
