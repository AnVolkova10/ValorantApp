<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);



$connection = new mysqli('localhost', 'root', '', 'valorant_app');

$result = $connection->query(
        'INSERT INTO users(u_id, u_name, u_password, u_tagline, u_email, u_source, u_comments)
        VALUES ("1", "volkova", "36382231", "#LAS", "curzi.angela@gmail.com", "friend", "La radio está re buena!") '
  
);