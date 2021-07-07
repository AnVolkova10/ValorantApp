<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

session_start();
if ($_SESSION['user_valid']!== true){
    header('Location:index.php');
    die();
}
?>

<!DOCTYPE html>
<html lang="es-AR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VALORANT TEAM-STRATEGY</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://kit.fontawesome.com/7e0b075d33.js" crossorigin="anonymous"></script>
    <script src="js/main.js"></script>
</head>
<body>
    <?php require_once 'nav.php';        ?>
    <main class="teams">
        <aside >
            <h2>Select Your Team</h2>
            <form action="" method="post">
                <section id="agent1" class="agent1">
                    <label for="player1"> Player 1 :
                        <select name="player1" id="player1">
                            <option value="blank">choose</option>
                            <option value="astra">Astra</option>
                            <option value="breach">Breach</option>
                            <option value="brimstone">Brimstone</option>
                            <option value="cypher">Cypher</option>
                            <option value="jett">Jett</option>
                            <option value="kayo">KAY/O</option>
                            <option value="killjoy">Killjoy</option>
                            <option value="omen">Omen</option>
                            <option value="phoenix">Phoenix</option>
                            <option value="raze">Raze</option>
                            <option value="reyna">Reyna</option>
                            <option value="sage">Sage</option>
                            <option value="skye">Skye</option>
                            <option value="sova">Sova</option>
                            <option value="viper">Viper</option>
                            <option value="yoru">Yoru</option>
                        </select>
                    </label>
                </section>
                <section id="agent2" class="agent2">
                    <label for="player2"> Player 2 :
                        <select name="player2" id="player2">
                            <option value="blank">choose</option>
                            <option value="astra">Astra</option>
                            <option value="breach">Breach</option>
                            <option value="brimstone">Brimstone</option>
                            <option value="cypher">Cypher</option>
                            <option value="jett">Jett</option>
                            <option value="kayo">KAY/O</option>
                            <option value="killjoy">Killjoy</option>
                            <option value="omen">Omen</option>
                            <option value="phoenix">Phoenix</option>
                            <option value="raze">Raze</option>
                            <option value="reyna">Reyna</option>
                            <option value="sage">Sage</option>
                            <option value="skye">Skye</option>
                            <option value="sova">Sova</option>
                            <option value="viper">Viper</option>
                            <option value="yoru">Yoru</option>
                        </select>
                    </label>
                </section>
                <section id="agent3" class="agent3">
                    <label for="player3"> Player 3 :
                        <select name="player3" id="player3">
                            <option value=".">choose</option>
                            <option value="astra">Astra</option>
                            <option value="breach">Breach</option>
                            <option value="brimstone">Brimstone</option>
                            <option value="cypher">Cypher</option>
                            <option value="jett">Jett</option>
                            <option value="kayo">KAY/O</option>
                            <option value="killjoy">Killjoy</option>
                            <option value="omen">Omen</option>
                            <option value="phoenix">Phoenix</option>
                            <option value="raze">Raze</option>
                            <option value="reyna">Reyna</option>
                            <option value="sage">Sage</option>
                            <option value="skye">Skye</option>
                            <option value="sova">Sova</option>
                            <option value="viper">Viper</option>
                            <option value="yoru">Yoru</option>
                        </select>
                    </label>
                </section>
                <section id="agent4" class="agent4">
                    <label for="player4"> Player 4 :
                        <select name="player4" id="player4">
                            <option value=".">choose</option>
                            <option value="astra">Astra</option>
                            <option value="breach">Breach</option>
                            <option value="brimstone">Brimstone</option>
                            <option value="cypher">Cypher</option>
                            <option value="jett">Jett</option>
                            <option value="kayo">KAY/O</option>
                            <option value="killjoy">Killjoy</option>
                            <option value="omen">Omen</option>
                            <option value="phoenix">Phoenix</option>
                            <option value="raze">Raze</option>
                            <option value="reyna">Reyna</option>
                            <option value="sage">Sage</option>
                            <option value="skye">Skye</option>
                            <option value="sova">Sova</option>
                            <option value="viper">Viper</option>
                            <option value="yoru">Yoru</option>
                        </select>
                    </label>
                </section>
                <section id="agent5" class="agent">
                    <label for="player5"> Player 5 :
                        <select name="player5" id="player5">
                            <option value=".">choose</option>
                            <option value="astra">Astra</option>
                            <option value="breach">Breach</option>
                            <option value="brimstone">Brimstone</option>
                            <option value="cypher">Cypher</option>
                            <option value="jett">Jett</option>
                            <option value="kayo">KAY/O</option>
                            <option value="killjoy">Killjoy</option>
                            <option value="omen">Omen</option>
                            <option value="phoenix">Phoenix</option>
                            <option value="raze">Raze</option>
                            <option value="reyna">Reyna</option>
                            <option value="sage">Sage</option>
                            <option value="skye">Skye</option>
                            <option value="sova">Sova</option>
                            <option value="viper">Viper</option>
                            <option value="yoru">Yoru</option>
                        </select>
                    </label>
                </section>
            </form>
        </aside>
        <aside >
            <h2 class="teamE">Select The Enemy Team</h2>
            <form action="" method="post" class="teamE">
                <section id="agent6" class="agent6">
                    <label for="player6"> Player 6 :
                        <select name="player6" id="player6">
                            <option value="blank">choose</option>
                            <option value="astra">Astra</option>
                            <option value="breach">Breach</option>
                            <option value="brimstone">Brimstone</option>
                            <option value="cypher">Cypher</option>
                            <option value="jett">Jett</option>
                            <option value="kayo">KAY/O</option>
                            <option value="killjoy">Killjoy</option>
                            <option value="omen">Omen</option>
                            <option value="phoenix">Phoenix</option>
                            <option value="raze">Raze</option>
                            <option value="reyna">Reyna</option>
                            <option value="sage">Sage</option>
                            <option value="skye">Skye</option>
                            <option value="sova">Sova</option>
                            <option value="viper">Viper</option>
                            <option value="yoru">Yoru</option>
                        </select>
                    </label>
                </section>
                <section id="agent7" class="agent7">
                    <label for="player7"> Player 7 :
                        <select name="player7" id="player7">
                            <option value="blank">choose</option>
                            <option value="astra">Astra</option>
                            <option value="breach">Breach</option>
                            <option value="brimstone">Brimstone</option>
                            <option value="cypher">Cypher</option>
                            <option value="jett">Jett</option>
                            <option value="kayo">KAY/O</option>
                            <option value="killjoy">Killjoy</option>
                            <option value="omen">Omen</option>
                            <option value="phoenix">Phoenix</option>
                            <option value="raze">Raze</option>
                            <option value="reyna">Reyna</option>
                            <option value="sage">Sage</option>
                            <option value="skye">Skye</option>
                            <option value="sova">Sova</option>
                            <option value="viper">Viper</option>
                            <option value="yoru">Yoru</option>
                        </select>
                    </label>
                </section>
                <section id="agent8" class="agent8">
                    <label for="player8"> Player 8 :
                        <select name="player8" id="player8">
                            <option value=".">choose</option>
                            <option value="astra">Astra</option>
                            <option value="breach">Breach</option>
                            <option value="brimstone">Brimstone</option>
                            <option value="cypher">Cypher</option>
                            <option value="jett">Jett</option>
                            <option value="kayo">KAY/O</option>
                            <option value="killjoy">Killjoy</option>
                            <option value="omen">Omen</option>
                            <option value="phoenix">Phoenix</option>
                            <option value="raze">Raze</option>
                            <option value="reyna">Reyna</option>
                            <option value="sage">Sage</option>
                            <option value="skye">Skye</option>
                            <option value="sova">Sova</option>
                            <option value="viper">Viper</option>
                            <option value="yoru">Yoru</option>
                        </select>
                    </label>
                </section>
                <section id="agent9" class="agent9">
                    <label for="player9"> Player 9 :
                        <select name="player9" id="player9">
                            <option value=".">choose</option>
                            <option value="astra">Astra</option>
                            <option value="breach">Breach</option>
                            <option value="brimstone">Brimstone</option>
                            <option value="cypher">Cypher</option>
                            <option value="jett">Jett</option>
                            <option value="kayo">KAY/O</option>
                            <option value="killjoy">Killjoy</option>
                            <option value="omen">Omen</option>
                            <option value="phoenix">Phoenix</option>
                            <option value="raze">Raze</option>
                            <option value="reyna">Reyna</option>
                            <option value="sage">Sage</option>
                            <option value="skye">Skye</option>
                            <option value="sova">Sova</option>
                            <option value="viper">Viper</option>
                            <option value="yoru">Yoru</option>
                        </select>
                    </label>
                </section>
                <section id="agent10" class="agent10">
                    <label for="player10"> Player10:
                        <select name="player10" id="player10">
                            <option value=".">choose</option>
                            <option value="astra">Astra</option>
                            <option value="breach">Breach</option>
                            <option value="brimstone">Brimstone</option>
                            <option value="cypher">Cypher</option>
                            <option value="jett">Jett</option>
                            <option value="kayo">KAY/O</option>
                            <option value="killjoy">Killjoy</option>
                            <option value="omen">Omen</option>
                            <option value="phoenix">Phoenix</option>
                            <option value="raze">Raze</option>
                            <option value="reyna">Reyna</option>
                            <option value="sage">Sage</option>
                            <option value="skye">Skye</option>
                            <option value="sova">Sova</option>
                            <option value="viper">Viper</option>
                            <option value="yoru">Yoru</option>
                        </select>
                    </label>
                </section>
            </form>
        </aside>
    </main>
    <main class="basicAdvanced">
        <h1><button class="btnBasicAdvanced">Basic/Advanced</button></h1>
        <section class="basic">
            <h2>Basic</h2> 
            <section class="abilities">
                <section class="smoke screen"><p></p></section><p>Smokes/Screens</p> <section class="smokeE screenE"></section>
                <section class="flash blind"></section><p>Flashs/Blinds</p> <section class="flashE blindE"></section>
                <section class="obstacle slow daze concussion"></section><p>Obstacles/Slows/Daze/Concussion</p> <section class="obstacleE slowE dazeE concussionE"></section>
                <section class="heal healSelf revive"></section><p>Heals/Self/Revive</p> <section class="healE healSelfE reviveE"></section>
                <section class="track reveal"></section><p>Tracks/Reveals</p> <section class="trackE revealE"></section>
                <section class="dmgExpl dmgArea"></section><p>DmgExpl/DmgArea</p> <section class="dmgExplE dmgAreaE"></section>
                <section class="teleport movability decoy"></section><p>Teleport/Movability/Decoy/Suppression</p> <section class="teleportE movabilityE decoyE"></section>
                <section class="rapidFire vulnerable"></section><p>RapidFire/Vulnerable</p> <section class="rapidFireE vulnerableE"></section>
                <section class="suppression detain"></section><p>Suppression/Detain</p> <section class="suppressionE detainE"></section>
            </section>
        </section>
        <section class="advanced">
            <h2>Advanced</h2>    
            <section class="abilities">
                <section class="smoke"><p></p></section><p>Smokes</p> <section class="smokeE"></section>
                <section class="screen"><p></p></section><p>Screens</p> <section class="screenE"></section>
                <section class="flash"></section><p>Flashs</p> <section class="flashE"></section>
                <section class="blind"></section><p>Blinds</p> <section class="blindE"></section>
                <section class="obstacle"></section><p>Obstacles</p> <section class="obstacleE"></section>
                <section class="slow"></section><p>Slows</p> <section class="slowE"></section>
                <section class="daze"></section><p>Daze</p> <section class="dazeE"></section>
                <section class="concussion"></section><p>Concussion</p> <section class="concussionE"></section>
                <section class="heal"></section><p>Heals</p> <section class="healE"></section>
                <section class="healSelf"></section><p>Heals-self</p> <section class="healSelfE"></section>
                <section class="revive"></section><p>Revive</p> <section class="reviveE"></section>
                <section class="track"></section><p>Tracks</p> <section class="trackE"></section>
                <section class="reveal"></section><p>Reveals</p> <section class="revealE"></section>
                <section class="dmgExpl"></section><p>Explosive Damage</p> <section class="dmgExplE"></section>
                <section class="dmgArea"></section><p>Area Damage</p> <section class="dmgAreaE"></section>
                <section class="teleport"></section><p>Teleport</p> <section class="teleportE"></section>
                <section class="movability"></section><p>Movability</p> <section class="movabilityE"></section>
                <section class="decoy"></section><p>Decoy</p> <section class="decoyE"></section>
                <section class="rapidFire"></section><p>Rapid-fire</p> <section class="rapidFireE"></section>
                <section class="vulnerable"></section><p>Vulnerable</p> <section class="vulnerableE"></section>
                <section class="suppression"></section><p>Suppression</p> <section class="suppressionE"></section>
                <section class="detain"></section><p>Detain</p> <section class="detainE"></section>
            </section>
        </section>
    </main>
    <footer><p>by Volkova.</p></footer>
</body>
</html>
 