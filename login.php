<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

$user = '';
$password = '';

if ( !empty ($_POST)) {
    if ( !empty (trim($_POST['user'])) && is_string (trim($_POST['user']))){
        $user = $_POST['user'];
    }
    if ( !empty (trim($_POST['password'])) && is_string (trim($_POST['password']))){
        $password = $_POST['password'];
    }
}


if ($user !=='' && $password !=='') {

    $connection = new mysqli('localhost', 'root', '', 'valorant_app');

    if ($connection-> connect_errno) {
        die(' No se pudo connectar :(');
    }
    
    $resultado = $connection->query('SELECT u_id FROM users
    WHERE u_name = "'. $connection->real_escape_string($user) .'"
    AND u_password = "' . $connection->real_escape_string($password) . '"');
    
    

    if ($resultado->fetch_assoc()){
        session_start();
    
        $_SESSION['user_valid'] = true;
    
    header('Location: logged_in.php');    

    } else {
    
        header('Location: index.php');
    }
    
 
}

























