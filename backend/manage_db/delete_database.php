<?php

require_once ('../common/connection.php');

$db = new Dbconnect($admin, $pass);

$db_name = $_GET['db_name'];
function safety($db_name){
  $restricted_names = ['project_two', 'mysql', 'performance_schema', 'sys', 'information_schema', 'wdi'];
  if (in_array($db_name, $restricted_names)){
    logger('if is true');
    echo "$db_name cannot be deleted!";
  } else {
    logger('if is false');
    global $db;
    $sql = "drop database $db_name";
    $result = $db->conn->query($sql);
    if($result){
      logger("deleted database");
      echo "dropped database $db_name";
  }
  else{
    logger($db->conn->error);
}
}
  }
safety($db_name);
