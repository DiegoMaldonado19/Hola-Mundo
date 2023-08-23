<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "blog-chilero";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Error en la conexión a la base de datos: " . $conn->connect_error);
}

$email = $_POST["email"];
$name = $_POST["name"];
$lastname = $_POST["lastname"];
$username = $_POST["username"];
$birthday = $_POST["birthday"];
$password = $_POST["password"];

$sql = "INSERT INTO usuario (Email, Nombre, Apellido, Nombre_Usuario, Fecha_Nacimiento, Contraseña) 
        VALUES ('$email', '$name', '$lastname', '$username', '$birthday', '$password')";

if ($conn->query($sql) === TRUE) {
    $response = array("success" => true, "message" => "Registro exitoso.");
} else {
    $response = array("success" => false, "message" => "Error en el registro: " . $conn->error);
}

header('Content-Type: application/json');
echo json_encode($response);

$conn->close();
?>
