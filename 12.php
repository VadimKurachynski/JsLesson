<?php



$myObj->name = $_POST["fname"];;
$myObj->age = 30;
$myObj->city = "New York";
$myJSON = json_encode($myObj);
echo $myJSON;
