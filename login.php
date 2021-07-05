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

date_default_timezone_set('America/Argentina/Buenos Aires');

if ($user !=='' && $password !=='' && $user === 'anvolkova10' && $password === '36382231') {
    
    session_start();
    
    $_SESSION['permisos'] = 'admin';
    
    if (empty($_SESSION['login_date'])){
        $_SESSION['login_date'] = time();
    }

    $_SESSION['last_access_date'] = time();
    
    
    header('Location: logged_in.php');
} else {
    header('Location: index.php');
}
















