<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

$user = '';
$password = '';
$rePassword = '';
$email = '';
$source = '';
$comments = '';

if (!empty($_POST)) {
    if (!empty($_POST['user']) && is_string($_POST['user'])) {
        $user = $_POST['user'];
    }
    if (!empty($_POST['password']) && is_string($_POST['password'])) {
        $password = $_POST['password'];
    }
    if (!empty($_POST['re-password']) && is_string($_POST['re-password']) && ($_POST['password'] === $_POST['re-password'])) {
        $rePassword = $_POST['re-password'];
    }
    if (!empty($_POST['email']) && is_string($_POST['email'])) {
        if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) !== false) {
            $email = $_POST['email'];
        };
    }
    if (!empty($_POST['source']) && is_string($_POST['source'])) {
        $source = $_POST['source'];
    }
    if (!empty($_POST['comments']) && is_string($_POST['comments'])) {
        $comments = $_POST['comments'];
    }
}


if ($user !== '' && $password !== '' && $rePassword !== '' && $email !== '' && $source !== '' && $comments !== '') {
}
