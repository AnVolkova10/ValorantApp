<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
echo '<pre>';

$api_response = file_get_contents('https://valorant-api.com/v1/agents');


$valorant = json_decode($api_response, true);

var_dump($valorant);