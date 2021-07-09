<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
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
    <script type="text/javascript" src="js/main.js"></script>
</head>
<body>
    <header class="guest-mode">
        <p>Guest-Mode-Activated</p>
        <a href="signin.html" class="guest-login">Log in 4 more benefits</a>
    </header>
    <main class="login">
        <h1>Log in</h1>
        <form action="login.php" method="post">
            <label>User
                <input type="text" name="user">
            </label>
            <label>Password
                <input type="password" name="password">
            </label>
            <button type="submit">Log In</button>
        </form>
            <a href="signin.html">Need User</a>
            <a class="guest" href="#">Guest Mode</a>
    </main>
    <?php    
          require_once 'teams.php';      
          require_once 'abilities.php';  
    ?> 
    <footer><p>by Volkova.</p></footer>
</body>
</html>
