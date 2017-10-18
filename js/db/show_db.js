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
