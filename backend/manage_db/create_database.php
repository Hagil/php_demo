<?php

require_once ('../common/connection.php');

sleep('1'); // mimic a 'real' server

$db = new Dbconnect($admin, $pass);

$db_name = $_GET['db_name'];

$sql = "create database $db_name";

$result = $db->conn->query($sql);

if($result){
  logger("created database");
  echo "created database $db_name";
}
  else{
logger($db->conn->error);
  }
