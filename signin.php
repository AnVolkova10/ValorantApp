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
    if (!empty($_POST['user']) && is_string($_POST['user'])) {
        $user = $_POST['user'];
    }
    if (!empty($_POST['tagline']) && is_string($_POST['tagline'])) {
            $tagline = $_POST['tagline'];
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
    if (is_string($_POST['comments'])) {
        $comments = $_POST['comments'];
    }
}

function insert_user($user, $password, $tagline, $email, $source, $comments) {
    if ($user !== '' && $password !== '' && $email !== '' && $source !== '') {
    
        $connection = new mysqli('localhost', 'root', '', 'valorant_app');};
    
        $connection->query('INSERT INTO users(u_id, u_name, u_password, u_tagline, u_email, u_source, u_comments) VALUES
         ("2", "'.$user.'", "'.$password.'", "'.$tagline.'", "'.$email.'", "'.$source.'", "'.$comments.'") ');
    };
}

insert_user($user, $password, $tagline, $email, $source, $comments);


