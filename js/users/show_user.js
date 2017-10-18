function show_user(data) {
  console.log('Inside show_user');
  data = JSON.parse(data); //turns string of characters into json object
  console.log(data);

  for (var counter = 0; counter < data.length; counter++) {
    console.log(data[counter].user);
    var tr = $('<tr>');
    var td = $('<td>');
    td.text(data[counter].user);
    tr.append(td);
    td = $('<td>');
    var btn = $('<button class ="delete" id="' + data[counter].user + '">delete</button>');
    td.append(btn);
    tr.append(td);
    $('.table tbody').append(tr);
  }
  $('.delete').click(delete_user);

}
