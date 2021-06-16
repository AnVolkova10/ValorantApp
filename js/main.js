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

    // Adding Points
    function addPointP1 (ability) {
        let point = document.createElement("div");
        ability.appendChild(point);
        point.style.backgroundColor = "blue";
        point.className = "blue";
    }
    function addPointP2 (ability) {
        let point = document.createElement("div");
        ability.appendChild(point);
        point.style.backgroundColor = "red";
        point.className = "red";
    }
    function addPointP3 (ability) {
        let point = document.createElement("div");
        ability.appendChild(point);
        point.style.backgroundColor = "green";
        point.className = "green";
    }
    function addPointP4 (ability) {
        let point = document.createElement("div");
        ability.appendChild(point);
        point.style.backgroundColor = "yellow";
        point.className = "yellow";
    }
    function addPointP5 (ability) {
        let point = document.createElement("div");
        ability.appendChild(point);
        point.style.backgroundColor = "pink";
        point.className = "pink";
    }
    function addPointP6 (ability) {
        let point = document.createElement("div");
        ability.appendChild(point);
        point.style.backgroundColor = "lightblue";
        point.className = "lightblue";
    }
    function addPointP7 (ability) {
        let point = document.createElement("div");
        ability.appendChild(point);
        point.style.backgroundColor = "lightcoral";
        point.className = "lightcoral";
    }
    function addPointP8 (ability) {
        let point = document.createElement("div");
        ability.appendChild(point);
        point.style.backgroundColor = "lightgreen";
        point.className = "lightgreen";
    }
    function addPointP9 (ability) {
        let point = document.createElement("div");
        ability.appendChild(point);
        point.style.backgroundColor = "khaki";
        point.className = "khaki";
    }
    function addPointP10 (ability) {
        let point = document.createElement("div");
        ability.appendChild(point);
        point.style.backgroundColor = "lightpink";
        point.className = "lightpink";
    }

    //Player pick an Agent, adds certain points to abilities
    let agent1 = document.querySelector("#agent1");
    let player1 = document.querySelector("#player1");
    player1.addEventListener('change', function() {
        let option1 = this.options[this.selectedIndex].value;
        
        if (option1 === "astra") {
            agent1.className = '';
            agent1.classList.add("astra");

            document.querySelectorAll(".blue").forEach(el => el.remove());

            addPointP1(smoke);
            addPointP1(smoke);
            addPointP1(smoke);
            addPointP1(smoke);
            addPointP1(smoke);
            addPointP1(obstacle);
            addPointP1(daze);
            addPointP1(dmgExpl);
               
        } else if (option1 === "breach") {
            agent1.className = '';
            agent1.classList.add("breach");

            document.querySelectorAll(".blue").forEach(el => el.remove());

            addPointP1(flash);
            addPointP1(flash);
            addPointP1(flash);
            addPointP1(daze);
            addPointP1(daze);
            addPointP1(daze);
            addPointP1(daze);
            addPointP1(dmgExpl);
            addPointP1(dmgExpl);
            
        }else if (option1 === "brimstone") {
            agent1.className = '';
            agent1.classList.add("brimstone");
            
            document.querySelectorAll(".blue").forEach(el => el.remove());

            addPointP1(smoke);
            addPointP1(smoke);
            addPointP1(smoke);
            addPointP1(dmgExpl);
            addPointP1(dmgExpl);
            addPointP1(dmgExpl);
            addPointP1(dmgArea);
            addPointP1(dmgArea);
            addPointP1(dmgArea);
            addPointP1(rapidFire);
            addPointP1(rapidFire);
            
        }else if (option1 === "cypher") {
            agent1.className = '';
            agent1.classList.add("cypher");

            document.querySelectorAll(".blue").forEach(el => el.remove());

            addPointP1(smoke);
            addPointP1(obstacle);
            addPointP1(obstacle);
            addPointP1(obstacle);
            addPointP1(slow);
            addPointP1(slow);
            addPointP1(daze);
            addPointP1(track);
            addPointP1(track);
            addPointP1(reveal);
            addPointP1(reveal);
            addPointP1(reveal);

        }else if (option1 === "jett") {
            agent1.className = '';
            agent1.classList.add("jett");

            document.querySelectorAll(".blue").forEach(el => el.remove());

            addPointP1(smoke);
            addPointP1(dmgExpl);
            addPointP1(dmgExpl);
            addPointP1(movability);
            addPointP1(movability);
            addPointP1(movability);
            addPointP1(movability);

        }else if (option1 === "killjoy") {
            agent1.className = '';
            agent1.classList.add("killjoy");

            document.querySelectorAll(".blue").forEach(el => el.remove());

            addPointP1(obstacle);
            addPointP1(obstacle);
            addPointP1(obstacle);
            addPointP1(slow);
            addPointP1(track);
            addPointP1(track);
            addPointP1(dmgExpl);
            addPointP1(dmgArea);
            addPointP1(dmgArea);
            addPointP1(dmgArea);
            addPointP1(dmgArea);

        }else if (option1 === "omen") {
            agent1.className = '';
            agent1.classList.add("omen");

            document.querySelectorAll(".blue").forEach(el => el.remove());

            addPointP1(smoke);
            addPointP1(smoke);
            addPointP1(blind);
            addPointP1(track);
            addPointP1(teleport);
            addPointP1(teleport);
            addPointP1(movability);
            addPointP1(movability);

        }else if (option1 === "phoenix") {
            agent1.className = '';
            agent1.classList.add("phoenix");

            document.querySelectorAll(".blue").forEach(el => el.remove());

            addPointP1(screen);
            addPointP1(flash);
            addPointP1(flash);
            addPointP1(healSelf);
            addPointP1(healSelf);
            addPointP1(healSelf);
            addPointP1(dmgArea);
            addPointP1(dmgArea);
            addPointP1(dmgArea);
            addPointP1(movability);

        }else if (option1 === "raze") {
            agent1.className = '';
            agent1.classList.add("raze");

            document.querySelectorAll(".blue").forEach(el => el.remove());

            addPointP1(obstacle);
            addPointP1(dmgExpl);
            addPointP1(dmgExpl);
            addPointP1(dmgExpl);
            addPointP1(dmgExpl);
            addPointP1(movability);
            addPointP1(movability);
            
        }else if (option1 === "reyna") {
            agent1.className = '';
            agent1.classList.add("reyna");

            document.querySelectorAll(".blue").forEach(el => el.remove());

            addPointP1(blind);
            addPointP1(blind);
            addPointP1(healSelf);
            addPointP1(healSelf);
            addPointP1(healSelf);
            addPointP1(rapidFire);
            addPointP1(rapidFire);
            addPointP1(movability);

        }else if (option1 === "sage") {
            agent1.className = '';
            agent1.classList.add("sage");

            document.querySelectorAll(".blue").forEach(el => el.remove());

            addPointP1(obstacle);
            addPointP1(obstacle);
            addPointP1(obstacle);
            addPointP1(slow);
            addPointP1(slow);
            addPointP1(heal);
            addPointP1(heal);
            addPointP1(healSelf);

        }else if (option1 === "skye") {
            agent1.className = '';
            agent1.classList.add("skye");

            document.querySelectorAll(".blue").forEach(el => el.remove());

            addPointP1(flash);
            addPointP1(flash);
            addPointP1(flash);
            addPointP1(blind);
            addPointP1(blind);
            addPointP1(blind);
            addPointP1(heal);
            addPointP1(heal);
            addPointP1(daze);
            addPointP1(track);
            addPointP1(track);
            addPointP1(track);

        }else if (option1 === "sova") {
            agent1.className = '';
            agent1.classList.add("sova");

            document.querySelectorAll(".blue").forEach(el => el.remove());

            addPointP1(track);
            addPointP1(reveal);
            addPointP1(reveal);
            addPointP1(reveal);
            addPointP1(dmgExpl);
            addPointP1(dmgExpl);
            addPointP1(dmgExpl);

        }else if (option1 === "viper") {
            agent1.className = '';
            agent1.classList.add("viper");

            document.querySelectorAll(".blue").forEach(el => el.remove());

            addPointP1(smoke);
            addPointP1(smoke);
            addPointP1(smoke);
            addPointP1(screen);
            addPointP1(obstacle);
            addPointP1(dmgExpl);
            addPointP1(dmgArea);
            addPointP1(dmgArea);
            addPointP1(dmgArea);

        }else if (option1 === "yoru") {
            agent1.className = '';
            agent1.classList.add("yoru");

            document.querySelectorAll(".blue").forEach(el => el.remove());

            addPointP1(flash);
            addPointP1(flash);
            addPointP1(track);
            addPointP1(track);
            addPointP1(teleport);
            addPointP1(teleport);
            addPointP1(movability);
            addPointP1(movability);
        }

        console.log(option1);


        
    });
    
    let agent2 = document.querySelector("#agent2");
    let player2 = document.querySelector("#player2");
    player2.addEventListener('change', function() {
        let option2 = this.options[this.selectedIndex].value;
        
        if (option2 === "astra") {
            agent2.className = '';
            agent2.classList.add("astra");

            document.querySelectorAll(".red").forEach(el => el.remove());

            addPointP2(smoke);
            addPointP2(smoke);
            addPointP2(smoke);
            addPointP2(smoke);
            addPointP2(smoke);
            addPointP2(obstacle);
            addPointP2(daze);
            addPointP2(dmgExpl);
               
        } else if (option2 === "breach") {
            agent2.className = '';
            agent2.classList.add("breach");

            document.querySelectorAll(".red").forEach(el => el.remove());

            addPointP2(flash);
            addPointP2(flash);
            addPointP2(flash);
            addPointP2(daze);
            addPointP2(daze);
            addPointP2(daze);
            addPointP2(daze);
            addPointP2(dmgExpl);
            addPointP2(dmgExpl);
            
        }else if (option2 === "brimstone") {
            agent2.className = '';
            agent2.classList.add("brimstone");
            
            document.querySelectorAll(".red").forEach(el => el.remove());

            addPointP2(smoke);
            addPointP2(smoke);
            addPointP2(smoke);
            addPointP2(dmgExpl);
            addPointP2(dmgExpl);
            addPointP2(dmgExpl);
            addPointP2(dmgArea);
            addPointP2(dmgArea);
            addPointP2(dmgArea);
            addPointP2(rapidFire);
            addPointP2(rapidFire);
            
        }else if (option2 === "cypher") {
            agent2.className = '';
            agent2.classList.add("cypher");

            document.querySelectorAll(".red").forEach(el => el.remove());

            addPointP2(smoke);
            addPointP2(obstacle);
            addPointP2(obstacle);
            addPointP2(obstacle);
            addPointP2(slow);
            addPointP2(slow);
            addPointP2(daze);
            addPointP2(track);
            addPointP2(track);
            addPointP2(reveal);
            addPointP2(reveal);
            addPointP2(reveal);

        }else if (option2 === "jett") {
            agent2.className = '';
            agent2.classList.add("jett");

            document.querySelectorAll(".red").forEach(el => el.remove());

            addPointP2(smoke);
            addPointP2(dmgExpl);
            addPointP2(dmgExpl);
            addPointP2(movability);
            addPointP2(movability);
            addPointP2(movability);
            addPointP2(movability);

        }else if (option2 === "killjoy") {
            agent2.className = '';
            agent2.classList.add("killjoy");

            document.querySelectorAll(".red").forEach(el => el.remove());

            addPointP2(obstacle);
            addPointP2(obstacle);
            addPointP2(obstacle);
            addPointP2(slow);
            addPointP2(track);
            addPointP2(track);
            addPointP2(dmgExpl);
            addPointP2(dmgArea);
            addPointP2(dmgArea);
            addPointP2(dmgArea);
            addPointP2(dmgArea);

        }else if (option2 === "omen") {
            agent2.className = '';
            agent2.classList.add("omen");

            document.querySelectorAll(".red").forEach(el => el.remove());

            addPointP2(smoke);
            addPointP2(smoke);
            addPointP2(blind);
            addPointP2(track);
            addPointP2(teleport);
            addPointP2(teleport);
            addPointP2(movability);
            addPointP2(movability);

        }else if (option2 === "phoenix") {
            agent2.className = '';
            agent2.classList.add("phoenix");

            document.querySelectorAll(".red").forEach(el => el.remove());

            addPointP2(screen);
            addPointP2(flash);
            addPointP2(flash);
            addPointP2(healSelf);
            addPointP2(healSelf);
            addPointP2(healSelf);
            addPointP2(dmgArea);
            addPointP2(dmgArea);
            addPointP2(dmgArea);
            addPointP2(movability);

        }else if (option2 === "raze") {
            agent2.className = '';
            agent2.classList.add("raze");

            document.querySelectorAll(".red").forEach(el => el.remove());

            addPointP2(obstacle);
            addPointP2(dmgExpl);
            addPointP2(dmgExpl);
            addPointP2(dmgExpl);
            addPointP2(dmgExpl);
            addPointP2(movability);
            addPointP2(movability);
            
        }else if (option2 === "reyna") {
            agent2.className = '';
            agent2.classList.add("reyna");

            document.querySelectorAll(".red").forEach(el => el.remove());

            addPointP2(blind);
            addPointP2(blind);
            addPointP2(healSelf);
            addPointP2(healSelf);
            addPointP2(healSelf);
            addPointP2(rapidFire);
            addPointP2(rapidFire);
            addPointP2(movability);

        }else if (option2 === "sage") {
            agent2.className = '';
            agent2.classList.add("sage");

            document.querySelectorAll(".red").forEach(el => el.remove());

            addPointP2(obstacle);
            addPointP2(obstacle);
            addPointP2(obstacle);
            addPointP2(slow);
            addPointP2(slow);
            addPointP2(heal);
            addPointP2(heal);
            addPointP2(healSelf);

        }else if (option2 === "skye") {
            agent2.className = '';
            agent2.classList.add("skye");

            document.querySelectorAll(".red").forEach(el => el.remove());

            addPointP2(flash);
            addPointP2(flash);
            addPointP2(flash);
            addPointP2(blind);
            addPointP2(blind);
            addPointP2(blind);
            addPointP2(heal);
            addPointP2(heal);
            addPointP2(daze);
            addPointP2(track);
            addPointP2(track);
            addPointP2(track);

        }else if (option2 === "sova") {
            agent2.className = '';
            agent2.classList.add("sova");

            document.querySelectorAll(".red").forEach(el => el.remove());

            addPointP2(track);
            addPointP2(reveal);
            addPointP2(reveal);
            addPointP2(reveal);
            addPointP2(dmgExpl);
            addPointP2(dmgExpl);
            addPointP2(dmgExpl);

        }else if (option2 === "viper") {
            agent2.className = '';
            agent2.classList.add("viper");

            document.querySelectorAll(".red").forEach(el => el.remove());

            addPointP2(smoke);
            addPointP2(smoke);
            addPointP2(smoke);
            addPointP2(screen);
            addPointP2(obstacle);
            addPointP2(dmgExpl);
            addPointP2(dmgArea);
            addPointP2(dmgArea);
            addPointP2(dmgArea);

        }else if (option2 === "yoru") {
            agent2.className = '';
            agent2.classList.add("yoru");

            document.querySelectorAll(".red").forEach(el => el.remove());

            addPointP2(flash);
            addPointP2(flash);
            addPointP2(track);
            addPointP2(track);
            addPointP2(teleport);
            addPointP2(teleport);
            addPointP2(movability);
            addPointP2(movability);
        }

        console.log(option2);
    });
 
    let agent3 = document.querySelector("#agent3");
    let player3 = document.querySelector("#player3");
    player3.addEventListener('change', function() {
        let option3 = this.options[this.selectedIndex].value;
        
        if (option3 === "astra") {
            agent3.className = '';
            agent3.classList.add("astra");

            document.querySelectorAll(".green").forEach(el => el.remove());

            addPointP3(smoke);
            addPointP3(smoke);
            addPointP3(smoke);
            addPointP3(smoke);
            addPointP3(smoke);
            addPointP3(obstacle);
            addPointP3(daze);
            addPointP3(dmgExpl);
               
        } else if (option3 === "breach") {
            agent3.className = '';
            agent3.classList.add("breach");

            document.querySelectorAll(".green").forEach(el => el.remove());

            addPointP3(flash);
            addPointP3(flash);
            addPointP3(flash);
            addPointP3(daze);
            addPointP3(daze);
            addPointP3(daze);
            addPointP3(daze);
            addPointP3(dmgExpl);
            addPointP3(dmgExpl);
            
        }else if (option3 === "brimstone") {
            agent3.className = '';
            agent3.classList.add("brimstone");
            
            document.querySelectorAll(".green").forEach(el => el.remove());

            addPointP3(smoke);
            addPointP3(smoke);
            addPointP3(smoke);
            addPointP3(dmgExpl);
            addPointP3(dmgExpl);
            addPointP3(dmgExpl);
            addPointP3(dmgArea);
            addPointP3(dmgArea);
            addPointP3(dmgArea);
            addPointP3(rapidFire);
            addPointP3(rapidFire);
            
        }else if (option3 === "cypher") {
            agent3.className = '';
            agent3.classList.add("cypher");

            document.querySelectorAll(".green").forEach(el => el.remove());

            addPointP3(smoke);
            addPointP3(obstacle);
            addPointP3(obstacle);
            addPointP3(obstacle);
            addPointP3(slow);
            addPointP3(slow);
            addPointP3(daze);
            addPointP3(track);
            addPointP3(track);
            addPointP3(reveal);
            addPointP3(reveal);
            addPointP3(reveal);

        }else if (option3 === "jett") {
            agent3.className = '';
            agent3.classList.add("jett");

            document.querySelectorAll(".green").forEach(el => el.remove());

            addPointP3(smoke);
            addPointP3(dmgExpl);
            addPointP3(dmgExpl);
            addPointP3(movability);
            addPointP3(movability);
            addPointP3(movability);
            addPointP3(movability);

        }else if (option3 === "killjoy") {
            agent3.className = '';
            agent3.classList.add("killjoy");

            document.querySelectorAll(".green").forEach(el => el.remove());

            addPointP3(obstacle);
            addPointP3(obstacle);
            addPointP3(obstacle);
            addPointP3(slow);
            addPointP3(track);
            addPointP3(track);
            addPointP3(dmgExpl);
            addPointP3(dmgArea);
            addPointP3(dmgArea);
            addPointP3(dmgArea);
            addPointP3(dmgArea);

        }else if (option3 === "omen") {
            agent3.className = '';
            agent3.classList.add("omen");

            document.querySelectorAll(".green").forEach(el => el.remove());

            addPointP3(smoke);
            addPointP3(smoke);
            addPointP3(blind);
            addPointP3(track);
            addPointP3(teleport);
            addPointP3(teleport);
            addPointP3(movability);
            addPointP3(movability);

        }else if (option3 === "phoenix") {
            agent3.className = '';
            agent3.classList.add("phoenix");

            document.querySelectorAll(".green").forEach(el => el.remove());

            addPointP3(screen);
            addPointP3(flash);
            addPointP3(flash);
            addPointP3(healSelf);
            addPointP3(healSelf);
            addPointP3(healSelf);
            addPointP3(dmgArea);
            addPointP3(dmgArea);
            addPointP3(dmgArea);
            addPointP3(movability);

        }else if (option3 === "raze") {
            agent3.className = '';
            agent3.classList.add("raze");

            document.querySelectorAll(".green").forEach(el => el.remove());

            addPointP3(obstacle);
            addPointP3(dmgExpl);
            addPointP3(dmgExpl);
            addPointP3(dmgExpl);
            addPointP3(dmgExpl);
            addPointP3(movability);
            addPointP3(movability);
            
        }else if (option3 === "reyna") {
            agent3.className = '';
            agent3.classList.add("reyna");

            document.querySelectorAll(".green").forEach(el => el.remove());

            addPointP3(blind);
            addPointP3(blind);
            addPointP3(healSelf);
            addPointP3(healSelf);
            addPointP3(healSelf);
            addPointP3(rapidFire);
            addPointP3(rapidFire);
            addPointP3(movability);

        }else if (option3 === "sage") {
            agent3.className = '';
            agent3.classList.add("sage");

            document.querySelectorAll(".green").forEach(el => el.remove());

            addPointP3(obstacle);
            addPointP3(obstacle);
            addPointP3(obstacle);
            addPointP3(slow);
            addPointP3(slow);
            addPointP3(heal);
            addPointP3(heal);
            addPointP3(healSelf);

        }else if (option3 === "skye") {
            agent3.className = '';
            agent3.classList.add("skye");

            document.querySelectorAll(".green").forEach(el => el.remove());

            addPointP3(flash);
            addPointP3(flash);
            addPointP3(flash);
            addPointP3(blind);
            addPointP3(blind);
            addPointP3(blind);
            addPointP3(heal);
            addPointP3(heal);
            addPointP3(daze);
            addPointP3(track);
            addPointP3(track);
            addPointP3(track);

        }else if (option3 === "sova") {
            agent3.className = '';
            agent3.classList.add("sova");

            document.querySelectorAll(".green").forEach(el => el.remove());

            addPointP3(track);
            addPointP3(reveal);
            addPointP3(reveal);
            addPointP3(reveal);
            addPointP3(dmgExpl);
            addPointP3(dmgExpl);
            addPointP3(dmgExpl);

        }else if (option3 === "viper") {
            agent3.className = '';
            agent3.classList.add("viper");

            document.querySelectorAll(".green").forEach(el => el.remove());

            addPointP3(smoke);
            addPointP3(smoke);
            addPointP3(smoke);
            addPointP3(screen);
            addPointP3(obstacle);
            addPointP3(dmgExpl);
            addPointP3(dmgArea);
            addPointP3(dmgArea);
            addPointP3(dmgArea);

        }else if (option3 === "yoru") {
            agent3.className = '';
            agent3.classList.add("yoru");

            document.querySelectorAll(".green").forEach(el => el.remove());

            addPointP3(flash);
            addPointP3(flash);
            addPointP3(track);
            addPointP3(track);
            addPointP3(teleport);
            addPointP3(teleport);
            addPointP3(movability);
            addPointP3(movability);
        }

        console.log(option3);
    });

    let agent4 = document.querySelector("#agent4");
    let player4 = document.querySelector("#player4");   
    player4.addEventListener('change', function() {
        let option4 = this.options[this.selectedIndex].value;
        
        if (option4 === "astra") {
            agent4.className = '';
            agent4.classList.add("astra");

            document.querySelectorAll(".yellow").forEach(el => el.remove());

            addPointP4(smoke);
            addPointP4(smoke);
            addPointP4(smoke);
            addPointP4(smoke);
            addPointP4(smoke);
            addPointP4(obstacle);
            addPointP4(daze);
            addPointP4(dmgExpl);
               
        } else if (option4 === "breach") {
            agent4.className = '';
            agent4.classList.add("breach");

            document.querySelectorAll(".yellow").forEach(el => el.remove());

            addPointP4(flash);
            addPointP4(flash);
            addPointP4(flash);
            addPointP4(daze);
            addPointP4(daze);
            addPointP4(daze);
            addPointP4(daze);
            addPointP4(dmgExpl);
            addPointP4(dmgExpl);
            
        }else if (option4 === "brimstone") {
            agent4.className = '';
            agent4.classList.add("brimstone");
            
            document.querySelectorAll(".yellow").forEach(el => el.remove());

            addPointP4(smoke);
            addPointP4(smoke);
            addPointP4(smoke);
            addPointP4(dmgExpl);
            addPointP4(dmgExpl);
            addPointP4(dmgExpl);
            addPointP4(dmgArea);
            addPointP4(dmgArea);
            addPointP4(dmgArea);
            addPointP4(rapidFire);
            addPointP4(rapidFire);
            
        }else if (option4 === "cypher") {
            agent4.className = '';
            agent4.classList.add("cypher");

            document.querySelectorAll(".yellow").forEach(el => el.remove());

            addPointP4(smoke);
            addPointP4(obstacle);
            addPointP4(obstacle);
            addPointP4(obstacle);
            addPointP4(slow);
            addPointP4(slow);
            addPointP4(daze);
            addPointP4(track);
            addPointP4(track);
            addPointP4(reveal);
            addPointP4(reveal);
            addPointP4(reveal);

        }else if (option4 === "jett") {
            agent4.className = '';
            agent4.classList.add("jett");

            document.querySelectorAll(".yellow").forEach(el => el.remove());

            addPointP4(smoke);
            addPointP4(dmgExpl);
            addPointP4(dmgExpl);
            addPointP4(movability);
            addPointP4(movability);
            addPointP4(movability);
            addPointP4(movability);

        }else if (option4 === "killjoy") {
            agent4.className = '';
            agent4.classList.add("killjoy");

            document.querySelectorAll(".yellow").forEach(el => el.remove());

            addPointP4(obstacle);
            addPointP4(obstacle);
            addPointP4(obstacle);
            addPointP4(slow);
            addPointP4(track);
            addPointP4(track);
            addPointP4(dmgExpl);
            addPointP4(dmgArea);
            addPointP4(dmgArea);
            addPointP4(dmgArea);
            addPointP4(dmgArea);

        }else if (option4 === "omen") {
            agent4.className = '';
            agent4.classList.add("omen");

            document.querySelectorAll(".yellow").forEach(el => el.remove());

            addPointP4(smoke);
            addPointP4(smoke);
            addPointP4(blind);
            addPointP4(track);
            addPointP4(teleport);
            addPointP4(teleport);
            addPointP4(movability);
            addPointP4(movability);

        }else if (option4 === "phoenix") {
            agent4.className = '';
            agent4.classList.add("phoenix");

            document.querySelectorAll(".yellow").forEach(el => el.remove());

            addPointP4(screen);
            addPointP4(flash);
            addPointP4(flash);
            addPointP4(healSelf);
            addPointP4(healSelf);
            addPointP4(healSelf);
            addPointP4(dmgArea);
            addPointP4(dmgArea);
            addPointP4(dmgArea);
            addPointP4(movability);

        }else if (option4 === "raze") {
            agent4.className = '';
            agent4.classList.add("raze");

            document.querySelectorAll(".yellow").forEach(el => el.remove());

            addPointP4(obstacle);
            addPointP4(dmgExpl);
            addPointP4(dmgExpl);
            addPointP4(dmgExpl);
            addPointP4(dmgExpl);
            addPointP4(movability);
            addPointP4(movability);
            
        }else if (option4 === "reyna") {
            agent4.className = '';
            agent4.classList.add("reyna");

            document.querySelectorAll(".yellow").forEach(el => el.remove());

            addPointP4(blind);
            addPointP4(blind);
            addPointP4(healSelf);
            addPointP4(healSelf);
            addPointP4(healSelf);
            addPointP4(rapidFire);
            addPointP4(rapidFire);
            addPointP4(movability);

        }else if (option4 === "sage") {
            agent4.className = '';
            agent4.classList.add("sage");

            document.querySelectorAll(".yellow").forEach(el => el.remove());

            addPointP4(obstacle);
            addPointP4(obstacle);
            addPointP4(obstacle);
            addPointP4(slow);
            addPointP4(slow);
            addPointP4(heal);
            addPointP4(heal);
            addPointP4(healSelf);

        }else if (option4 === "skye") {
            agent4.className = '';
            agent4.classList.add("skye");

            document.querySelectorAll(".yellow").forEach(el => el.remove());

            addPointP4(flash);
            addPointP4(flash);
            addPointP4(flash);
            addPointP4(blind);
            addPointP4(blind);
            addPointP4(blind);
            addPointP4(heal);
            addPointP4(heal);
            addPointP4(daze);
            addPointP4(track);
            addPointP4(track);
            addPointP4(track);

        }else if (option4 === "sova") {
            agent4.className = '';
            agent4.classList.add("sova");

            document.querySelectorAll(".yellow").forEach(el => el.remove());

            addPointP4(track);
            addPointP4(reveal);
            addPointP4(reveal);
            addPointP4(reveal);
            addPointP4(dmgExpl);
            addPointP4(dmgExpl);
            addPointP4(dmgExpl);

        }else if (option4 === "viper") {
            agent4.className = '';
            agent4.classList.add("viper");

            document.querySelectorAll(".yellow").forEach(el => el.remove());

            addPointP4(smoke);
            addPointP4(smoke);
            addPointP4(smoke);
            addPointP4(screen);
            addPointP4(obstacle);
            addPointP4(dmgExpl);
            addPointP4(dmgArea);
            addPointP4(dmgArea);
            addPointP4(dmgArea);

        }else if (option4 === "yoru") {
            agent4.className = '';
            agent4.classList.add("yoru");

            document.querySelectorAll(".yellow").forEach(el => el.remove());

            addPointP4(flash);
            addPointP4(flash);
            addPointP4(track);
            addPointP4(track);
            addPointP4(teleport);
            addPointP4(teleport);
            addPointP4(movability);
            addPointP4(movability);
        }

        console.log(option4);
    });

    let agent5 = document.querySelector("#agent5");
    let player5 = document.querySelector("#player5");
    player5.addEventListener('change', function() {
        let option5 = this.options[this.selectedIndex].value;
        
        if (option5 === "astra") {
            agent5.className = '';
            agent5.classList.add("astra");

            document.querySelectorAll(".pink").forEach(el => el.remove());

            addPointP5(smoke);
            addPointP5(smoke);
            addPointP5(smoke);
            addPointP5(smoke);
            addPointP5(smoke);
            addPointP5(obstacle);
            addPointP5(daze);
            addPointP5(dmgExpl);
               
        } else if (option5 === "breach") {
            agent5.className = '';
            agent5.classList.add("breach");

            document.querySelectorAll(".pink").forEach(el => el.remove());

            addPointP5(flash);
            addPointP5(flash);
            addPointP5(flash);
            addPointP5(daze);
            addPointP5(daze);
            addPointP5(daze);
            addPointP5(daze);
            addPointP5(dmgExpl);
            addPointP5(dmgExpl);
            
        }else if (option5 === "brimstone") {
            agent5.className = '';
            agent5.classList.add("brimstone");
            
            document.querySelectorAll(".pink").forEach(el => el.remove());

            addPointP5(smoke);
            addPointP5(smoke);
            addPointP5(smoke);
            addPointP5(dmgExpl);
            addPointP5(dmgExpl);
            addPointP5(dmgExpl);
            addPointP5(dmgArea);
            addPointP5(dmgArea);
            addPointP5(dmgArea);
            addPointP5(rapidFire);
            addPointP5(rapidFire);
            
        }else if (option5 === "cypher") {
            agent5.className = '';
            agent5.classList.add("cypher");

            document.querySelectorAll(".pink").forEach(el => el.remove());

            addPointP5(smoke);
            addPointP5(obstacle);
            addPointP5(obstacle);
            addPointP5(obstacle);
            addPointP5(slow);
            addPointP5(slow);
            addPointP5(daze);
            addPointP5(track);
            addPointP5(track);
            addPointP5(reveal);
            addPointP5(reveal);
            addPointP5(reveal);

        }else if (option5 === "jett") {
            agent5.className = '';
            agent5.classList.add("jett");

            document.querySelectorAll(".pink").forEach(el => el.remove());

            addPointP5(smoke);
            addPointP5(dmgExpl);
            addPointP5(dmgExpl);
            addPointP5(movability);
            addPointP5(movability);
            addPointP5(movability);
            addPointP5(movability);

        }else if (option5 === "killjoy") {
            agent5.className = '';
            agent5.classList.add("killjoy");

            document.querySelectorAll(".pink").forEach(el => el.remove());

            addPointP5(obstacle);
            addPointP5(obstacle);
            addPointP5(obstacle);
            addPointP5(slow);
            addPointP5(track);
            addPointP5(track);
            addPointP5(dmgExpl);
            addPointP5(dmgArea);
            addPointP5(dmgArea);
            addPointP5(dmgArea);
            addPointP5(dmgArea);

        }else if (option5 === "omen") {
            agent5.className = '';
            agent5.classList.add("omen");

            document.querySelectorAll(".pink").forEach(el => el.remove());

            addPointP5(smoke);
            addPointP5(smoke);
            addPointP5(blind);
            addPointP5(track);
            addPointP5(teleport);
            addPointP5(teleport);
            addPointP5(movability);
            addPointP5(movability);

        }else if (option5 === "phoenix") {
            agent5.className = '';
            agent5.classList.add("phoenix");

            document.querySelectorAll(".pink").forEach(el => el.remove());

            addPointP5(screen);
            addPointP5(flash);
            addPointP5(flash);
            addPointP5(healSelf);
            addPointP5(healSelf);
            addPointP5(healSelf);
            addPointP5(dmgArea);
            addPointP5(dmgArea);
            addPointP5(dmgArea);
            addPointP5(movability);

        }else if (option5 === "raze") {
            agent5.className = '';
            agent5.classList.add("raze");

            document.querySelectorAll(".pink").forEach(el => el.remove());

            addPointP5(obstacle);
            addPointP5(dmgExpl);
            addPointP5(dmgExpl);
            addPointP5(dmgExpl);
            addPointP5(dmgExpl);
            addPointP5(movability);
            addPointP5(movability);
            
        }else if (option5 === "reyna") {
            agent5.className = '';
            agent5.classList.add("reyna");

            document.querySelectorAll(".pink").forEach(el => el.remove());

            addPointP5(blind);
            addPointP5(blind);
            addPointP5(healSelf);
            addPointP5(healSelf);
            addPointP5(healSelf);
            addPointP5(rapidFire);
            addPointP5(rapidFire);
            addPointP5(movability);

        }else if (option5 === "sage") {
            agent5.className = '';
            agent5.classList.add("sage");

            document.querySelectorAll(".pink").forEach(el => el.remove());

            addPointP5(obstacle);
            addPointP5(obstacle);
            addPointP5(obstacle);
            addPointP5(slow);
            addPointP5(slow);
            addPointP5(heal);
            addPointP5(heal);
            addPointP5(healSelf);

        }else if (option5 === "skye") {
            agent5.className = '';
            agent5.classList.add("skye");

            document.querySelectorAll(".pink").forEach(el => el.remove());

            addPointP5(flash);
            addPointP5(flash);
            addPointP5(flash);
            addPointP5(blind);
            addPointP5(blind);
            addPointP5(blind);
            addPointP5(heal);
            addPointP5(heal);
            addPointP5(daze);
            addPointP5(track);
            addPointP5(track);
            addPointP5(track);

        }else if (option5 === "sova") {
            agent5.className = '';
            agent5.classList.add("sova");

            document.querySelectorAll(".pink").forEach(el => el.remove());

            addPointP5(track);
            addPointP5(reveal);
            addPointP5(reveal);
            addPointP5(reveal);
            addPointP5(dmgExpl);
            addPointP5(dmgExpl);
            addPointP5(dmgExpl);

        }else if (option5 === "viper") {
            agent5.className = '';
            agent5.classList.add("viper");

            document.querySelectorAll(".pink").forEach(el => el.remove());

            addPointP5(smoke);
            addPointP5(smoke);
            addPointP5(smoke);
            addPointP5(screen);
            addPointP5(obstacle);
            addPointP5(dmgExpl);
            addPointP5(dmgArea);
            addPointP5(dmgArea);
            addPointP5(dmgArea);

        }else if (option5 === "yoru") {
            agent5.className = '';
            agent5.classList.add("yoru");

            document.querySelectorAll(".pink").forEach(el => el.remove());

            addPointP5(flash);
            addPointP5(flash);
            addPointP5(track);
            addPointP5(track);
            addPointP5(teleport);
            addPointP5(teleport);
            addPointP5(movability);
            addPointP5(movability);
        }

        console.log(option5);

        
    });

    let agent6 = document.querySelector("#agent6");
    let player6 = document.querySelector("#player6");
    player6.addEventListener('change', function() {
        let option6 = this.options[this.selectedIndex].value;
        
        if (option6 === "astra") {
            agent6.className = '';
            agent6.classList.add("astra");

            document.querySelectorAll(".lightblue").forEach(el => el.remove());

            addPointP6(smokeE);
            addPointP6(smokeE);
            addPointP6(smokeE);
            addPointP6(smokeE);
            addPointP6(smokeE);
            addPointP6(obstacleE);
            addPointP6(dazeE);
            addPointP6(dmgExplE);
               
        } else if (option6 === "breach") {
            agent6.className = '';
            agent6.classList.add("breach");

            document.querySelectorAll(".lightblue").forEach(el => el.remove());

            addPointP6(flashE);
            addPointP6(flashE);
            addPointP6(flashE);
            addPointP6(dazeE);
            addPointP6(dazeE);
            addPointP6(dazeE);
            addPointP6(dazeE);
            addPointP6(dmgExplE);
            addPointP6(dmgExplE);
            
        }else if (option6 === "brimstone") {
            agent6.className = '';
            agent6.classList.add("brimstone");
            
            document.querySelectorAll(".lightblue").forEach(el => el.remove());

            addPointP6(smokeE);
            addPointP6(smokeE);
            addPointP6(smokeE);
            addPointP6(dmgExplE);
            addPointP6(dmgExplE);
            addPointP6(dmgExplE);
            addPointP6(dmgAreaE);
            addPointP6(dmgAreaE);
            addPointP6(dmgAreaE);
            addPointP6(rapidFireE);
            addPointP6(rapidFireE);
            
        }else if (option6 === "cypher") {
            agent6.className = '';
            agent6.classList.add("cypher");

            document.querySelectorAll(".lightblue").forEach(el => el.remove());

            addPointP6(smokeE);
            addPointP6(obstacleE);
            addPointP6(obstacleE);
            addPointP6(obstacleE);
            addPointP6(slowE);
            addPointP6(slowE);
            addPointP6(dazeE);
            addPointP6(trackE);
            addPointP6(trackE);
            addPointP6(revealE);
            addPointP6(revealE);
            addPointP6(revealE);

        }else if (option6 === "jett") {
            agent6.className = '';
            agent6.classList.add("jett");

            document.querySelectorAll(".lightblue").forEach(el => el.remove());

            addPointP6(smokeE);
            addPointP6(dmgExplE);
            addPointP6(dmgExplE);
            addPointP6(movabilityE);
            addPointP6(movabilityE);
            addPointP6(movabilityE);
            addPointP6(movabilityE);

        }else if (option6 === "killjoy") {
            agent6.className = '';
            agent6.classList.add("killjoy");

            document.querySelectorAll(".lightblue").forEach(el => el.remove());

            addPointP6(obstacleE);
            addPointP6(obstacleE);
            addPointP6(obstacleE);
            addPointP6(slowE);
            addPointP6(trackE);
            addPointP6(trackE);
            addPointP6(dmgExplE);
            addPointP6(dmgAreaE);
            addPointP6(dmgAreaE);
            addPointP6(dmgAreaE);
            addPointP6(dmgAreaE);

        }else if (option6 === "omen") {
            agent6.className = '';
            agent6.classList.add("omen");

            document.querySelectorAll(".lightblue").forEach(el => el.remove());

            addPointP6(smokeE);
            addPointP6(smokeE);
            addPointP6(blindE);
            addPointP6(trackE);
            addPointP6(teleportE);
            addPointP6(teleportE);
            addPointP6(movabilityE);
            addPointP6(movabilityE);

        }else if (option6 === "phoenix") {
            agent6.className = '';
            agent6.classList.add("phoenix");

            document.querySelectorAll(".lightblue").forEach(el => el.remove());

            addPointP6(screenEE);
            addPointP6(flashE);
            addPointP6(flashE);
            addPointP6(healSelfE);
            addPointP6(healSelfE);
            addPointP6(healSelfE);
            addPointP6(dmgAreaE);
            addPointP6(dmgAreaE);
            addPointP6(dmgAreaE);
            addPointP6(movabilityE);

        }else if (option6 === "raze") {
            agent6.className = '';
            agent6.classList.add("raze");

            document.querySelectorAll(".lightblue").forEach(el => el.remove());

            addPointP6(obstacleE);
            addPointP6(dmgExplE);
            addPointP6(dmgExplE);
            addPointP6(dmgExplE);
            addPointP6(dmgExplE);
            addPointP6(movabilityE);
            addPointP6(movabilityE);
            
        }else if (option6 === "reyna") {
            agent6.className = '';
            agent6.classList.add("reyna");

            document.querySelectorAll(".lightblue").forEach(el => el.remove());

            addPointP6(blindE);
            addPointP6(blindE);
            addPointP6(healSelfE);
            addPointP6(healSelfE);
            addPointP6(healSelfE);
            addPointP6(rapidFireE);
            addPointP6(rapidFireE);
            addPointP6(movabilityE);

        }else if (option6 === "sage") {
            agent6.className = '';
            agent6.classList.add("sage");

            document.querySelectorAll(".lightblue").forEach(el => el.remove());

            addPointP6(obstacleE);
            addPointP6(obstacleE);
            addPointP6(obstacleE);
            addPointP6(slowE);
            addPointP6(slowE);
            addPointP6(healE);
            addPointP6(healE);
            addPointP6(healSelfE);

        }else if (option6 === "skye") {
            agent6.className = '';
            agent6.classList.add("skye");

            document.querySelectorAll(".lightblue").forEach(el => el.remove());

            addPointP6(flashE);
            addPointP6(flashE);
            addPointP6(flashE);
            addPointP6(blindE);
            addPointP6(blindE);
            addPointP6(blindE);
            addPointP6(healE);
            addPointP6(healE);
            addPointP6(dazeE);
            addPointP6(trackE);
            addPointP6(trackE);
            addPointP6(trackE);

        }else if (option6 === "sova") {
            agent6.className = '';
            agent6.classList.add("sova");

            document.querySelectorAll(".lightblue").forEach(el => el.remove());

            addPointP6(trackE);
            addPointP6(revealE);
            addPointP6(revealE);
            addPointP6(revealE);
            addPointP6(dmgExplE);
            addPointP6(dmgExplE);
            addPointP6(dmgExplE);

        }else if (option6 === "viper") {
            agent6.className = '';
            agent6.classList.add("viper");

            document.querySelectorAll(".lightblue").forEach(el => el.remove());

            addPointP6(smokeE);
            addPointP6(smokeE);
            addPointP6(smokeE);
            addPointP6(screenE);
            addPointP6(obstacleE);
            addPointP6(dmgExplE);
            addPointP6(dmgAreaE);
            addPointP6(dmgAreaE);
            addPointP6(dmgAreaE);

        }else if (option6 === "yoru") {
            agent6.className = '';
            agent6.classList.add("yoru");

            document.querySelectorAll(".lightblue").forEach(el => el.remove());

            addPointP6(flashE);
            addPointP6(flashE);
            addPointP6(trackE);
            addPointP6(trackE);
            addPointP6(teleportE);
            addPointP6(teleportE);
            addPointP6(movabilityE);
            addPointP6(movabilityE);
        }

        console.log(option6);


        
    });
    
    let agent7 = document.querySelector("#agent7");
    let player7 = document.querySelector("#player7");
    player7.addEventListener('change', function() {
        let option7 = this.options[this.selectedIndex].value;
        
        if (option7 === "astra") {
            agent7.className = '';
            agent7.classList.add("astra");

            document.querySelectorAll(".lightcoral").forEach(el => el.remove());

            addPointP7(smokeE);
            addPointP7(smokeE);
            addPointP7(smokeE);
            addPointP7(smokeE);
            addPointP7(smokeE);
            addPointP7(obstacleE);
            addPointP7(dazeE);
            addPointP7(dmgExplE);
               
        } else if (option7 === "breach") {
            agent7.className = '';
            agent7.classList.add("breach");

            document.querySelectorAll(".lightcoral").forEach(el => el.remove());

            addPointP7(flashE);
            addPointP7(flashE);
            addPointP7(flashE);
            addPointP7(dazeE);
            addPointP7(dazeE);
            addPointP7(dazeE);
            addPointP7(dazeE);
            addPointP7(dmgExplE);
            addPointP7(dmgExplE);
            
        }else if (option7 === "brimstone") {
            agent7.className = '';
            agent7.classList.add("brimstone");
            
            document.querySelectorAll(".lightcoral").forEach(el => el.remove());

            addPointP7(smokeE);
            addPointP7(smokeE);
            addPointP7(smokeE);
            addPointP7(dmgExplE);
            addPointP7(dmgExplE);
            addPointP7(dmgExplE);
            addPointP7(dmgAreaE);
            addPointP7(dmgAreaE);
            addPointP7(dmgAreaE);
            addPointP7(rapidFireE);
            addPointP7(rapidFireE);
            
        }else if (option7 === "cypher") {
            agent7.className = '';
            agent7.classList.add("cypher");

            document.querySelectorAll(".lightcoral").forEach(el => el.remove());

            addPointP7(smokeE);
            addPointP7(obstacleE);
            addPointP7(obstacleE);
            addPointP7(obstacleE);
            addPointP7(slowE);
            addPointP7(slowE);
            addPointP7(dazeE);
            addPointP7(trackE);
            addPointP7(trackE);
            addPointP7(revealE);
            addPointP7(revealE);
            addPointP7(revealE);

        }else if (option7 === "jett") {
            agent7.className = '';
            agent7.classList.add("jett");

            document.querySelectorAll(".lightcoral").forEach(el => el.remove());

            addPointP7(smokeE);
            addPointP7(dmgExplE);
            addPointP7(dmgExplE);
            addPointP7(movabilityE);
            addPointP7(movabilityE);
            addPointP7(movabilityE);
            addPointP7(movabilityE);

        }else if (option7 === "killjoy") {
            agent7.className = '';
            agent7.classList.add("killjoy");

            document.querySelectorAll(".lightcoral").forEach(el => el.remove());

            addPointP7(obstacleE);
            addPointP7(obstacleE);
            addPointP7(obstacleE);
            addPointP7(slowE);
            addPointP7(trackE);
            addPointP7(trackE);
            addPointP7(dmgExplE);
            addPointP7(dmgAreaE);
            addPointP7(dmgAreaE);
            addPointP7(dmgAreaE);
            addPointP7(dmgAreaE);

        }else if (option7 === "omen") {
            agent7.className = '';
            agent7.classList.add("omen");

            document.querySelectorAll(".lightcoral").forEach(el => el.remove());

            addPointP7(smokeE);
            addPointP7(smokeE);
            addPointP7(blindE);
            addPointP7(trackE);
            addPointP7(teleportE);
            addPointP7(teleportE);
            addPointP7(movabilityE);
            addPointP7(movabilityE);

        }else if (option7 === "phoenix") {
            agent7.className = '';
            agent7.classList.add("phoenix");

            document.querySelectorAll(".lightcoral").forEach(el => el.remove());

            addPointP7(screenE);
            addPointP7(flashE);
            addPointP7(flashE);
            addPointP7(healSelfE);
            addPointP7(healSelfE);
            addPointP7(healSelfE);
            addPointP7(dmgAreaE);
            addPointP7(dmgAreaE);
            addPointP7(dmgAreaE);
            addPointP7(movabilityE);

        }else if (option7 === "raze") {
            agent7.className = '';
            agent7.classList.add("raze");

            document.querySelectorAll(".lightcoral").forEach(el => el.remove());

            addPointP7(obstacleE);
            addPointP7(dmgExplE);
            addPointP7(dmgExplE);
            addPointP7(dmgExplE);
            addPointP7(dmgExplE);
            addPointP7(movabilityE);
            addPointP7(movabilityE);
            
        }else if (option7 === "reyna") {
            agent7.className = '';
            agent7.classList.add("reyna");

            document.querySelectorAll(".lightcoral").forEach(el => el.remove());

            addPointP7(blindE);
            addPointP7(blindE);
            addPointP7(healSelfE);
            addPointP7(healSelfE);
            addPointP7(healSelfE);
            addPointP7(rapidFireE);
            addPointP7(rapidFireE);
            addPointP7(movabilityE);

        }else if (option7 === "sage") {
            agent7.className = '';
            agent7.classList.add("sage");

            document.querySelectorAll(".lightcoral").forEach(el => el.remove());

            addPointP7(obstacleE);
            addPointP7(obstacleE);
            addPointP7(obstacleE);
            addPointP7(slowE);
            addPointP7(slowE);
            addPointP7(healE);
            addPointP7(healE);
            addPointP7(healSelfE);

        }else if (option7 === "skye") {
            agent7.className = '';
            agent7.classList.add("skye");

            document.querySelectorAll(".lightcoral").forEach(el => el.remove());

            addPointP7(flashE);
            addPointP7(flashE);
            addPointP7(flashE);
            addPointP7(blindE);
            addPointP7(blindE);
            addPointP7(blindE);
            addPointP7(healE);
            addPointP7(healE);
            addPointP7(dazeE);
            addPointP7(trackE);
            addPointP7(trackE);
            addPointP7(trackE);

        }else if (option7 === "sova") {
            agent7.className = '';
            agent7.classList.add("sova");

            document.querySelectorAll(".lightcoral").forEach(el => el.remove());

            addPointP7(trackE);
            addPointP7(revealE);
            addPointP7(revealE);
            addPointP7(revealE);
            addPointP7(dmgExplE);
            addPointP7(dmgExplE);
            addPointP7(dmgExplE);

        }else if (option7 === "viper") {
            agent7.className = '';
            agent7.classList.add("viper");

            document.querySelectorAll(".lightcoral").forEach(el => el.remove());

            addPointP7(smokeE);
            addPointP7(smokeE);
            addPointP7(smokeE);
            addPointP7(screenE);
            addPointP7(obstacleE);
            addPointP7(dmgExplE);
            addPointP7(dmgAreaE);
            addPointP7(dmgAreaE);
            addPointP7(dmgAreaE);

        }else if (option7 === "yoru") {
            agent7.className = '';
            agent7.classList.add("yoru");

            document.querySelectorAll(".lightcoral").forEach(el => el.remove());

            addPointP7(flashE);
            addPointP7(flashE);
            addPointP7(trackE);
            addPointP7(trackE);
            addPointP7(teleportE);
            addPointP7(teleportE);
            addPointP7(movabilityE);
            addPointP7(movabilityE);
        }

        console.log(option7);
    });
 
    let agent8 = document.querySelector("#agent8");
    let player8 = document.querySelector("#player8");
    player8.addEventListener('change', function() {
        let option8 = this.options[this.selectedIndex].value;
        
        if (option8 === "astra") {
            agent8.className = '';
            agent8.classList.add("astra");

            document.querySelectorAll(".lightgreen").forEach(el => el.remove());

            addPointP8(smokeE);
            addPointP8(smokeE);
            addPointP8(smokeE);
            addPointP8(smokeE);
            addPointP8(smokeE);
            addPointP8(obstacleE);
            addPointP8(dazeE);
            addPointP8(dmgExplE);
               
        } else if (option8 === "breach") {
            agent8.className = '';
            agent8.classList.add("breach");

            document.querySelectorAll(".lightgreen").forEach(el => el.remove());

            addPointP8(flashE);
            addPointP8(flashE);
            addPointP8(flashE);
            addPointP8(dazeE);
            addPointP8(dazeE);
            addPointP8(dazeE);
            addPointP8(dazeE);
            addPointP8(dmgExplE);
            addPointP8(dmgExplE);
            
        }else if (option8 === "brimstone") {
            agent8.className = '';
            agent8.classList.add("brimstone");
            
            document.querySelectorAll(".lightgreen").forEach(el => el.remove());

            addPointP8(smokeE);
            addPointP8(smokeE);
            addPointP8(smokeE);
            addPointP8(dmgExplE);
            addPointP8(dmgExplE);
            addPointP8(dmgExplE);
            addPointP8(dmgAreaE);
            addPointP8(dmgAreaE);
            addPointP8(dmgAreaE);
            addPointP8(rapidFireE);
            addPointP8(rapidFireE);
            
        }else if (option8 === "cypher") {
            agent8.className = '';
            agent8.classList.add("cypher");

            document.querySelectorAll(".lightgreen").forEach(el => el.remove());

            addPointP8(smokeE);
            addPointP8(obstacleE);
            addPointP8(obstacleE);
            addPointP8(obstacleE);
            addPointP8(slowE);
            addPointP8(slowE);
            addPointP8(dazeE);
            addPointP8(trackE);
            addPointP8(trackE);
            addPointP8(revealE);
            addPointP8(revealE);
            addPointP8(revealE);

        }else if (option8 === "jett") {
            agent8.className = '';
            agent8.classList.add("jett");

            document.querySelectorAll(".lightgreen").forEach(el => el.remove());

            addPointP8(smokeE);
            addPointP8(dmgExplE);
            addPointP8(dmgExplE);
            addPointP8(movabilityE);
            addPointP8(movabilityE);
            addPointP8(movabilityE);
            addPointP8(movabilityE);

        }else if (option8 === "killjoy") {
            agent8.className = '';
            agent8.classList.add("killjoy");

            document.querySelectorAll(".lightgreen").forEach(el => el.remove());

            addPointP8(obstacleE);
            addPointP8(obstacleE);
            addPointP8(obstacleE);
            addPointP8(slowE);
            addPointP8(trackE);
            addPointP8(trackE);
            addPointP8(dmgExplE);
            addPointP8(dmgAreaE);
            addPointP8(dmgAreaE);
            addPointP8(dmgAreaE);
            addPointP8(dmgAreaE);

        }else if (option8 === "omen") {
            agent8.className = '';
            agent8.classList.add("omen");

            document.querySelectorAll(".lightgreen").forEach(el => el.remove());

            addPointP8(smokeE);
            addPointP8(smokeE);
            addPointP8(blindE);
            addPointP8(trackE);
            addPointP8(teleportE);
            addPointP8(teleportE);
            addPointP8(movabilityE);
            addPointP8(movabilityE);

        }else if (option8 === "phoenix") {
            agent8.className = '';
            agent8.classList.add("phoenix");

            document.querySelectorAll(".lightgreen").forEach(el => el.remove());

            addPointP8(screenE);
            addPointP8(flashE);
            addPointP8(flashE);
            addPointP8(healSelfE);
            addPointP8(healSelfE);
            addPointP8(healSelfE);
            addPointP8(dmgAreaE);
            addPointP8(dmgAreaE);
            addPointP8(dmgAreaE);
            addPointP8(movabilityE);

        }else if (option8 === "raze") {
            agent8.className = '';
            agent8.classList.add("raze");

            document.querySelectorAll(".lightgreen").forEach(el => el.remove());

            addPointP8(obstacleE);
            addPointP8(dmgExplE);
            addPointP8(dmgExplE);
            addPointP8(dmgExplE);
            addPointP8(dmgExplE);
            addPointP8(movabilityE);
            addPointP8(movabilityE);
            
        }else if (option8 === "reyna") {
            agent8.className = '';
            agent8.classList.add("reyna");

            document.querySelectorAll(".lightgreen").forEach(el => el.remove());

            addPointP8(blindE);
            addPointP8(blindE);
            addPointP8(healSelfE);
            addPointP8(healSelfE);
            addPointP8(healSelfE);
            addPointP8(rapidFireE);
            addPointP8(rapidFireE);
            addPointP8(movabilityE);

        }else if (option8 === "sage") {
            agent8.className = '';
            agent8.classList.add("sage");

            document.querySelectorAll(".lightgreen").forEach(el => el.remove());

            addPointP8(obstacleE);
            addPointP8(obstacleE);
            addPointP8(obstacleE);
            addPointP8(slowE);
            addPointP8(slowE);
            addPointP8(healE);
            addPointP8(healE);
            addPointP8(healSelfE);

        }else if (option8 === "skye") {
            agent8.className = '';
            agent8.classList.add("skye");

            document.querySelectorAll(".lightgreen").forEach(el => el.remove());

            addPointP8(flashE);
            addPointP8(flashE);
            addPointP8(flashE);
            addPointP8(blindE);
            addPointP8(blindE);
            addPointP8(blindE);
            addPointP8(healE);
            addPointP8(healE);
            addPointP8(dazeE);
            addPointP8(trackE);
            addPointP8(trackE);
            addPointP8(trackE);

        }else if (option8 === "sova") {
            agent8.className = '';
            agent8.classList.add("sova");

            document.querySelectorAll(".lightgreen").forEach(el => el.remove());

            addPointP8(trackE);
            addPointP8(revealE);
            addPointP8(revealE);
            addPointP8(revealE);
            addPointP8(dmgExplE);
            addPointP8(dmgExplE);
            addPointP8(dmgExplE);

        }else if (option8 === "viper") {
            agent8.className = '';
            agent8.classList.add("viper");

            document.querySelectorAll(".lightgreen").forEach(el => el.remove());

            addPointP8(smokeE);
            addPointP8(smokeE);
            addPointP8(smokeE);
            addPointP8(screenE);
            addPointP8(obstacleE);
            addPointP8(dmgExplE);
            addPointP8(dmgAreaE);
            addPointP8(dmgAreaE);
            addPointP8(dmgAreaE);

        }else if (option8 === "yoru") {
            agent8.className = '';
            agent8.classList.add("yoru");

            document.querySelectorAll(".lightgreen").forEach(el => el.remove());

            addPointP8(flashE);
            addPointP8(flashE);
            addPointP8(trackE);
            addPointP8(trackE);
            addPointP8(teleportE);
            addPointP8(teleportE);
            addPointP8(movabilityE);
            addPointP8(movabilityE);
        }

        console.log(option8);
    });

    let agent9 = document.querySelector("#agent9");
    let player9 = document.querySelector("#player9");   
    player9.addEventListener('change', function() {
        let option9 = this.options[this.selectedIndex].value;
        
        if (option9 === "astra") {
            agent9.className = '';
            agent9.classList.add("astra");

            document.querySelectorAll(".khaki").forEach(el => el.remove());

            addPointP9(smokeE);
            addPointP9(smokeE);
            addPointP9(smokeE);
            addPointP9(smokeE);
            addPointP9(smokeE);
            addPointP9(obstacleE);
            addPointP9(dazeE);
            addPointP9(dmgExplE);
               
        } else if (option9 === "breach") {
            agent9.className = '';
            agent9.classList.add("breach");

            document.querySelectorAll(".khaki").forEach(el => el.remove());

            addPointP9(flashE);
            addPointP9(flashE);
            addPointP9(flashE);
            addPointP9(dazeE);
            addPointP9(dazeE);
            addPointP9(dazeE);
            addPointP9(dazeE);
            addPointP9(dmgExplE);
            addPointP9(dmgExplE);
            
        }else if (option9 === "brimstone") {
            agent9.className = '';
            agent9.classList.add("brimstone");
            
            document.querySelectorAll(".khaki").forEach(el => el.remove());

            addPointP9(smokeE);
            addPointP9(smokeE);
            addPointP9(smokeE);
            addPointP9(dmgExplE);
            addPointP9(dmgExplE);
            addPointP9(dmgExplE);
            addPointP9(dmgAreaE);
            addPointP9(dmgAreaE);
            addPointP9(dmgAreaE);
            addPointP9(rapidFireE);
            addPointP9(rapidFireE);
            
        }else if (option9 === "cypher") {
            agent9.className = '';
            agent9.classList.add("cypher");

            document.querySelectorAll(".khaki").forEach(el => el.remove());

            addPointP9(smokeE);
            addPointP9(obstacleE);
            addPointP9(obstacleE);
            addPointP9(obstacleE);
            addPointP9(slowE);
            addPointP9(slowE);
            addPointP9(dazeE);
            addPointP9(trackE);
            addPointP9(trackE);
            addPointP9(revealE);
            addPointP9(revealE);
            addPointP9(revealE);

        }else if (option9 === "jett") {
            agent9.className = '';
            agent9.classList.add("jett");

            document.querySelectorAll(".khaki").forEach(el => el.remove());

            addPointP9(smokeE);
            addPointP9(dmgExplE);
            addPointP9(dmgExplE);
            addPointP9(movabilityE);
            addPointP9(movabilityE);
            addPointP9(movabilityE);
            addPointP9(movabilityE);

        }else if (option9 === "killjoy") {
            agent9.className = '';
            agent9.classList.add("killjoy");

            document.querySelectorAll(".khaki").forEach(el => el.remove());

            addPointP9(obstacleE);
            addPointP9(obstacleE);
            addPointP9(obstacleE);
            addPointP9(slowE);
            addPointP9(trackE);
            addPointP9(trackE);
            addPointP9(dmgExplE);
            addPointP9(dmgAreaE);
            addPointP9(dmgAreaE);
            addPointP9(dmgAreaE);
            addPointP9(dmgAreaE);

        }else if (option9 === "omen") {
            agent9.className = '';
            agent9.classList.add("omen");

            document.querySelectorAll(".khaki").forEach(el => el.remove());

            addPointP9(smokeE);
            addPointP9(smokeE);
            addPointP9(blindE);
            addPointP9(trackE);
            addPointP9(teleportE);
            addPointP9(teleportE);
            addPointP9(movabilityE);
            addPointP9(movabilityE);

        }else if (option9 === "phoenix") {
            agent9.className = '';
            agent9.classList.add("phoenix");

            document.querySelectorAll(".khaki").forEach(el => el.remove());

            addPointP9(screenE);
            addPointP9(flashE);
            addPointP9(flashE);
            addPointP9(healSelfE);
            addPointP9(healSelfE);
            addPointP9(healSelfE);
            addPointP9(dmgAreaE);
            addPointP9(dmgAreaE);
            addPointP9(dmgAreaE);
            addPointP9(movabilityE);

        }else if (option9 === "raze") {
            agent9.className = '';
            agent9.classList.add("raze");

            document.querySelectorAll(".khaki").forEach(el => el.remove());

            addPointP9(obstacleE);
            addPointP9(dmgExplE);
            addPointP9(dmgExplE);
            addPointP9(dmgExplE);
            addPointP9(dmgExplE);
            addPointP9(movabilityE);
            addPointP9(movabilityE);
            
        }else if (option9 === "reyna") {
            agent9.className = '';
            agent9.classList.add("reyna");

            document.querySelectorAll(".khaki").forEach(el => el.remove());

            addPointP9(blindE);
            addPointP9(blindE);
            addPointP9(healSelfE);
            addPointP9(healSelfE);
            addPointP9(healSelfE);
            addPointP9(rapidFireE);
            addPointP9(rapidFireE);
            addPointP9(movabilityE);

        }else if (option9 === "sage") {
            agent9.className = '';
            agent9.classList.add("sage");

            document.querySelectorAll(".khaki").forEach(el => el.remove());

            addPointP9(obstacleE);
            addPointP9(obstacleE);
            addPointP9(obstacleE);
            addPointP9(slowE);
            addPointP9(slowE);
            addPointP9(healE);
            addPointP9(healE);
            addPointP9(healSelfE);

        }else if (option9 === "skye") {
            agent9.className = '';
            agent9.classList.add("skye");

            document.querySelectorAll(".khaki").forEach(el => el.remove());

            addPointP9(flashE);
            addPointP9(flashE);
            addPointP9(flashE);
            addPointP9(blindE);
            addPointP9(blindE);
            addPointP9(blindE);
            addPointP9(healE);
            addPointP9(healE);
            addPointP9(dazeE);
            addPointP9(trackE);
            addPointP9(trackE);
            addPointP9(trackE);

        }else if (option9 === "sova") {
            agent9.className = '';
            agent9.classList.add("sova");

            document.querySelectorAll(".khaki").forEach(el => el.remove());

            addPointP9(trackE);
            addPointP9(revealE);
            addPointP9(revealE);
            addPointP9(revealE);
            addPointP9(dmgExplE);
            addPointP9(dmgExplE);
            addPointP9(dmgExplE);

        }else if (option9 === "viper") {
            agent9.className = '';
            agent9.classList.add("viper");

            document.querySelectorAll(".khaki").forEach(el => el.remove());

            addPointP9(smokeE);
            addPointP9(smokeE);
            addPointP9(smokeE);
            addPointP9(screenE);
            addPointP9(obstacleE);
            addPointP9(dmgExplE);
            addPointP9(dmgAreaE);
            addPointP9(dmgAreaE);
            addPointP9(dmgAreaE);

        }else if (option9 === "yoru") {
            agent9.className = '';
            agent9.classList.add("yoru");

            document.querySelectorAll(".khaki").forEach(el => el.remove());

            addPointP9(flashE);
            addPointP9(flashE);
            addPointP9(trackE);
            addPointP9(trackE);
            addPointP9(teleportE);
            addPointP9(teleportE);
            addPointP9(movabilityE);
            addPointP9(movabilityE);
        }

        console.log(option9);
    });

    let agent10 = document.querySelector("#agent10");
    let player10 = document.querySelector("#player10");
    player10.addEventListener('change', function() {
        let option10 = this.options[this.selectedIndex].value;
        
        if (option10 === "astra") {
            agent10.className = '';
            agent10.classList.add("astra");

            document.querySelectorAll(".lightpink").forEach(el => el.remove());

            addPointP10(smokeE);
            addPointP10(smokeE);
            addPointP10(smokeE);
            addPointP10(smokeE);
            addPointP10(smokeE);
            addPointP10(obstacleE);
            addPointP10(dazeE);
            addPointP10(dmgExplE);
               
        } else if (option10 === "breach") {
            agent10.className = '';
            agent10.classList.add("breach");

            document.querySelectorAll(".lightpink").forEach(el => el.remove());

            addPointP10(flashE);
            addPointP10(flashE);
            addPointP10(flashE);
            addPointP10(dazeE);
            addPointP10(dazeE);
            addPointP10(dazeE);
            addPointP10(dazeE);
            addPointP10(dmgExplE);
            addPointP10(dmgExplE);
            
        }else if (option10 === "brimstone") {
            agent10.className = '';
            agent10.classList.add("brimstone");
            
            document.querySelectorAll(".lightpink").forEach(el => el.remove());

            addPointP10(smokeE);
            addPointP10(smokeE);
            addPointP10(smokeE);
            addPointP10(dmgExplE);
            addPointP10(dmgExplE);
            addPointP10(dmgExplE);
            addPointP10(dmgAreaE);
            addPointP10(dmgAreaE);
            addPointP10(dmgAreaE);
            addPointP10(rapidFireE);
            addPointP10(rapidFireE);
            
        }else if (option10 === "cypher") {
            agent10.className = '';
            agent10.classList.add("cypher");

            document.querySelectorAll(".lightpink").forEach(el => el.remove());

            addPointP10(smokeE);
            addPointP10(obstacleE);
            addPointP10(obstacleE);
            addPointP10(obstacleE);
            addPointP10(slowE);
            addPointP10(slowE);
            addPointP10(dazeE);
            addPointP10(trackE);
            addPointP10(trackE);
            addPointP10(revealE);
            addPointP10(revealE);
            addPointP10(revealE);

        }else if (option10 === "jett") {
            agent10.className = '';
            agent10.classList.add("jett");

            document.querySelectorAll(".lightpink").forEach(el => el.remove());

            addPointP10(smokeE);
            addPointP10(dmgExplE);
            addPointP10(dmgExplE);
            addPointP10(movabilityE);
            addPointP10(movabilityE);
            addPointP10(movabilityE);
            addPointP10(movabilityE);

        }else if (option10 === "killjoy") {
            agent10.className = '';
            agent10.classList.add("killjoy");

            document.querySelectorAll(".lightpink").forEach(el => el.remove());

            addPointP10(obstacleE);
            addPointP10(obstacleE);
            addPointP10(obstacleE);
            addPointP10(slowE);
            addPointP10(trackE);
            addPointP10(trackE);
            addPointP10(dmgExplE);
            addPointP10(dmgAreaE);
            addPointP10(dmgAreaE);
            addPointP10(dmgAreaE);
            addPointP10(dmgAreaE);

        }else if (option10 === "omen") {
            agent10.className = '';
            agent10.classList.add("omen");

            document.querySelectorAll(".lightpink").forEach(el => el.remove());

            addPointP10(smokeE);
            addPointP10(smokeE);
            addPointP10(blindE);
            addPointP10(trackE);
            addPointP10(teleportE);
            addPointP10(teleportE);
            addPointP10(movabilityE);
            addPointP10(movabilityE);

        }else if (option10 === "phoenix") {
            agent10.className = '';
            agent10.classList.add("phoenix");

            document.querySelectorAll(".lightpink").forEach(el => el.remove());

            addPointP10(screenE);
            addPointP10(flashE);
            addPointP10(flashE);
            addPointP10(healSelfE);
            addPointP10(healSelfE);
            addPointP10(healSelfE);
            addPointP10(dmgAreaE);
            addPointP10(dmgAreaE);
            addPointP10(dmgAreaE);
            addPointP10(movabilityE);

        }else if (option10 === "raze") {
            agent10.className = '';
            agent10.classList.add("raze");

            document.querySelectorAll(".lightpink").forEach(el => el.remove());

            addPointP10(obstacleE);
            addPointP10(dmgExplE);
            addPointP10(dmgExplE);
            addPointP10(dmgExplE);
            addPointP10(dmgExplE);
            addPointP10(movabilityE);
            addPointP10(movabilityE);
            
        }else if (option10 === "reyna") {
            agent10.className = '';
            agent10.classList.add("reyna");

            document.querySelectorAll(".lightpink").forEach(el => el.remove());

            addPointP10(blindE);
            addPointP10(blindE);
            addPointP10(healSelfE);
            addPointP10(healSelfE);
            addPointP10(healSelfE);
            addPointP10(rapidFireE);
            addPointP10(rapidFireE);
            addPointP10(movabilityE);

        }else if (option10 === "sage") {
            agent10.className = '';
            agent10.classList.add("sage");

            document.querySelectorAll(".lightpink").forEach(el => el.remove());

            addPointP10(obstacleE);
            addPointP10(obstacleE);
            addPointP10(obstacleE);
            addPointP10(slowE);
            addPointP10(slowE);
            addPointP10(healE);
            addPointP10(healE);
            addPointP10(healSelfE);

        }else if (option10 === "skye") {
            agent10.className = '';
            agent10.classList.add("skye");

            document.querySelectorAll(".lightpink").forEach(el => el.remove());

            addPointP10(flashE);
            addPointP10(flashE);
            addPointP10(flashE);
            addPointP10(blindE);
            addPointP10(blindE);
            addPointP10(blindE);
            addPointP10(healE);
            addPointP10(healE);
            addPointP10(dazeE);
            addPointP10(trackE);
            addPointP10(trackE);
            addPointP10(trackE);

        }else if (option10 === "sova") {
            agent10.className = '';
            agent10.classList.add("sova");

            document.querySelectorAll(".lightpink").forEach(el => el.remove());

            addPointP10(trackE);
            addPointP10(revealE);
            addPointP10(revealE);
            addPointP10(revealE);
            addPointP10(dmgExplE);
            addPointP10(dmgExplE);
            addPointP10(dmgExplE);

        }else if (option10 === "viper") {
            agent10.className = '';
            agent10.classList.add("viper");

            document.querySelectorAll(".lightpink").forEach(el => el.remove());

            addPointP10(smokeE);
            addPointP10(smokeE);
            addPointP10(smokeE);
            addPointP10(screenE);
            addPointP10(obstacleE);
            addPointP10(dmgExplE);
            addPointP10(dmgAreaE);
            addPointP10(dmgAreaE);
            addPointP10(dmgAreaE);

        }else if (option10 === "yoru") {
            agent10.className = '';
            agent10.classList.add("yoru");

            document.querySelectorAll(".lightpink").forEach(el => el.remove());

            addPointP10(flashE);
            addPointP10(flashE);
            addPointP10(trackE);
            addPointP10(trackE);
            addPointP10(teleportE);
            addPointP10(teleportE);
            addPointP10(movabilityE);
            addPointP10(movabilityE);
        }

        console.log(option10);
    });

}


 


