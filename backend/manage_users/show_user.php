<?php

require_once ('../common/connection.php');

$user = new Dbconnect($admin, $pass);

$sql = "select user from mysql.user";

$result = $user->conn->query($sql);

if($result){
  $output = $result->fetchAll();
  logger($output);
  echo json_encode($output);
}
  else{
logger($user->conn->error);
  }
