<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

$user = '';
$tagline = '';
$password = '';
$rePassword = '';
$email = '';
$source = '';
$comments = '';

if (!empty($_POST)) {
    if (!empty(trim($_POST['user'])) && is_string(trim($_POST['user']))) {
        $user = $_POST['user'];
    }
    if (!empty(trim($_POST['tagline'])) && is_string(trim($_POST['tagline']))) {
        $tagline = $_POST['tagline'];
    }
    if (!empty(trim($_POST['password'])) && is_string(trim($_POST['password']))) {
        $password = $_POST['password'];
    }
    if (!empty(trim($_POST['re-password'])) && is_string(trim($_POST['re-password'])) && ($_POST['password'] === $_POST['re-password'])) {
        $rePassword = $_POST['re-password'];
    }
    if (!empty(trim($_POST['email'])) && is_string(trim($_POST['email']))) {
        if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) !== false) {
            $email = $_POST['email'];
        };
    }
    if (!empty(trim($_POST['source'])) && is_string(trim($_POST['source']))) {
        $source = $_POST['source'];
    }
    if (is_string($_POST['comments'])) {
        $comments = $_POST['comments'];
    };
} else {
    echo 'No se pudo ingresar el registro.';
};



if ($user !== '' && $password !== '' && $email !== '' && $source !== '') {

    $connection = new mysqli('localhost', 'root', '', 'valorant_app');

    if ($connection->connect_errno) {
        die(' No se pudo connectar :(');
    };

    $result = $connection->query('INSERT INTO users(u_name, u_password, u_tagline, u_email, u_source, u_comments) VALUES
        ("' . $connection->real_escape_string($user) . '", "' . $connection->real_escape_string($password) . '", "' . $connection->real_escape_string($tagline) . '", "' . $connection->real_escape_string($email) . '", "' . $connection->real_escape_string($source) . '", "' . $connection->real_escape_string($comments) . '") ');

    if ($result) {
        
    } else {
        echo 'todo mal, no se pudo registrar el usuarie.';
    }

} else {
    echo 'No se pudo ingresar el registro.';
};
