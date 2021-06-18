window.onload = () => {


    //Allied Abilities
    let smoke = document.querySelector(".smoke");
    let screen = document.querySelector(".screen");
    let flash = document.querySelector(".flash");
    let blind = document.querySelector(".blind");
    let obstacle = document.querySelector(".obstacle");
    let slow = document.querySelector(".slow");
    let daze = document.querySelector(".daze");
    let heal = document.querySelector(".heal");
    let healSelf = document.querySelector(".healSelf");
    let track = document.querySelector(".track");
    let reveal = document.querySelector(".reveal");
    let dmgExpl = document.querySelector(".dmgExpl");
    let dmgArea = document.querySelector(".dmgArea");
    let teleport = document.querySelector(".teleport");
    let movability = document.querySelector(".movability");
    let rapidFire = document.querySelector(".rapidFire");

    // Enemy Abilities
    let smokeE = document.querySelector(".smokeE");
    let screenE = document.querySelector(".screenE");
    let flashE = document.querySelector(".flashE");
    let blindE = document.querySelector(".blindE");
    let obstacleE = document.querySelector(".obstacleE");
    let slowE = document.querySelector(".slowE");
    let dazeE = document.querySelector(".dazeE");
    let healE = document.querySelector(".healE");
    let healSelfE = document.querySelector(".healSelfE");
    let trackE = document.querySelector(".trackE");
    let revealE = document.querySelector(".revealE");
    let dmgExplE = document.querySelector(".dmgExplE");
    let dmgAreaE = document.querySelector(".dmgAreaE");
    let teleportE = document.querySelector(".teleportE");
    let movabilityE = document.querySelector(".movabilityE");
    let rapidFireE = document.querySelector(".rapidFireE");

    // Player
    let colorP1 = "blue";
    let colorP2 = "red";
    let colorP3 = "green";
    let colorP4 = "yellow";
    let colorP5 = "pink";
    let colorP6 = "lightblue";
    let colorP7 = "lightcoral";
    let colorP8 = "lightgreen";
    let colorP9 = "khaki";
    let colorP10 = "lightpink";

    // Adding Points
    function addPoint(ability, player) {
        let point = document.createElement("div");

        ability.appendChild(point);
        point.style.backgroundColor = player;
        point.className = player;
    }

    //Agent's Abilities   
    function astraAbilities(player) {
        if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
            addPoint(smoke, player);
            addPoint(smoke, player);
            addPoint(smoke, player);
            addPoint(smoke, player);
            addPoint(smoke, player);
            addPoint(obstacle, player);
            addPoint(daze, player);
            addPoint(dmgExpl, player);
        } else {
            addPoint(smokeE, player);
            addPoint(smokeE, player);
            addPoint(smokeE, player);
            addPoint(smokeE, player);
            addPoint(smokeE, player);
            addPoint(obstacleE, player);
            addPoint(dazeE, player);
            addPoint(dmgExplE, player);
        }

    }
    function breachAbilities(player) {
        if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
            addPoint(flash, player);
            addPoint(flash, player);
            addPoint(flash, player);
            addPoint(daze, player);
            addPoint(daze, player);
            addPoint(daze, player);
            addPoint(daze, player);
            addPoint(dmgExpl, player);
            addPoint(dmgExpl, player);

        } else {
            addPoint(flashE, player);
            addPoint(flashE, player);
            addPoint(flashE, player);
            addPoint(dazeE, player);
            addPoint(dazeE, player);
            addPoint(dazeE, player);
            addPoint(dazeE, player);
            addPoint(dmgExplE, player);
            addPoint(dmgExplE, player);

        }

    }
    function brimstoneAbilities(player) {
        if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
            addPoint(smoke, player);
            addPoint(smoke, player);
            addPoint(smoke, player);
            addPoint(dmgExpl, player);
            addPoint(dmgExpl, player);
            addPoint(dmgExpl, player);
            addPoint(dmgArea, player);
            addPoint(dmgArea, player);
            addPoint(dmgArea, player);
            addPoint(rapidFire, player);
            addPoint(rapidFire, player);

        } else {
            addPoint(smokeE, player);
            addPoint(smokeE, player);
            addPoint(smokeE, player);
            addPoint(dmgExplE, player);
            addPoint(dmgExplE, player);
            addPoint(dmgExplE, player);
            addPoint(dmgAreaE, player);
            addPoint(dmgAreaE, player);
            addPoint(dmgAreaE, player);
            addPoint(rapidFireE, player);
            addPoint(rapidFireE, player);

        }

    }
    function cypherAbilities(player) {
        if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
            addPoint(obstacle, player);
            addPoint(obstacle, player);
            addPoint(obstacle, player);
            addPoint(slow, player);
            addPoint(slow, player);
            addPoint(daze, player);
            addPoint(track, player);
            addPoint(track, player);
            addPoint(reveal, player);
            addPoint(reveal, player);
            addPoint(reveal, player);

        } else {
            addPoint(smokeE, player);
            addPoint(obstacleE, player);
            addPoint(obstacleE, player);
            addPoint(obstacleE, player);
            addPoint(slowE, player);
            addPoint(slowE, player);
            addPoint(dazeE, player);
            addPoint(trackE, player);
            addPoint(trackE, player);
            addPoint(revealE, player);
            addPoint(revealE, player);
            addPoint(revealE, player);

        }

    }
    function jettAbilities(player) {
        if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
            addPoint(smoke, player);
            addPoint(dmgExpl, player);
            addPoint(dmgExpl, player);
            addPoint(movability, player);
            addPoint(movability, player);
            addPoint(movability, player);
            addPoint(movability, player);

        } else {
            addPoint(smokeE, player);
            addPoint(dmgExplE, player);
            addPoint(dmgExplE, player);
            addPoint(movabilityE, player);
            addPoint(movabilityE, player);
            addPoint(movabilityE, player);
            addPoint(movabilityE, player);

        }

    }
    function killjoyAbilities(player) {
        if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
            addPoint(obstacle, player);
            addPoint(obstacle, player);
            addPoint(obstacle, player);
            addPoint(slow, player);
            addPoint(track, player);
            addPoint(track, player);
            addPoint(dmgExpl, player);
            addPoint(dmgArea, player);
            addPoint(dmgArea, player);
            addPoint(dmgArea, player);
            addPoint(dmgArea, player);

        } else {
            addPoint(obstacleE, player);
            addPoint(obstacleE, player);
            addPoint(obstacleE, player);
            addPoint(slowE, player);
            addPoint(trackE, player);
            addPoint(trackE, player);
            addPoint(dmgExplE, player);
            addPoint(dmgAreaE, player);
            addPoint(dmgAreaE, player);
            addPoint(dmgAreaE, player);
            addPoint(dmgAreaE, player);

        }

    }
    function omenAbilities(player) {
        if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
            addPoint(smoke, player);
            addPoint(smoke, player);
            addPoint(blind, player);
            addPoint(track, player);
            addPoint(teleport, player);
            addPoint(teleport, player);
            addPoint(movability, player);
            addPoint(movability, player);

        } else {
            addPoint(smokeE, player);
            addPoint(smokeE, player);
            addPoint(blindE, player);
            addPoint(trackE, player);
            addPoint(teleportE, player);
            addPoint(teleportE, player);
            addPoint(movabilityE, player);
            addPoint(movabilityE, player);

        }

    }
    function phoenixAbilities(player) {
        if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
            addPoint(screen, player);
            addPoint(flash, player);
            addPoint(flash, player);
            addPoint(healSelf, player);
            addPoint(healSelf, player);
            addPoint(healSelf, player);
            addPoint(dmgArea, player);
            addPoint(dmgArea, player);
            addPoint(dmgArea, player);
            addPoint(movability, player);

        } else {
            addPoint(screenE, player);
            addPoint(flashE, player);
            addPoint(flashE, player);
            addPoint(healSelfE, player);
            addPoint(healSelfE, player);
            addPoint(healSelfE, player);
            addPoint(dmgAreaE, player);
            addPoint(dmgAreaE, player);
            addPoint(dmgAreaE, player);
            addPoint(movabilityE, player);

        }

    }
    function razeAbilities(player) {
        if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
            addPoint(obstacle, player);
            addPoint(dmgExpl, player);
            addPoint(dmgExpl, player);
            addPoint(dmgExpl, player);
            addPoint(dmgExpl, player);
            addPoint(movability, player);
            addPoint(movability, player);

        } else {
            addPoint(obstacleE, player);
            addPoint(dmgExplE, player);
            addPoint(dmgExplE, player);
            addPoint(dmgExplE, player);
            addPoint(dmgExplE, player);
            addPoint(movabilityE, player);
            addPoint(movabilityE, player);

        }

    }
    function reynaAbilities(player) {
        if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
            addPoint(blind, player);
            addPoint(blind, player);
            addPoint(healSelf, player);
            addPoint(healSelf, player);
            addPoint(healSelf, player);
            addPoint(rapidFire, player);
            addPoint(rapidFire, player);
            addPoint(movability, player);

        } else {
            addPoint(blindE, player);
            addPoint(blindE, player);
            addPoint(healSelfE, player);
            addPoint(healSelfE, player);
            addPoint(healSelfE, player);
            addPoint(rapidFireE, player);
            addPoint(rapidFireE, player);
            addPoint(movabilityE, player);

        }

    }
    function sageAbilities(player) {
        if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
            addPoint(obstacle, player);
            addPoint(obstacle, player);
            addPoint(obstacle, player);
            addPoint(slow, player);
            addPoint(slow, player);
            addPoint(heal, player);
            addPoint(heal, player);
            addPoint(healSelf, player);

        } else {
            addPoint(obstacleE, player);
            addPoint(obstacleE, player);
            addPoint(obstacleE, player);
            addPoint(slowE, player);
            addPoint(slowE, player);
            addPoint(healE, player);
            addPoint(healE, player);
            addPoint(healSelfE, player);

        }

    }
    function skyeAbilities(player) {
        if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
            addPoint(flash, player);
            addPoint(flash, player);
            addPoint(flash, player);
            addPoint(blind, player);
            addPoint(blind, player);
            addPoint(blind, player);
            addPoint(heal, player);
            addPoint(heal, player);
            addPoint(daze, player);
            addPoint(track, player);
            addPoint(track, player);
            addPoint(track, player);

        } else {
            addPoint(flashE, player);
            addPoint(flashE, player);
            addPoint(flashE, player);
            addPoint(blindE, player);
            addPoint(blindE, player);
            addPoint(blindE, player);
            addPoint(healE, player);
            addPoint(healE, player);
            addPoint(dazeE, player);
            addPoint(trackE, player);
            addPoint(trackE, player);
            addPoint(trackE, player);

        }

    }
    function sovaAbilities(player) {
        if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
            addPoint(track, player);
            addPoint(reveal, player);
            addPoint(reveal, player);
            addPoint(reveal, player);
            addPoint(dmgExpl, player);
            addPoint(dmgExpl, player);
            addPoint(dmgExpl, player);

        } else {
            addPoint(trackE, player);
            addPoint(revealE, player);
            addPoint(revealE, player);
            addPoint(revealE, player);
            addPoint(dmgExplE, player);
            addPoint(dmgExplE, player);
            addPoint(dmgExplE, player);

        }

    }
    function viperAbilities(player) {
        if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
            addPoint(smoke, player);
            addPoint(smoke, player);
            addPoint(smoke, player);
            addPoint(screen, player);
            addPoint(obstacle, player);
            addPoint(dmgExpl, player);
            addPoint(dmgArea, player);
            addPoint(dmgArea, player);
            addPoint(dmgArea, player);

        } else {
            addPoint(smokeE, player);
            addPoint(smokeE, player);
            addPoint(smokeE, player);
            addPoint(screenE, player);
            addPoint(obstacleE, player);
            addPoint(dmgExplE, player);
            addPoint(dmgAreaE, player);
            addPoint(dmgAreaE, player);
            addPoint(dmgAreaE, player);

        }

    }
    function yoruAbilities(player) {
        if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {

            addPoint(flash, player);
            addPoint(flash, player);
            addPoint(track, player);
            addPoint(track, player);
            addPoint(teleport, player);
            addPoint(teleport, player);
            addPoint(movability, player);
            addPoint(movability, player);

        } else {
            addPoint(flashE, player);
            addPoint(flashE, player);
            addPoint(trackE, player);
            addPoint(trackE, player);
            addPoint(teleportE, player);
            addPoint(teleportE, player);
            addPoint(movabilityE, player);
            addPoint(movabilityE, player);

        }

    }


    //Player selects an Agent, adds certain points to abilities
    let agent1 = document.querySelector("#agent1");
    let player1 = document.querySelector("#player1");
    let paraClases = ".";
    player1.addEventListener('change', function () {
        let option1 = this.options[this.selectedIndex].value;

        if (option1 === "astra") {
            agent1.className = '';
            agent1.classList.add("astra");

            document.querySelectorAll(paraClases+colorP1).forEach(el => el.remove());

            astraAbilities(colorP1);

        } else if (option1 === "breach") {
            agent1.className = '';
            agent1.classList.add("breach");

            document.querySelectorAll(paraClases+colorP1).forEach(el => el.remove());

            breachAbilities(colorP1);

        } else if (option1 === "brimstone") {
            agent1.className = '';
            agent1.classList.add("brimstone");

            document.querySelectorAll(paraClases+colorP1).forEach(el => el.remove());

            brimstoneAbilities(colorP1);

        } else if (option1 === "cypher") {
            agent1.className = '';
            agent1.classList.add("cypher");

            document.querySelectorAll(paraClases+colorP1).forEach(el => el.remove());

            cypherAbilities(colorP1);

        } else if (option1 === "jett") {
            agent1.className = '';
            agent1.classList.add("jett");

            document.querySelectorAll(paraClases+colorP1).forEach(el => el.remove());

            jettAbilities(colorP1);

        } else if (option1 === "killjoy") {
            agent1.className = '';
            agent1.classList.add("killjoy");

            document.querySelectorAll(paraClases+colorP1).forEach(el => el.remove());

            killjoyAbilities(colorP1);

        } else if (option1 === "omen") {
            agent1.className = '';
            agent1.classList.add("omen");

            document.querySelectorAll(paraClases+colorP1).forEach(el => el.remove());

            omenAbilities(colorP1);

        } else if (option1 === "phoenix") {
            agent1.className = '';
            agent1.classList.add("phoenix");

            document.querySelectorAll(paraClases+colorP1).forEach(el => el.remove());

            phoenixAbilities(colorP1);

        } else if (option1 === "raze") {
            agent1.className = '';
            agent1.classList.add("raze");

            document.querySelectorAll(paraClases+colorP1).forEach(el => el.remove());

            razeAbilities(colorP1);

        } else if (option1 === "reyna") {
            agent1.className = '';
            agent1.classList.add("reyna");

            document.querySelectorAll(paraClases+colorP1).forEach(el => el.remove());

            reynaAbilities(colorP1);

        } else if (option1 === "sage") {
            agent1.className = '';
            agent1.classList.add("sage");

            document.querySelectorAll(paraClases+colorP1).forEach(el => el.remove());

            sageAbilities(colorP1);

        } else if (option1 === "skye") {
            agent1.className = '';
            agent1.classList.add("skye");

            document.querySelectorAll(paraClases+colorP1).forEach(el => el.remove());

            skyeAbilities(colorP1);

        } else if (option1 === "sova") {
            agent1.className = '';
            agent1.classList.add("sova");

            document.querySelectorAll(paraClases+colorP1).forEach(el => el.remove());

            sovaAbilities(colorP1);

        } else if (option1 === "viper") {
            agent1.className = '';
            agent1.classList.add("viper");

            document.querySelectorAll(paraClases+colorP1).forEach(el => el.remove());

            viperAbilities(colorP1);

        } else if (option1 === "yoru") {
            agent1.className = '';
            agent1.classList.add("yoru");

            document.querySelectorAll(paraClases+colorP1).forEach(el => el.remove());

            yoruAbilities(colorP1);
        }
    });

    let agent2 = document.querySelector("#agent2");
    let player2 = document.querySelector("#player2");
    player2.addEventListener('change', function () {
        let option2 = this.options[this.selectedIndex].value;

        if (option2 === "astra") {
            agent2.className = '';
            agent2.classList.add("astra");

            document.querySelectorAll(paraClases+colorP2).forEach(el => el.remove());

            astraAbilities(colorP2);

        } else if (option2 === "breach") {
            agent2.className = '';
            agent2.classList.add("breach");

            document.querySelectorAll(paraClases+colorP2).forEach(el => el.remove());

            breachAbilities(colorP2);

        } else if (option2 === "brimstone") {
            agent2.className = '';
            agent2.classList.add("brimstone");

            document.querySelectorAll(paraClases+colorP2).forEach(el => el.remove());

            brimstoneAbilities(colorP2);

        } else if (option2 === "cypher") {
            agent2.className = '';
            agent2.classList.add("cypher");

            document.querySelectorAll(paraClases+colorP2).forEach(el => el.remove());

            cypherAbilities(colorP2);

        } else if (option2 === "jett") {
            agent2.className = '';
            agent2.classList.add("jett");

            document.querySelectorAll(paraClases+colorP2).forEach(el => el.remove());

            jettAbilities(colorP2);

        } else if (option2 === "killjoy") {
            agent2.className = '';
            agent2.classList.add("killjoy");

            document.querySelectorAll(paraClases+colorP2).forEach(el => el.remove());

            killjoyAbilities(colorP2);

        } else if (option2 === "omen") {
            agent2.className = '';
            agent2.classList.add("omen");

            document.querySelectorAll(paraClases+colorP2).forEach(el => el.remove());

            omenAbilities(colorP2);

        } else if (option2 === "phoenix") {
            agent2.className = '';
            agent2.classList.add("phoenix");

            document.querySelectorAll(paraClases+colorP2).forEach(el => el.remove());

            phoenixAbilities(colorP2);

        } else if (option2 === "raze") {
            agent2.className = '';
            agent2.classList.add("raze");

            document.querySelectorAll(paraClases+colorP2).forEach(el => el.remove());

            razeAbilities(colorP2);

        } else if (option2 === "reyna") {
            agent2.className = '';
            agent2.classList.add("reyna");

            document.querySelectorAll(paraClases+colorP2).forEach(el => el.remove());

            reynaAbilities(colorP2);

        } else if (option2 === "sage") {
            agent2.className = '';
            agent2.classList.add("sage");

            document.querySelectorAll(paraClases+colorP2).forEach(el => el.remove());

            sageAbilities(colorP2);

        } else if (option2 === "skye") {
            agent2.className = '';
            agent2.classList.add("skye");

            document.querySelectorAll(paraClases+colorP2).forEach(el => el.remove());

            skyeAbilities(colorP2);

        } else if (option2 === "sova") {
            agent2.className = '';
            agent2.classList.add("sova");

            document.querySelectorAll(paraClases+colorP2).forEach(el => el.remove());

            sovaAbilities(colorP2);

        } else if (option2 === "viper") {
            agent2.className = '';
            agent2.classList.add("viper");

            document.querySelectorAll(paraClases+colorP2).forEach(el => el.remove());

            viperAbilities(colorP2);

        } else if (option2 === "yoru") {
            agent2.className = '';
            agent2.classList.add("yoru");

            document.querySelectorAll(paraClases+colorP2).forEach(el => el.remove());

            yoruAbilities(colorP2);
        }

    });

    let agent3 = document.querySelector("#agent3");
    let player3 = document.querySelector("#player3");
    player3.addEventListener('change', function () {
        let option3 = this.options[this.selectedIndex].value;

        if (option3 === "astra") {
            agent3.className = '';
            agent3.classList.add("astra");

            document.querySelectorAll(paraClases+colorP3).forEach(el => el.remove());

            astraAbilities(colorP3);

        } else if (option3 === "breach") {
            agent3.className = '';
            agent3.classList.add("breach");

            document.querySelectorAll(paraClases+colorP3).forEach(el => el.remove());

            breachAbilities(colorP3);

        } else if (option3 === "brimstone") {
            agent3.className = '';
            agent3.classList.add("brimstone");

            document.querySelectorAll(paraClases+colorP3).forEach(el => el.remove());

            brimstoneAbilities(colorP3);

        } else if (option3 === "cypher") {
            agent3.className = '';
            agent3.classList.add("cypher");

            document.querySelectorAll(paraClases+colorP3).forEach(el => el.remove());

            cypherAbilities(colorP3);

        } else if (option3 === "jett") {
            agent3.className = '';
            agent3.classList.add("jett");

            document.querySelectorAll(paraClases+colorP3).forEach(el => el.remove());

            jettAbilities(colorP3);

        } else if (option3 === "killjoy") {
            agent3.className = '';
            agent3.classList.add("killjoy");

            document.querySelectorAll(paraClases+colorP3).forEach(el => el.remove());

            killjoyAbilities(colorP3);

        } else if (option3 === "omen") {
            agent3.className = '';
            agent3.classList.add("omen");

            document.querySelectorAll(paraClases+colorP3).forEach(el => el.remove());

            omenAbilities(colorP3);

        } else if (option3 === "phoenix") {
            agent3.className = '';
            agent3.classList.add("phoenix");

            document.querySelectorAll(paraClases+colorP3).forEach(el => el.remove());

            phoenixAbilities(colorP3);

        } else if (option3 === "raze") {
            agent3.className = '';
            agent3.classList.add("raze");

            document.querySelectorAll(paraClases+colorP3).forEach(el => el.remove());

            razeAbilities(colorP3);

        } else if (option3 === "reyna") {
            agent3.className = '';
            agent3.classList.add("reyna");

            document.querySelectorAll(paraClases+colorP3).forEach(el => el.remove());

            reynaAbilities(colorP3);

        } else if (option3 === "sage") {
            agent3.className = '';
            agent3.classList.add("sage");

            document.querySelectorAll(paraClases+colorP3).forEach(el => el.remove());

            sageAbilities(colorP3);

        } else if (option3 === "skye") {
            agent3.className = '';
            agent3.classList.add("skye");

            document.querySelectorAll(paraClases+colorP3).forEach(el => el.remove());

            skyeAbilities(colorP3);

        } else if (option3 === "sova") {
            agent3.className = '';
            agent3.classList.add("sova");

            document.querySelectorAll(paraClases+colorP3).forEach(el => el.remove());

            sovaAbilities(colorP3);

        } else if (option3 === "viper") {
            agent3.className = '';
            agent3.classList.add("viper");

            document.querySelectorAll(paraClases+colorP3).forEach(el => el.remove());

            viperAbilities(colorP3);

        } else if (option3 === "yoru") {
            agent3.className = '';
            agent3.classList.add("yoru");

            document.querySelectorAll(paraClases+colorP3).forEach(el => el.remove());

            yoruAbilities(colorP3);
        }

    });

    let agent4 = document.querySelector("#agent4");
    let player4 = document.querySelector("#player4");
    player4.addEventListener('change', function () {
        let option4 = this.options[this.selectedIndex].value;

        if (option4 === "astra") {
            agent4.className = '';
            agent4.classList.add("astra");

            document.querySelectorAll(paraClases+colorP4).forEach(el => el.remove());

            astraAbilities(colorP4);

        } else if (option4 === "breach") {
            agent4.className = '';
            agent4.classList.add("breach");

            document.querySelectorAll(paraClases+colorP4).forEach(el => el.remove());

            breachAbilities(colorP4);

        } else if (option4 === "brimstone") {
            agent4.className = '';
            agent4.classList.add("brimstone");

            document.querySelectorAll(paraClases+colorP4).forEach(el => el.remove());

            brimstoneAbilities(colorP4);

        } else if (option4 === "cypher") {
            agent4.className = '';
            agent4.classList.add("cypher");

            document.querySelectorAll(paraClases+colorP4).forEach(el => el.remove());

            cypherAbilities(colorP4);

        } else if (option4 === "jett") {
            agent4.className = '';
            agent4.classList.add("jett");

            document.querySelectorAll(paraClases+colorP4).forEach(el => el.remove());

            jettAbilities(colorP4);

        } else if (option4 === "killjoy") {
            agent4.className = '';
            agent4.classList.add("killjoy");

            document.querySelectorAll(paraClases+colorP4).forEach(el => el.remove());

            killjoyAbilities(colorP4);

        } else if (option4 === "omen") {
            agent4.className = '';
            agent4.classList.add("omen");

            document.querySelectorAll(paraClases+colorP4).forEach(el => el.remove());

            omenAbilities(colorP4);

        } else if (option4 === "phoenix") {
            agent4.className = '';
            agent4.classList.add("phoenix");

            document.querySelectorAll(paraClases+colorP4).forEach(el => el.remove());

            omenAbilities(colorP4);

        } else if (option4 === "raze") {
            agent4.className = '';
            agent4.classList.add("raze");

            document.querySelectorAll(paraClases+colorP4).forEach(el => el.remove());

            razeAbilities(colorP4);

        } else if (option4 === "reyna") {
            agent4.className = '';
            agent4.classList.add("reyna");

            document.querySelectorAll(paraClases+colorP4).forEach(el => el.remove());

            reynaAbilities(colorP4);

        } else if (option4 === "sage") {
            agent4.className = '';
            agent4.classList.add("sage");

            document.querySelectorAll(paraClases+colorP4).forEach(el => el.remove());

            sageAbilities(colorP4);

        } else if (option4 === "skye") {
            agent4.className = '';
            agent4.classList.add("skye");

            document.querySelectorAll(paraClases+colorP4).forEach(el => el.remove());

            skyeAbilities(colorP4);

        } else if (option4 === "sova") {
            agent4.className = '';
            agent4.classList.add("sova");

            document.querySelectorAll(paraClases+colorP4).forEach(el => el.remove());

            sovaAbilities(colorP4);

        } else if (option4 === "viper") {
            agent4.className = '';
            agent4.classList.add("viper");

            document.querySelectorAll(paraClases+colorP4).forEach(el => el.remove());

            viperAbilities(colorP4);

        } else if (option4 === "yoru") {
            agent4.className = '';
            agent4.classList.add("yoru");

            document.querySelectorAll(paraClases+colorP4).forEach(el => el.remove());

            yoruAbilities(colorP4);
        }
    });

    let agent5 = document.querySelector("#agent5");
    let player5 = document.querySelector("#player5");
    player5.addEventListener('change', function () {
        let option5 = this.options[this.selectedIndex].value;

        if (option5 === "astra") {
            agent5.className = '';
            agent5.classList.add("astra");

            document.querySelectorAll(paraClases+colorP5).forEach(el => el.remove());

            astraAbilities(colorP5);

        } else if (option5 === "breach") {
            agent5.className = '';
            agent5.classList.add("breach");

            document.querySelectorAll(paraClases+colorP5).forEach(el => el.remove());

            breachAbilities(colorP5);

        } else if (option5 === "brimstone") {
            agent5.className = '';
            agent5.classList.add("brimstone");

            document.querySelectorAll(paraClases+colorP5).forEach(el => el.remove());

            brimstoneAbilities(colorP5);

        } else if (option5 === "cypher") {
            agent5.className = '';
            agent5.classList.add("cypher");

            document.querySelectorAll(paraClases+colorP5).forEach(el => el.remove());

            cypherAbilities(colorP5);

        } else if (option5 === "jett") {
            agent5.className = '';
            agent5.classList.add("jett");

            document.querySelectorAll(paraClases+colorP5).forEach(el => el.remove());

            jettAbilities(colorP5);

        } else if (option5 === "killjoy") {
            agent5.className = '';
            agent5.classList.add("killjoy");

            document.querySelectorAll(paraClases+colorP5).forEach(el => el.remove());

            killjoyAbilities(colorP5);

        } else if (option5 === "omen") {
            agent5.className = '';
            agent5.classList.add("omen");

            document.querySelectorAll(paraClases+colorP5).forEach(el => el.remove());

            omenAbilities(colorP5);

        } else if (option5 === "phoenix") {
            agent5.className = '';
            agent5.classList.add("phoenix");

            document.querySelectorAll(paraClases+colorP5).forEach(el => el.remove());

            phoenixAbilities(colorP5);

        } else if (option5 === "raze") {
            agent5.className = '';
            agent5.classList.add("raze");

            document.querySelectorAll(paraClases+colorP5).forEach(el => el.remove());

            razeAbilities(colorP5);

        } else if (option5 === "reyna") {
            agent5.className = '';
            agent5.classList.add("reyna");

            document.querySelectorAll(paraClases+colorP5).forEach(el => el.remove());

            reynaAbilities(colorP5);

        } else if (option5 === "sage") {
            agent5.className = '';
            agent5.classList.add("sage");

            document.querySelectorAll(paraClases+colorP5).forEach(el => el.remove());

            sageAbilities(colorP5);

        } else if (option5 === "skye") {
            agent5.className = '';
            agent5.classList.add("skye");

            document.querySelectorAll(paraClases+colorP5).forEach(el => el.remove());

            skyeAbilities(colorP5);

        } else if (option5 === "sova") {
            agent5.className = '';
            agent5.classList.add("sova");

            document.querySelectorAll(paraClases+colorP5).forEach(el => el.remove());

            sovaAbilities(colorP5);

        } else if (option5 === "viper") {
            agent5.className = '';
            agent5.classList.add("viper");

            document.querySelectorAll(paraClases+colorP5).forEach(el => el.remove());

            viperAbilities(colorP5);

        } else if (option5 === "yoru") {
            agent5.className = '';
            agent5.classList.add("yoru");

            document.querySelectorAll(paraClases+colorP5).forEach(el => el.remove());

            yoruAbilities(colorP5);
        }
    });

    let agent6 = document.querySelector("#agent6");
    let player6 = document.querySelector("#player6");
    player6.addEventListener('change', function () {
        let option6 = this.options[this.selectedIndex].value;

        if (option6 === "astra") {
            agent6.className = '';
            agent6.classList.add("astra");

            document.querySelectorAll(paraClases+colorP6).forEach(el => el.remove());

            astraAbilities(colorP6);

        } else if (option6 === "breach") {
            agent6.className = '';
            agent6.classList.add("breach");

            document.querySelectorAll(paraClases+colorP6).forEach(el => el.remove());

            breachAbilities(colorP6);

        } else if (option6 === "brimstone") {
            agent6.className = '';
            agent6.classList.add("brimstone");

            document.querySelectorAll(paraClases+colorP6).forEach(el => el.remove());

            brimstoneAbilities(colorP6);

        } else if (option6 === "cypher") {
            agent6.className = '';
            agent6.classList.add("cypher");

            document.querySelectorAll(paraClases+colorP6).forEach(el => el.remove());

            cypherAbilities(colorP6);

        } else if (option6 === "jett") {
            agent6.className = '';
            agent6.classList.add("jett");

            document.querySelectorAll(paraClases+colorP6).forEach(el => el.remove());

            jettAbilities(colorP6);

        } else if (option6 === "killjoy") {
            agent6.className = '';
            agent6.classList.add("killjoy");

            document.querySelectorAll(paraClases+colorP6).forEach(el => el.remove());

            killjoyAbilities(colorP6);

        } else if (option6 === "omen") {
            agent6.className = '';
            agent6.classList.add("omen");

            document.querySelectorAll(paraClases+colorP6).forEach(el => el.remove());

            omenAbilities(colorP6);

        } else if (option6 === "phoenix") {
            agent6.className = '';
            agent6.classList.add("phoenix");

            document.querySelectorAll(paraClases+colorP6).forEach(el => el.remove());

            phoenixAbilities(colorP6);

        } else if (option6 === "raze") {
            agent6.className = '';
            agent6.classList.add("raze");

            document.querySelectorAll(paraClases+colorP6).forEach(el => el.remove());

            razeAbilities(colorP6);

        } else if (option6 === "reyna") {
            agent6.className = '';
            agent6.classList.add("reyna");

            document.querySelectorAll(paraClases+colorP6).forEach(el => el.remove());

            reynaAbilities(colorP6);

        } else if (option6 === "sage") {
            agent6.className = '';
            agent6.classList.add("sage");

            document.querySelectorAll(paraClases+colorP6).forEach(el => el.remove());

            sageAbilities(colorP6);

        } else if (option6 === "skye") {
            agent6.className = '';
            agent6.classList.add("skye");

            document.querySelectorAll(paraClases+colorP6).forEach(el => el.remove());

            skyeAbilities(colorP6);

        } else if (option6 === "sova") {
            agent6.className = '';
            agent6.classList.add("sova");

            document.querySelectorAll(paraClases+colorP6).forEach(el => el.remove());

            sovaAbilities(colorP6);

        } else if (option6 === "viper") {
            agent6.className = '';
            agent6.classList.add("viper");

            document.querySelectorAll(paraClases+colorP6).forEach(el => el.remove());

            viperAbilities(colorP6);

        } else if (option6 === "yoru") {
            agent6.className = '';
            agent6.classList.add("yoru");

            document.querySelectorAll(paraClases+colorP6).forEach(el => el.remove());

            yoruAbilities(colorP6);
        }
    });

    let agent7 = document.querySelector("#agent7");
    let player7 = document.querySelector("#player7");
    player7.addEventListener('change', function () {
        let option7 = this.options[this.selectedIndex].value;

        if (option7 === "astra") {
            agent7.className = '';
            agent7.classList.add("astra");

            document.querySelectorAll(paraClases+colorP7).forEach(el => el.remove());

            astraAbilities(colorP7);

        } else if (option7 === "breach") {
            agent7.className = '';
            agent7.classList.add("breach");

            document.querySelectorAll(paraClases+colorP7).forEach(el => el.remove());

            breachAbilities(colorP7);

        } else if (option7 === "brimstone") {
            agent7.className = '';
            agent7.classList.add("brimstone");

            document.querySelectorAll(paraClases+colorP7).forEach(el => el.remove());

            brimstoneAbilities(colorP7);

        } else if (option7 === "cypher") {
            agent7.className = '';
            agent7.classList.add("cypher");

            document.querySelectorAll(paraClases+colorP7).forEach(el => el.remove());

            cypherAbilities(colorP7);

        } else if (option7 === "jett") {
            agent7.className = '';
            agent7.classList.add("jett");

            document.querySelectorAll(paraClases+colorP7).forEach(el => el.remove());

            jettAbilities(colorP7);

        } else if (option7 === "killjoy") {
            agent7.className = '';
            agent7.classList.add("killjoy");

            document.querySelectorAll(paraClases+colorP7).forEach(el => el.remove());

            killjoyAbilities(colorP7);

        } else if (option7 === "omen") {
            agent7.className = '';
            agent7.classList.add("omen");

            document.querySelectorAll(paraClases+colorP7).forEach(el => el.remove());

            omenAbilities(colorP7);

        } else if (option7 === "phoenix") {
            agent7.className = '';
            agent7.classList.add("phoenix");

            document.querySelectorAll(paraClases+colorP7).forEach(el => el.remove());

            phoenixAbilities(colorP7);

        } else if (option7 === "raze") {
            agent7.className = '';
            agent7.classList.add("raze");

            document.querySelectorAll(paraClases+colorP7).forEach(el => el.remove());

            razeAbilities(colorP7);

        } else if (option7 === "reyna") {
            agent7.className = '';
            agent7.classList.add("reyna");

            document.querySelectorAll(paraClases+colorP7).forEach(el => el.remove());

            reynaAbilities(colorP7);

        } else if (option7 === "sage") {
            agent7.className = '';
            agent7.classList.add("sage");

            document.querySelectorAll(paraClases+colorP7).forEach(el => el.remove());

            sageAbilities(colorP7);

        } else if (option7 === "skye") {
            agent7.className = '';
            agent7.classList.add("skye");

            document.querySelectorAll(paraClases+colorP7).forEach(el => el.remove());

            skyeAbilities(colorP7);

        } else if (option7 === "sova") {
            agent7.className = '';
            agent7.classList.add("sova");

            document.querySelectorAll(paraClases+colorP7).forEach(el => el.remove());

            sovaAbilities(colorP7);

        } else if (option7 === "viper") {
            agent7.className = '';
            agent7.classList.add("viper");

            document.querySelectorAll(paraClases+colorP7).forEach(el => el.remove());

            viperAbilities(colorP7);

        } else if (option7 === "yoru") {
            agent7.className = '';
            agent7.classList.add("yoru");

            document.querySelectorAll(paraClases+colorP7).forEach(el => el.remove());

            yoruAbilities(colorP7);
        }
    });

    let agent8 = document.querySelector("#agent8");
    let player8 = document.querySelector("#player8");
    player8.addEventListener('change', function () {
        let option8 = this.options[this.selectedIndex].value;

        if (option8 === "astra") {
            agent8.className = '';
            agent8.classList.add("astra");

            document.querySelectorAll(paraClases+colorP8).forEach(el => el.remove());

            astraAbilities(colorP8);

        } else if (option8 === "breach") {
            agent8.className = '';
            agent8.classList.add("breach");

            document.querySelectorAll(paraClases+colorP8).forEach(el => el.remove());

            breachAbilities(colorP8);

        } else if (option8 === "brimstone") {
            agent8.className = '';
            agent8.classList.add("brimstone");

            document.querySelectorAll(paraClases+colorP8).forEach(el => el.remove());

            brimstoneAbilities(colorP8);

        } else if (option8 === "cypher") {
            agent8.className = '';
            agent8.classList.add("cypher");

            document.querySelectorAll(paraClases+colorP8).forEach(el => el.remove());

            cypherAbilities(colorP8);

        } else if (option8 === "jett") {
            agent8.className = '';
            agent8.classList.add("jett");

            document.querySelectorAll(paraClases+colorP8).forEach(el => el.remove());

            jettAbilities(colorP8);

        } else if (option8 === "killjoy") {
            agent8.className = '';
            agent8.classList.add("killjoy");

            document.querySelectorAll(paraClases+colorP8).forEach(el => el.remove());

            killjoyAbilities(colorP8);

        } else if (option8 === "omen") {
            agent8.className = '';
            agent8.classList.add("omen");

            document.querySelectorAll(paraClases+colorP8).forEach(el => el.remove());

            omenAbilities(colorP8);

        } else if (option8 === "phoenix") {
            agent8.className = '';
            agent8.classList.add("phoenix");

            document.querySelectorAll(paraClases+colorP8).forEach(el => el.remove());

            phoenixAbilities(colorP8);

        } else if (option8 === "raze") {
            agent8.className = '';
            agent8.classList.add("raze");

            document.querySelectorAll(paraClases+colorP8).forEach(el => el.remove());

            razeAbilities(colorP8);

        } else if (option8 === "reyna") {
            agent8.className = '';
            agent8.classList.add("reyna");

            document.querySelectorAll(paraClases+colorP8).forEach(el => el.remove());

            reynaAbilities(colorP8);

        } else if (option8 === "sage") {
            agent8.className = '';
            agent8.classList.add("sage");

            document.querySelectorAll(paraClases+colorP8).forEach(el => el.remove());

            sageAbilities(colorP8);

        } else if (option8 === "skye") {
            agent8.className = '';
            agent8.classList.add("skye");

            document.querySelectorAll(paraClases+colorP8).forEach(el => el.remove());

            skyeAbilities(colorP8);

        } else if (option8 === "sova") {
            agent8.className = '';
            agent8.classList.add("sova");

            document.querySelectorAll(paraClases+colorP8).forEach(el => el.remove());

            sovaAbilities(colorP8);

        } else if (option8 === "viper") {
            agent8.className = '';
            agent8.classList.add("viper");

            document.querySelectorAll(paraClases+colorP8).forEach(el => el.remove());

            viperAbilities(colorP8);

        } else if (option8 === "yoru") {
            agent8.className = '';
            agent8.classList.add("yoru");

            document.querySelectorAll(paraClases+colorP8).forEach(el => el.remove());

            yoruAbilities(colorP8);
        }
    });

    let agent9 = document.querySelector("#agent9");
    let player9 = document.querySelector("#player9");
    player9.addEventListener('change', function () {
        let option9 = this.options[this.selectedIndex].value;

        if (option9 === "astra") {
            agent9.className = '';
            agent9.classList.add("astra");

            document.querySelectorAll(paraClases+colorP9).forEach(el => el.remove());

            astraAbilities(colorP9);

        } else if (option9 === "breach") {
            agent9.className = '';
            agent9.classList.add("breach");

            document.querySelectorAll(paraClases+colorP9).forEach(el => el.remove());

            breachAbilities(colorP9);

        } else if (option9 === "brimstone") {
            agent9.className = '';
            agent9.classList.add("brimstone");

            document.querySelectorAll(paraClases+colorP9).forEach(el => el.remove());

            brimstoneAbilities(colorP9);

        } else if (option9 === "cypher") {
            agent9.className = '';
            agent9.classList.add("cypher");

            document.querySelectorAll(paraClases+colorP9).forEach(el => el.remove());

            cypherAbilities(colorP9);

        } else if (option9 === "jett") {
            agent9.className = '';
            agent9.classList.add("jett");

            document.querySelectorAll(paraClases+colorP9).forEach(el => el.remove());

            jettAbilities(colorP9);

        } else if (option9 === "killjoy") {
            agent9.className = '';
            agent9.classList.add("killjoy");

            document.querySelectorAll(paraClases+colorP9).forEach(el => el.remove());

            killjoyAbilities(colorP9);

        } else if (option9 === "omen") {
            agent9.className = '';
            agent9.classList.add("omen");

            document.querySelectorAll(paraClases+colorP9).forEach(el => el.remove());

            omenAbilities(colorP9);

        } else if (option9 === "phoenix") {
            agent9.className = '';
            agent9.classList.add("phoenix");

            document.querySelectorAll(paraClases+colorP9).forEach(el => el.remove());

            phoenixAbilities(colorP9);

        } else if (option9 === "raze") {
            agent9.className = '';
            agent9.classList.add("raze");

            document.querySelectorAll(paraClases+colorP9).forEach(el => el.remove());

            razeAbilities(colorP9);

        } else if (option9 === "reyna") {
            agent9.className = '';
            agent9.classList.add("reyna");

            document.querySelectorAll(paraClases+colorP9).forEach(el => el.remove());

            reynaAbilities(colorP9);

        } else if (option9 === "sage") {
            agent9.className = '';
            agent9.classList.add("sage");

            document.querySelectorAll(paraClases+colorP9).forEach(el => el.remove());

            sageAbilities(colorP9);

        } else if (option9 === "skye") {
            agent9.className = '';
            agent9.classList.add("skye");

            document.querySelectorAll(paraClases+colorP9).forEach(el => el.remove());

            skyeAbilities(colorP9);

        } else if (option9 === "sova") {
            agent9.className = '';
            agent9.classList.add("sova");

            document.querySelectorAll(paraClases+colorP9).forEach(el => el.remove());

            sovaAbilities(colorP9);

        } else if (option9 === "viper") {
            agent9.className = '';
            agent9.classList.add("viper");

            document.querySelectorAll(paraClases+colorP9).forEach(el => el.remove());

            viperAbilities(colorP9);

        } else if (option9 === "yoru") {
            agent9.className = '';
            agent9.classList.add("yoru");

            document.querySelectorAll(paraClases+colorP9).forEach(el => el.remove());

            yoruAbilities(colorP9);
        }
    });

    let agent10 = document.querySelector("#agent10");
    let player10 = document.querySelector("#player10");
    player10.addEventListener('change', function () {
        let option10 = this.options[this.selectedIndex].value;

        if (option10 === "astra") {
            agent10.className = '';
            agent10.classList.add("astra");

            document.querySelectorAll(paraClases+colorP10).forEach(el => el.remove());

            astraAbilities(colorP10);

        } else if (option10 === "breach") {
            agent10.className = '';
            agent10.classList.add("breach");

            document.querySelectorAll(paraClases+colorP10).forEach(el => el.remove());

            breachAbilities(colorP10);

        } else if (option10 === "brimstone") {
            agent10.className = '';
            agent10.classList.add("brimstone");

            document.querySelectorAll(paraClases+colorP10).forEach(el => el.remove());

            brimstoneAbilities(colorP10);

        } else if (option10 === "cypher") {
            agent10.className = '';
            agent10.classList.add("cypher");

            document.querySelectorAll(paraClases+colorP10).forEach(el => el.remove());

            cypherAbilities(colorP10);

        } else if (option10 === "jett") {
            agent10.className = '';
            agent10.classList.add("jett");

            document.querySelectorAll(paraClases+colorP10).forEach(el => el.remove());

            jettAbilities(colorP10);

        } else if (option10 === "killjoy") {
            agent10.className = '';
            agent10.classList.add("killjoy");

            document.querySelectorAll(paraClases+colorP10).forEach(el => el.remove());

            killjoyAbilities(colorP10);

        } else if (option10 === "omen") {
            agent10.className = '';
            agent10.classList.add("omen");

            document.querySelectorAll(paraClases+colorP10).forEach(el => el.remove());

            omenAbilities(colorP10);

        } else if (option10 === "phoenix") {
            agent10.className = '';
            agent10.classList.add("phoenix");

            document.querySelectorAll(paraClases+colorP10).forEach(el => el.remove());

            phoenixAbilities(colorP10);

        } else if (option10 === "raze") {
            agent10.className = '';
            agent10.classList.add("raze");

            document.querySelectorAll(paraClases+colorP10).forEach(el => el.remove());

            razeAbilities(colorP10);

        } else if (option10 === "reyna") {
            agent10.className = '';
            agent10.classList.add("reyna");

            document.querySelectorAll(paraClases+colorP10).forEach(el => el.remove());

            reynaAbilities(colorP10);

        } else if (option10 === "sage") {
            agent10.className = '';
            agent10.classList.add("sage");

            document.querySelectorAll(paraClases+colorP10).forEach(el => el.remove());

            sageAbilities(colorP10);

        } else if (option10 === "skye") {
            agent10.className = '';
            agent10.classList.add("skye");

            document.querySelectorAll(paraClases+colorP10).forEach(el => el.remove());

            skyeAbilities(colorP10);

        } else if (option10 === "sova") {
            agent10.className = '';
            agent10.classList.add("sova");

            document.querySelectorAll(paraClases+colorP10).forEach(el => el.remove());

            sovaAbilities(colorP10);

        } else if (option10 === "viper") {
            agent10.className = '';
            agent10.classList.add("viper");

            document.querySelectorAll(paraClases+colorP10).forEach(el => el.remove());

            viperAbilities(colorP10);

        } else if (option10 === "yoru") {
            agent10.className = '';
            agent10.classList.add("yoru");

            document.querySelectorAll(paraClases+colorP10).forEach(el => el.remove());

            yoruAbilities(colorP10);
        }
    });
}





