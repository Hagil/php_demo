function create_db(){
  console.log('Inside create_db');
  var db= $('#db_name').val();
  var data = {db_name: db};
  $.get('backend/manage_db/create_database.php', data).done(created_db).fail(blow_up);
  $('#create_db').removeClass('btn-primary').addClass('btn-warning').text('creating...');
}
function created_db(data){
  console.log('Inside created_db');
  console.log(data);
  $('#create_db').removeClass('btn-warning').addClass('btn-success').text('created!');
  do_setup();
}
