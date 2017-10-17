<?php

require_once ('../common/connection.php');

$db = new Dbconnect($admin, $pass);

$sql = "show databases";

$result = $db->conn->query($sql);

if($result){
  $output = $result->fetchAll();
  logger($output);
  echo json_encode($output);
}
  else{
logger($db->conn->error);
  }
