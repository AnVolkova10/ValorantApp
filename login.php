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


if ($user !=='' && $password !=='') {

}
















