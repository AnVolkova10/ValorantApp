window.onload = () => {
    
    
    //Abilities
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

}


 


