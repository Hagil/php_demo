<?php

require_once ('../common/connection.php');

$user = new Dbconnect($admin, $pass);

$user_name = $_GET['user_name'];
$user_pw = $_GET['user_pw'];

$sql = "drop user $user_name";

$result = $user->conn->query($sql);

if($result){
  logger("deleted user");
  echo "dropped user $user_name";
}
  else{
logger($user->conn->error);
  }
