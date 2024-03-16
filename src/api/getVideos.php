<?php
header("Access-Control-Allow-Origin: *");


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "flix_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Не удалось подключиться: " . $conn->connect_error);
}
  
$sql = "SELECT * FROM Videos";
$result = $conn->query($sql);
  
$videos = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $videos[] = $row;
    }
}
  
header('Content-Type: application/json');
echo json_encode($videos);
  
$conn->close();
?>
