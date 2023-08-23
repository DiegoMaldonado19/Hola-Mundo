<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "blog-chilero";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Error en la conexión a la base de datos: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    $sql = "SELECT * FROM usuario WHERE Nombre_Usuario = '$username' AND Contraseña = '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $response = array("success" => true, "message" => "Inicio de sesión exitoso.");
    } else {
        $response = array("success" => false, "message" => "Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }

    header('Content-Type: application/json');
    echo json_encode($response);
}

$conn->close();
?>
