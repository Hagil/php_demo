function delete_user() {
  console.log('Inside delete_user');
  var user_to_be_deleted = $(this).attr('id');
  console.log(user_to_be_deleted);
  var data = {
    user_name: user_to_be_deleted
  };

  $.get('backend/manage_users/delete_user.php', data).done(deleted_user).fail(blow_up);
}

function deleted_user(data) {
  console.log('Inside deleted_user');
  console.log(data);
  do_setup();
}
