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
    let concussion = document.querySelector(".concussion");
    let revive = document.querySelector(".revive");
    let decoy = document.querySelector(".decoy");
    let vulnerable = document.querySelector(".vulnerable");
    let suppression = document.querySelector(".suppression");
    let detain = document.querySelector(".detain");

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
    let concussionE = document.querySelector(".concussionE");
    let reviveE = document.querySelector(".reviveE");
    let decoyE = document.querySelector(".decoyE");
    let vulnerableE = document.querySelector(".vulnerableE");
    let suppressionE = document.querySelector(".suppressionE");
    let detainE = document.querySelector(".detainE");

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

    // Probando Clases
    class Agent {
        constructor(name, variable, clase, color, q, e, c, x) {
            this.name = name;
            this.variable = variable;
            this.clase = clase;
            this.color = color;
            this.q = q;
            this.e = e;
            this.c = c;
            this.x = x;
        }

        ability(player){
            
        }
    }

    class Astra extends Agent {
        
        ability(player) {
            if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
                addPoint(smoke, player);
                addPoint(smoke, player);
                addPoint(vulnerable, player);
                addPoint(obstacle, player);
                addPoint(slow, player);
                addPoint(daze, player);
            } else {
                addPoint(smokeE, player);
                addPoint(smokeE, player);
                addPoint(vulnerableE, player);
                addPoint(obstacleE, player);
                addPoint(slowE, player);
                addPoint(dazeE, player);
            }
        }

    }

    let astra = new Astra("Astra", "astra", "Controller", "#5A2EBD", "clases de habilidades", "clases de habilidades", "clases de habilidades", "clases de habilidades")

     //Agent's Abilities   
    function astraAbilities(player) {
        if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
            addPoint(smoke, player);
            addPoint(smoke, player);
            addPoint(vulnerable, player);
            addPoint(obstacle, player);
            addPoint(slow, player);
            addPoint(daze, player);
        } else {
            addPoint(smokeE, player);
            addPoint(smokeE, player);
            addPoint(vulnerableE, player);
            addPoint(obstacleE, player);
            addPoint(slowE, player);
            addPoint(dazeE, player);
        }

    }
    function breachAbilities(player) {
        if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
            addPoint(flash, player);
            addPoint(flash, player);
            addPoint(daze, player);
            addPoint(daze, player);
            addPoint(dmgExpl, player);

        } else {
            addPoint(flashE, player);
            addPoint(flashE, player);
            addPoint(dazeE, player);
            addPoint(dazeE, player);
            addPoint(dmgExplE, player);

        }

    }
    function brimstoneAbilities(player) {
        if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
            addPoint(smoke, player);
            addPoint(smoke, player);
            addPoint(smoke, player);
            addPoint(dmgExpl, player);
            addPoint(dmgArea, player);
            addPoint(rapidFire, player);
            addPoint(rapidFire, player);

        } else {
            addPoint(smokeE, player);
            addPoint(smokeE, player);
            addPoint(smokeE, player);
            addPoint(dmgExplE, player);
            addPoint(dmgAreaE, player);
            addPoint(rapidFireE, player);
            addPoint(rapidFireE, player);

        }

    }
    function cypherAbilities(player) {
        if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
            addPoint(smoke, player);
            addPoint(obstacle, player);
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

        } else {
            addPoint(smokeE, player);
            addPoint(dmgExplE, player);
            addPoint(dmgExplE, player);
            addPoint(movabilityE, player);
            addPoint(movabilityE, player);
            addPoint(movabilityE, player);

        }

    }
    function kayoAbilities(player) {
        if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
            addPoint(flash, player);
            addPoint(flash, player);
            addPoint(dmgArea, player);
            addPoint(suppression, player);
            addPoint(suppression, player);
            addPoint(track, player);
            addPoint(revive, player);
            addPoint(rapidFire, player);
        } else {
            addPoint(flashE, player);
            addPoint(flashE, player);
            addPoint(dmgAreaE, player);
            addPoint(suppressionE, player);
            addPoint(suppressionE, player);
            addPoint(trackE, player);
            addPoint(reviveE, player);
            addPoint(rapidFireE, player);
        }

    }
    function killjoyAbilities(player) {
        if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
            addPoint(vulnerable, player);
            addPoint(obstacle, player);
            addPoint(obstacle, player);
            addPoint(slow, player);
            addPoint(track, player);
            addPoint(track, player);
            addPoint(track, player);
            addPoint(dmgExpl, player);
            addPoint(dmgArea, player);
            addPoint(dmgArea, player);
            addPoint(detain, player);

        } else {
            addPoint(vulnerableE, player);
            addPoint(obstacleE, player);
            addPoint(obstacleE, player);
            addPoint(slowE, player);
            addPoint(trackE, player);
            addPoint(trackE, player);
            addPoint(trackE, player);
            addPoint(dmgExplE, player);
            addPoint(dmgAreaE, player);
            addPoint(dmgAreaE, player);
            addPoint(detainE, player);

        }

    }
    function omenAbilities(player) {
        if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
            addPoint(smoke, player);
            addPoint(smoke, player);
            addPoint(blind, player);
            addPoint(track, player);
            addPoint(teleport, player);
            addPoint(movability, player);
            addPoint(movability, player);

        } else {
            addPoint(smokeE, player);
            addPoint(smokeE, player);
            addPoint(blindE, player);
            addPoint(trackE, player);
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
            addPoint(revive, player);
            addPoint(dmgExpl, player);
            addPoint(dmgArea, player);
            addPoint(movability, player);

        } else {
            addPoint(screenE, player);
            addPoint(flashE, player);
            addPoint(flashE, player);
            addPoint(healSelfE, player);
            addPoint(healSelfE, player);
            addPoint(healSelfE, player);
            addPoint(reviveE, player);
            addPoint(dmgExplE, player);
            addPoint(dmgAreaE, player);
            addPoint(movabilityE, player);

        }

    }
    function razeAbilities(player) {
        if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
            addPoint(dmgExpl, player);
            addPoint(dmgExpl, player);
            addPoint(dmgExpl, player);
            addPoint(dmgExpl, player);
            addPoint(track, player);
            addPoint(movability, player);
            addPoint(movability, player);

        } else {
            addPoint(dmgExplE, player);
            addPoint(dmgExplE, player);
            addPoint(dmgExplE, player);
            addPoint(dmgExplE, player);
            addPoint(track, player);
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
            addPoint(rapidFire, player);
            addPoint(movability, player);
            addPoint(movability, player);

        } else {
            addPoint(blindE, player);
            addPoint(blindE, player);
            addPoint(healSelfE, player);
            addPoint(healSelfE, player);
            addPoint(rapidFireE, player);
            addPoint(movabilityE, player);
            addPoint(movabilityE, player);

        }

    }
    function sageAbilities(player) {
        if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
            addPoint(obstacle, player);
            addPoint(slow, player);
            addPoint(slow, player);
            addPoint(heal, player);
            addPoint(revive, player);
            addPoint(healSelf, player);

        } else {
            addPoint(obstacleE, player);
            addPoint(slowE, player);
            addPoint(slowE, player);
            addPoint(healE, player);
            addPoint(reviveE, player);
            addPoint(healSelfE, player);

        }

    }
    function skyeAbilities(player) {
        if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
            addPoint(flash, player);
            addPoint(flash, player);
            addPoint(blind, player);
            addPoint(heal, player);
            addPoint(concussion, player);
            addPoint(track, player);
            addPoint(track, player);
            addPoint(track, player);

        } else {
            addPoint(flashE, player);
            addPoint(flashE, player);
            addPoint(blindE, player);
            addPoint(healE, player);
            addPoint(concussionE, player);
            addPoint(trackE, player);
            addPoint(trackE, player);
            addPoint(trackE, player);

        }

    }
    function sovaAbilities(player) {
        if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
            addPoint(track, player);
            addPoint(track, player);
            addPoint(reveal, player);
            addPoint(reveal, player);
            addPoint(reveal, player);
            addPoint(dmgExpl, player);
            addPoint(dmgExpl, player);
            addPoint(dmgExpl, player);

        } else {
            addPoint(trackE, player);
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
            addPoint(screen, player);
            addPoint(slow, player);
            addPoint(obstacle, player);
            addPoint(dmgExpl, player);
            addPoint(dmgExpl, player);
            addPoint(dmgArea, player);
            addPoint(dmgArea, player);

        } else {
            addPoint(smokeE, player);
            addPoint(smokeE, player);
            addPoint(screenE, player);
            addPoint(slowE, player);
            addPoint(obstacleE, player);
            addPoint(dmgExplE, player);
            addPoint(dmgExplE, player);
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
            addPoint(decoy, player);
            addPoint(decoy, player);
            addPoint(decoy, player);

        } else {
            addPoint(flashE, player);
            addPoint(flashE, player);
            addPoint(trackE, player);
            addPoint(trackE, player);
            addPoint(teleportE, player);
            addPoint(teleportE, player);
            addPoint(movabilityE, player);
            addPoint(movabilityE, player);
            addPoint(decoyE, player);
            addPoint(decoyE, player);
            addPoint(decoyE, player);

        }

    }
    function agentSelection(option, agent, player){
        if (option === "astra") {
            agent.className = '';
            agent.classList.add("astra");

            document.querySelectorAll(paraClases + player).forEach(el => el.remove());

            astra.ability(player);

        } else if (option === "breach") {
            agent.className = '';
            agent.classList.add("breach");

            document.querySelectorAll(paraClases + player).forEach(el => el.remove());

            breachAbilities(player);

        } else if (option === "brimstone") {
            agent.className = '';
            agent.classList.add("brimstone");

            document.querySelectorAll(paraClases + player).forEach(el => el.remove());

            brimstoneAbilities(player);

        } else if (option === "cypher") {
            agent.className = '';
            agent.classList.add("cypher");

            document.querySelectorAll(paraClases + player).forEach(el => el.remove());

            cypherAbilities(player);

        } else if (option === "jett") {
            agent.className = '';
            agent.classList.add("jett");

            document.querySelectorAll(paraClases + player).forEach(el => el.remove());

            jettAbilities(player);

        } else if (option === "kayo") {
            agent.className = '';
            agent.classList.add("kayo");

            document.querySelectorAll(paraClases + colorP2).forEach(el => el.remove());

            kayoAbilities(colorP2);

        } else if (option === "killjoy") {
            agent.className = '';
            agent.classList.add("killjoy");

            document.querySelectorAll(paraClases + player).forEach(el => el.remove());

            killjoyAbilities(player);

        } else if (option === "omen") {
            agent.className = '';
            agent.classList.add("omen");

            document.querySelectorAll(paraClases + player).forEach(el => el.remove());

            omenAbilities(player);

        } else if (option === "phoenix") {
            agent.className = '';
            agent.classList.add("phoenix");

            document.querySelectorAll(paraClases + player).forEach(el => el.remove());

            phoenixAbilities(player);

        } else if (option === "raze") {
            agent.className = '';
            agent.classList.add("raze");

            document.querySelectorAll(paraClases + player).forEach(el => el.remove());

            razeAbilities(player);

        } else if (option === "reyna") {
            agent.className = '';
            agent.classList.add("reyna");

            document.querySelectorAll(paraClases + player).forEach(el => el.remove());

            reynaAbilities(player);

        } else if (option === "sage") {
            agent.className = '';
            agent.classList.add("sage");

            document.querySelectorAll(paraClases + player).forEach(el => el.remove());

            sageAbilities(player);

        } else if (option === "skye") {
            agent.className = '';
            agent.classList.add("skye");

            document.querySelectorAll(paraClases + player).forEach(el => el.remove());

            skyeAbilities(player);

        } else if (option === "sova") {
            agent.className = '';
            agent.classList.add("sova");

            document.querySelectorAll(paraClases + player).forEach(el => el.remove());

            sovaAbilities(player);

        } else if (option === "viper") {
            agent.className = '';
            agent.classList.add("viper");

            document.querySelectorAll(paraClases + player).forEach(el => el.remove());

            viperAbilities(player);

        } else if (option === "yoru") {
            agent.className = '';
            agent.classList.add("yoru");

            document.querySelectorAll(paraClases + player).forEach(el => el.remove());

            yoruAbilities(player);
        } else {
            agent.className = '';
            document.querySelectorAll(paraClases + player).forEach(el => el.remove());
        }

    }

    //Player selects an Agent, adds certain points to abilities
    let agent1 = document.querySelector("#agent1");
    let player1 = document.querySelector("#player1");
    let paraClases = ".";
    player1.addEventListener('change', function () {
        let option1 = this.options[this.selectedIndex].value;

        agentSelection(option1, agent1, colorP1);
    });

    let agent2 = document.querySelector("#agent2");
    let player2 = document.querySelector("#player2");
    player2.addEventListener('change', function () {
        let option2 = this.options[this.selectedIndex].value;

        agentSelection(option2, agent2, colorP2);

    });

    let agent3 = document.querySelector("#agent3");
    let player3 = document.querySelector("#player3");
    player3.addEventListener('change', function () {
        let option3 = this.options[this.selectedIndex].value;

        agentSelection(option3, agent3, colorP3);

    });

    let agent4 = document.querySelector("#agent4");
    let player4 = document.querySelector("#player4");
    player4.addEventListener('change', function () {
        let option4 = this.options[this.selectedIndex].value;

        agentSelection(option4, agent4, colorP4);
    });

    let agent5 = document.querySelector("#agent5");
    let player5 = document.querySelector("#player5");
    player5.addEventListener('change', function () {
        let option5 = this.options[this.selectedIndex].value;

        agentSelection(option5, agent5, colorP5);
    });

    let agent6 = document.querySelector("#agent6");
    let player6 = document.querySelector("#player6");
    player6.addEventListener('change', function () {
        let option6 = this.options[this.selectedIndex].value;

        agentSelection(option6, agent6, colorP6);
    });

    let agent7 = document.querySelector("#agent7");
    let player7 = document.querySelector("#player7");
    player7.addEventListener('change', function () {
        let option7 = this.options[this.selectedIndex].value;

        agentSelection(option7, agent7, colorP7);
    });

    let agent8 = document.querySelector("#agent8");
    let player8 = document.querySelector("#player8");
    player8.addEventListener('change', function () {
        let option8 = this.options[this.selectedIndex].value;

        agentSelection(option8, agent8, colorP8);
    });

    let agent9 = document.querySelector("#agent9");
    let player9 = document.querySelector("#player9");
    player9.addEventListener('change', function () {
        let option9 = this.options[this.selectedIndex].value;

        agentSelection(option9, agent9, colorP9);
    });

    let agent10 = document.querySelector("#agent10");
    let player10 = document.querySelector("#player10");
    player10.addEventListener('change', function () {
        let option10 = this.options[this.selectedIndex].value;

        agentSelection(option10, agent10, colorP10);
    });
}
