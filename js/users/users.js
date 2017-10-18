console.log('loaded users.js');

$(document).ready(do_setup);

function do_setup() {
  console.log('Inside do_setup');
  $('*').off();
  $('.table tbody').html('');
  $('#create_user').click(create_user);
  $.get('backend/manage_users/show_user.php').done(show_user).fail(blow_up);
}

function blow_up(data) {
  console.log('Inside blow_up');
  console.log(data);
}