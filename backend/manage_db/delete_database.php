<?php

require_once ('../common/connection.php');

$db = new Dbconnect($admin, $pass);

$db_name = $_GET['db_name'];

$sql = "drop database $db_name";

$result = $db->conn->query($sql);

if($result){
  logger("deleted database");
  echo "dropped database $db_name";
}
  else{
logger($db->conn->error);
  }
