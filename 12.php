<?php

// $mail = $_POST;

$data = [5, 8, 9, 9, 6];
$json = json_encode($data);
// $myObj->name = $_POST["fname"];;
// $myObj->age = 30;
// $myObj->city = "New York";

// $myJSON = json_encode($myObj);

// echo $myJSON;
header('Content-type: application/json');
echo $json;
// echo $myJSON;
