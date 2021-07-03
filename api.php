<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
echo '<pre>';

$api_response = file_get_contents('https://valorant-api.com/v1/agents');


if ($api_response !== false) {
    $agents = json_decode($api_response, true);

    if ( !empty ($agents['status'])) {
        echo '<ul>';
        foreach ($agents["data"] as $agent_data => $description) {
            if ( empty($agents["data"][$agent_data]["role"]["displayName"])  ) {            
            } else {
            echo $agents["data"][$agent_data]["displayName"] . '<br>';            //trae nombre
            echo $agents["data"][$agent_data]["description"] . '<br>';              //trae descripción
            echo $agents["data"][$agent_data]["role"]["displayName"] . '<br>';      //trae clase
            '<hr>' ;
        }
        }

        echo '</ul>';
    } 
}
var_dump($agents);
die();




