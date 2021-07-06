<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

$user = '';
$password = '';

if ( !empty ($_POST)) {
    if ( !empty ($_POST['user']) && is_string ($_POST['user'])){
        $user = $_POST['user'];
    }
    if ( !empty ($_POST['password']) && is_string ($_POST['password'])){
        $password = $_POST['password'];
    }
}


$connection = new mysqli('localhost', 'root', '', 'valorant_app');

if ($connection-> errorno) {
    die(' No se pudo connectar :(');
}

$consulta = 'SELECT u_id FROM users WHERE u_name = "'. $connection->real_escape_string($user) .'"';
$resultado = $connection->query($consulta);
$fila = $resultado->fetch_assoc();


$resultName = $fila['u_name'];
$resultPassword = $fila['u_password'];


if ($user !=='' && $password !=='' && $user === $resultName && $password === $resultPassword) {
    
    session_start();
    
    $_SESSION['permisos'] = 'admin';
    
    header('Location: logged_in.php');
} else {
    
    header('Location: index.php');
}


















