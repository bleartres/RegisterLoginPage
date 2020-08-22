<?php

//define constant variables
define('DB_NAME', 'register_db');
define('DB_USER', 'root');
define('DB_PASSWORD', 'admin');
define('DB_HOST', 'localhost');

try{

  //connectionvariabla

  $con = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

  mysqli_set_charset($con, 'utf8');

}catch (Exception $ex){
  print "An Exception occured.Nessage: " . $ex->getMessage();
}catch (Error $e){
  print "The system is busy please try later";
}
