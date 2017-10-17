console.log('loaded databases.js');

$(document).ready(do_setup);

function do_setup(){
  console.log('Inside do_setup');
  $('*').off();
  $('.table tbody').html('');
  $('#create_db').click(create_db);
  $.get('backend/manage_db/show_databases.php').done(show_dbs).fail(blow_up);

}

function show_dbs(data){
  console.log('Inside show_dbs');
  data = JSON.parse(data); //turns string of characters into json object
console.log(data);

for (var counter= 0; counter < data.length; counter++) {
  console.log(data[counter].Database);
  var tr = $('<tr>');
  var td = $('<td>');
  td.text(data[counter].Database);
  tr.append(td);
td = $('<td>');
var btn = $('<button class ="delete" id="' + data[counter].Database + '">delete</button>');
td.append(btn);
tr.append(td);
$('.table tbody').append(tr);
}
$('.delete').click(delete_db);

}
function blow_up(data){
  console.log('Inside blow_up');
console.log(data);
}

function delete_db(){
  console.log('Inside delete_db');
  var db_to_be_deleted = $(this).attr('id');
  console.log(db_to_be_deleted);
  var data = {db_name: db_to_be_deleted};
$.get('backend/manage_db/delete_database.php', data).done(deleted_db).fail(blow_up);
}

function deleted_db(data){
  console.log('Inside delete_db');
  console.log(data);
do_setup();
}

function create_db(){
  console.log('Inside create_db');
  var db= $('#db_name').val();
  var data = {db_name: db};
  $.get('backend/manage_db/create_database.php', data).done(created_db).fail(blow_up);
}
function created_db(data){
  console.log('Inside created_db');
  console.log(data);
  do_setup();
}
