<?php

require_once ('../common/connection.php');

sleep('1'); // mimic a 'real' server

$user = new Dbconnect($admin, $pass);

$user_name = $_GET['user_name'];
$user_pw = $_GET['user_pw'];

$sql = "create user $user_name";
//$sql = "create user pw $user_pw";

$result = $user->conn->query($sql);

if($result){
  logger("created user");
  echo "created user $user_name";
  echo "created user $user_pw";
}
  else{
logger($user->conn->error);
  }
