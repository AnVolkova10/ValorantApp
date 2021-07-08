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
            
            for ($i=0; $i < 4 ; $i++) { 
                echo $agents["data"][$agent_data]["abilities"][$i]["slot"] . ' - '. $agents["data"][$agent_data]["abilities"][$i]["displayName"] . '<br>';      //trae clase    # code...'<br>';      //trae clase    # code...
                echo $agents["data"][$agent_data]["abilities"][$i]["description"] . '<br>';      
            }
            
            echo'<hr>' ;
        }
        }

        echo '</ul>';
    } 
}
die();
var_dump($agents);





