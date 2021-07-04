window.onload = () => {
    
    //LOG IN LOGIC /////////////////////////////////////////////////
    let guest = document.querySelector(".guest");
    let login = document.querySelector(".login");
    let guestMode = document.querySelector(".guest-mode");
    guest.addEventListener("click", function (){
        login.style.display = "none";
        guestMode.style.display ="flex";
    })

    
    
   
    

    //GAME LOGIC /////////////////////////////////////////////////
    //Allied Abilities
    let smoke = document.querySelectorAll(".smoke");
    let screen = document.querySelectorAll(".screen");
    let flash = document.querySelectorAll(".flash");
    let blind = document.querySelectorAll(".blind");
    let obstacle = document.querySelectorAll(".obstacle");
    let slow = document.querySelectorAll(".slow");
    let daze = document.querySelectorAll(".daze");
    let heal = document.querySelectorAll(".heal");
    let healSelf = document.querySelectorAll(".healSelf");
    let track = document.querySelectorAll(".track");
    let reveal = document.querySelectorAll(".reveal");
    let dmgExpl = document.querySelectorAll(".dmgExpl");
    let dmgArea = document.querySelectorAll(".dmgArea");
    let teleport = document.querySelectorAll(".teleport");
    let movability = document.querySelectorAll(".movability");
    let rapidFire = document.querySelectorAll(".rapidFire");
    let concussion = document.querySelectorAll(".concussion");
    let revive = document.querySelectorAll(".revive");
    let decoy = document.querySelectorAll(".decoy");
    let vulnerable = document.querySelectorAll(".vulnerable");
    let suppression = document.querySelectorAll(".suppression");
    let detain = document.querySelectorAll(".detain");

    // Enemy Abilities
    let smokeE = document.querySelectorAll(".smokeE");
    let screenE = document.querySelectorAll(".screenE");
    let flashE = document.querySelectorAll(".flashE");
    let blindE = document.querySelectorAll(".blindE");
    let obstacleE = document.querySelectorAll(".obstacleE");
    let slowE = document.querySelectorAll(".slowE");
    let dazeE = document.querySelectorAll(".dazeE");
    let healE = document.querySelectorAll(".healE");
    let healSelfE = document.querySelectorAll(".healSelfE");
    let trackE = document.querySelectorAll(".trackE");
    let revealE = document.querySelectorAll(".revealE");
    let dmgExplE = document.querySelectorAll(".dmgExplE");
    let dmgAreaE = document.querySelectorAll(".dmgAreaE");
    let teleportE = document.querySelectorAll(".teleportE");
    let movabilityE = document.querySelectorAll(".movabilityE");
    let rapidFireE = document.querySelectorAll(".rapidFireE");
    let concussionE = document.querySelectorAll(".concussionE");
    let reviveE = document.querySelectorAll(".reviveE");
    let decoyE = document.querySelectorAll(".decoyE");
    let vulnerableE = document.querySelectorAll(".vulnerableE");
    let suppressionE = document.querySelectorAll(".suppressionE");
    let detainE = document.querySelectorAll(".detainE");

    // Player's color
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

    // Classes              add atribute: country/region
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

        ability(player) {

        }
    }
    class Astra extends Agent {

        ability(player) {
            if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
                addPoint(smoke, player, astra);
                addPoint(smoke, player, astra);
                addPoint(vulnerable, player, astra);
                addPoint(obstacle, player, astra);
                addPoint(slow, player, astra);
                addPoint(daze, player, astra);
            } else if (player === colorP6 || player === colorP7 || player === colorP8 || player === colorP9 || player === colorP10) {
                addPoint(smokeE, player, astra);
                addPoint(smokeE, player, astra);
                addPoint(vulnerableE, player, astra);
                addPoint(obstacleE, player, astra);
                addPoint(slowE, player, astra);
                addPoint(dazeE, player, astra);
            }
        }

    }
    class Breach extends Agent {

        ability(player) {
            if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
                addPoint(flash, player, breach);
                addPoint(flash, player, breach);
                addPoint(daze, player, breach);
                addPoint(daze, player, breach);
                addPoint(dmgExpl, player, breach);
            } else if (player === colorP6 || player === colorP7 || player === colorP8 || player === colorP9 || player === colorP10) {
                addPoint(flashE, player, breach);
                addPoint(flashE, player, breach);
                addPoint(dazeE, player, breach);
                addPoint(dazeE, player, breach);
                addPoint(dmgExplE, player, breach);
            }
        }

    }
    class Brimstone extends Agent {

        ability(player) {
            if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
                addPoint(smoke, player, brimstone);
                addPoint(smoke, player, brimstone);
                addPoint(smoke, player, brimstone);
                addPoint(dmgExpl, player, brimstone);
                addPoint(dmgArea, player, brimstone);
                addPoint(rapidFire, player, brimstone);
                addPoint(rapidFire, player, brimstone);
            } else if (player === colorP6 || player === colorP7 || player === colorP8 || player === colorP9 || player === colorP10) {
                addPoint(smokeE, player, brimstone);
                addPoint(smokeE, player, brimstone);
                addPoint(smokeE, player, brimstone);
                addPoint(dmgExplE, player, brimstone);
                addPoint(dmgAreaE, player, brimstone);
                addPoint(rapidFireE, player, brimstone);
                addPoint(rapidFireE, player, brimstone);
            }
        }

    }
    class Cypher extends Agent {

        ability(player) {
            if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
                addPoint(smoke, player, cypher);
                addPoint(obstacle, player, cypher);
                addPoint(slow, player, cypher);
                addPoint(daze, player, cypher);
                addPoint(track, player, cypher);
                addPoint(track, player, cypher);
                addPoint(reveal, player, cypher);
                addPoint(reveal, player, cypher);
                addPoint(reveal, player, cypher);
            } else if (player === colorP6 || player === colorP7 || player === colorP8 || player === colorP9 || player === colorP10) {
                addPoint(smokeE, player, cypher);
                addPoint(obstacleE, player, cypher);
                addPoint(slowE, player, cypher);
                addPoint(dazeE, player, cypher);
                addPoint(trackE, player, cypher);
                addPoint(trackE, player, cypher);
                addPoint(revealE, player, cypher);
                addPoint(revealE, player, cypher);
                addPoint(revealE, player, cypher);
            }
        }

    }
    class Jett extends Agent {

        ability(player) {
            if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
                addPoint(smoke, player, jett);
                addPoint(dmgExpl, player, jett);
                addPoint(dmgExpl, player, jett);
                addPoint(movability, player, jett);
                addPoint(movability, player, jett);
                addPoint(movability, player, jett);
            } else if (player === colorP6 || player === colorP7 || player === colorP8 || player === colorP9 || player === colorP10) {
                addPoint(smokeE, player, jett);
                addPoint(dmgExplE, player, jett);
                addPoint(dmgExplE, player, jett);
                addPoint(movabilityE, player, jett);
                addPoint(movabilityE, player, jett);
                addPoint(movabilityE, player, jett);
            }
        }

    }
    class Kayo extends Agent {

        ability(player) {
            if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
                addPoint(flash, player, kayo);
                addPoint(flash, player, kayo);
                addPoint(dmgArea, player, kayo);
                addPoint(suppression, player, kayo);
                addPoint(suppression, player, kayo);
                addPoint(track, player, kayo);
                addPoint(revive, player, kayo);
                addPoint(rapidFire, player, kayo);
            } else if (player === colorP6 || player === colorP7 || player === colorP8 || player === colorP9 || player === colorP10) {
                addPoint(flashE, player, kayo);
                addPoint(flashE, player, kayo);
                addPoint(dmgAreaE, player, kayo);
                addPoint(suppressionE, player, kayo);
                addPoint(suppressionE, player, kayo);
                addPoint(trackE, player, kayo);
                addPoint(reviveE, player, kayo);
                addPoint(rapidFireE, player, kayo);
            }
        }

    }
    class Killjoy extends Agent {

        ability(player) {
            if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
                addPoint(vulnerable, player, killjoy);
                addPoint(obstacle, player, killjoy);
                addPoint(obstacle, player, killjoy);
                addPoint(slow, player, killjoy);
                addPoint(track, player, killjoy);
                addPoint(track, player, killjoy);
                addPoint(track, player, killjoy);
                addPoint(dmgExpl, player, killjoy);
                addPoint(dmgArea, player, killjoy);
                addPoint(dmgArea, player, killjoy);
                addPoint(detain, player, killjoy);
            } else if (player === colorP6 || player === colorP7 || player === colorP8 || player === colorP9 || player === colorP10) {
                addPoint(vulnerableE, player, killjoy);
                addPoint(obstacleE, player, killjoy);
                addPoint(obstacleE, player, killjoy);
                addPoint(slowE, player, killjoy);
                addPoint(trackE, player, killjoy);
                addPoint(trackE, player, killjoy);
                addPoint(trackE, player, killjoy);
                addPoint(dmgExplE, player, killjoy);
                addPoint(dmgAreaE, player, killjoy);
                addPoint(dmgAreaE, player, killjoy);
                addPoint(detainE, player, killjoy);
            }
        }

    }
    class Omen extends Agent {

        ability(player) {
            if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
                addPoint(smoke, player, omen);
                addPoint(smoke, player, omen);
                addPoint(blind, player, omen);
                addPoint(track, player, omen);
                addPoint(teleport, player, omen);
                addPoint(movability, player, omen);
                addPoint(movability, player, omen);
            } else if (player === colorP6 || player === colorP7 || player === colorP8 || player === colorP9 || player === colorP10) {
                addPoint(smokeE, player, omen);
                addPoint(smokeE, player, omen);
                addPoint(blindE, player, omen);
                addPoint(trackE, player, omen);
                addPoint(teleportE, player, omen);
                addPoint(movabilityE, player, omen);
                addPoint(movabilityE, player, omen);
            }
        }

    }
    class Phoenix extends Agent {

        ability(player) {
            if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
                addPoint(screen, player, phoenix);
                addPoint(flash, player, phoenix);
                addPoint(flash, player, phoenix);
                addPoint(healSelf, player, phoenix);
                addPoint(healSelf, player, phoenix);
                addPoint(healSelf, player, phoenix);
                addPoint(revive, player, phoenix);
                addPoint(dmgExpl, player, phoenix);
                addPoint(dmgArea, player, phoenix);
                addPoint(movability, player, phoenix);
            } else if (player === colorP6 || player === colorP7 || player === colorP8 || player === colorP9 || player === colorP10) {
                addPoint(screenE, player, phoenix);
                addPoint(flashE, player, phoenix);
                addPoint(flashE, player, phoenix);
                addPoint(healSelfE, player, phoenix);
                addPoint(healSelfE, player, phoenix);
                addPoint(healSelfE, player, phoenix);
                addPoint(reviveE, player, phoenix);
                addPoint(dmgExplE, player, phoenix);
                addPoint(dmgAreaE, player, phoenix);
                addPoint(movabilityE, player, phoenix);
            }
        }

    }
    class Raze extends Agent {

        ability(player) {
            if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
                addPoint(dmgExpl, player, raze);
                addPoint(dmgExpl, player, raze);
                addPoint(dmgExpl, player, raze);
                addPoint(dmgExpl, player, raze);
                addPoint(track, player, raze);
                addPoint(movability, player, raze);
                addPoint(movability, player, raze);
            } else if (player === colorP6 || player === colorP7 || player === colorP8 || player === colorP9 || player === colorP10) {
                addPoint(dmgExplE, player, raze);
                addPoint(dmgExplE, player, raze);
                addPoint(dmgExplE, player, raze);
                addPoint(dmgExplE, player, raze);
                addPoint(trackE, player, raze);
                addPoint(movabilityE, player, raze);
                addPoint(movabilityE, player, raze);
            }
        }

    }
    class Reyna extends Agent {

        ability(player) {
            if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
                addPoint(blind, player, reyna);
                addPoint(blind, player, reyna);
                addPoint(healSelf, player, reyna);
                addPoint(healSelf, player, reyna);
                addPoint(rapidFire, player, reyna);
                addPoint(movability, player, reyna);
                addPoint(movability, player, reyna);
            } else if (player === colorP6 || player === colorP7 || player === colorP8 || player === colorP9 || player === colorP10) {
                addPoint(blindE, player, reyna);
                addPoint(blindE, player, reyna);
                addPoint(healSelfE, player, reyna);
                addPoint(healSelfE, player, reyna);
                addPoint(rapidFireE, player, reyna);
                addPoint(movabilityE, player, reyna);
                addPoint(movabilityE, player, reyna);
            }
        }

    }
    class Sage extends Agent {

        ability(player) {
            if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
                addPoint(obstacle, player, sage);
                addPoint(slow, player, sage);
                addPoint(slow, player, sage);
                addPoint(heal, player, sage);
                addPoint(revive, player, sage);
                addPoint(healSelf, player, sage);
            } else if (player === colorP6 || player === colorP7 || player === colorP8 || player === colorP9 || player === colorP10) {
                addPoint(obstacleE, player, sage);
                addPoint(slowE, player, sage);
                addPoint(slowE, player, sage);
                addPoint(healE, player, sage);
                addPoint(reviveE, player, sage);
                addPoint(healSelfE, player, sage);
            }
        }

    }
    class Skye extends Agent {

        ability(player) {
            if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
                addPoint(flash, player, skye);
                addPoint(flash, player, skye);
                addPoint(blind, player, skye);
                addPoint(heal, player, skye);
                addPoint(concussion, player, skye);
                addPoint(track, player, skye);
                addPoint(track, player, skye);
                addPoint(track, player, skye);
            } else if (player === colorP6 || player === colorP7 || player === colorP8 || player === colorP9 || player === colorP10) {
                addPoint(flashE, player, skye);
                addPoint(flashE, player, skye);
                addPoint(blindE, player, skye);
                addPoint(healE, player, skye);
                addPoint(concussionE, player, skye);
                addPoint(trackE, player, skye);
                addPoint(trackE, player, skye);
                addPoint(trackE, player, skye);
            }
        }

    }
    class Sova extends Agent {

        ability(player) {
            if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
                addPoint(track, player, sova);
                addPoint(track, player, sova);
                addPoint(reveal, player, sova);
                addPoint(reveal, player, sova);
                addPoint(reveal, player, sova);
                addPoint(dmgExpl, player, sova);
                addPoint(dmgExpl, player, sova);
                addPoint(dmgExpl, player, sova);
            } else if (player === colorP6 || player === colorP7 || player === colorP8 || player === colorP9 || player === colorP10) {
                addPoint(trackE, player, sova);
                addPoint(trackE, player, sova);
                addPoint(revealE, player, sova);
                addPoint(revealE, player, sova);
                addPoint(revealE, player, sova);
                addPoint(dmgExplE, player, sova);
                addPoint(dmgExplE, player, sova);
                addPoint(dmgExplE, player, sova);
            }
        }

    }
    class Viper extends Agent {

        ability(player) {
            if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
                addPoint(smoke, player, viper);
                addPoint(smoke, player, viper);
                addPoint(screen, player, viper);
                addPoint(slow, player, viper);
                addPoint(obstacle, player, viper);
                addPoint(dmgExpl, player, viper);
                addPoint(dmgExpl, player, viper);
                addPoint(dmgArea, player, viper);
                addPoint(dmgArea, player, viper);
            } else if (player === colorP6 || player === colorP7 || player === colorP8 || player === colorP9 || player === colorP10) {
                addPoint(smokeE, player, viper);
                addPoint(smokeE, player, viper);
                addPoint(screenE, player, viper);
                addPoint(slowE, player, viper);
                addPoint(obstacleE, player, viper);
                addPoint(dmgExplE, player, viper);
                addPoint(dmgExplE, player, viper);
                addPoint(dmgAreaE, player, viper);
                addPoint(dmgAreaE, player, viper);
            }
        }

    }
    class Yoru extends Agent {

        ability(player) {
            if (player === colorP1 || player === colorP2 || player === colorP3 || player === colorP4 || player === colorP5) {
                addPoint(flash, player, yoru);
                addPoint(flash, player, yoru);
                addPoint(track, player, yoru);
                addPoint(track, player, yoru);
                addPoint(teleport, player, yoru);
                addPoint(teleport, player, yoru);
                addPoint(movability, player, yoru);
                addPoint(movability, player, yoru);
                addPoint(decoy, player, yoru);
                addPoint(decoy, player, yoru);
                addPoint(decoy, player, yoru);
            } else if (player === colorP6 || player === colorP7 || player === colorP8 || player === colorP9 || player === colorP10) {
                addPoint(flashE, player, yoru);
                addPoint(flashE, player, yoru);
                addPoint(trackE, player, yoru);
                addPoint(trackE, player, yoru);
                addPoint(teleportE, player, yoru);
                addPoint(teleportE, player, yoru);
                addPoint(movabilityE, player, yoru);
                addPoint(movabilityE, player, yoru);
                addPoint(decoyE, player, yoru);
                addPoint(decoyE, player, yoru);
                addPoint(decoyE, player, yoru);
            }
        }

    }

    // Agents - Objects
    let astra = new Astra("Astra", "astra", "controller", "#5A2EBD", "clases de habilidades", "clases de habilidades", "clases de habilidades", "clases de habilidades")
    let breach = new Breach("Breach", "breach", "initiator", "#995926", "clases de habilidades", "clases de habilidades", "clases de habilidades", "clases de habilidades")
    let brimstone = new Brimstone("Brimstone", "brimstone", "controller", "#BD4200", "clases de habilidades", "clases de habilidades", "clases de habilidades", "clases de habilidades")
    let cypher = new Cypher("Cypher", "cypher", "sentinel", "#3EF2F9", "clases de habilidades", "clases de habilidades", "clases de habilidades", "clases de habilidades")
    let jett = new Jett("Jett", "jett", "duelist", "#B9C3D9", "clases de habilidades", "clases de habilidades", "clases de habilidades", "clases de habilidades")
    let kayo = new Kayo("KAY/O", "kayo", "initiator", "#1F398B", "clases de habilidades", "clases de habilidades", "clases de habilidades", "clases de habilidades")
    let killjoy = new Killjoy("Killjoy", "killjoy", "sentinel", "#FBDB32", "clases de habilidades", "clases de habilidades", "clases de habilidades", "clases de habilidades")
    let omen = new Omen("Omen", "omen", "controller", "#5857CC", "clases de habilidades", "clases de habilidades", "clases de habilidades", "clases de habilidades")
    let phoenix = new Phoenix("Phoenix", "phoenix", "duelist", "#FBAC4F", "clases de habilidades", "clases de habilidades", "clases de habilidades", "clases de habilidades")
    let raze = new Raze("Raze", "raze", "duelist", "#E06739", "clases de habilidades", "clases de habilidades", "clases de habilidades", "clases de habilidades")
    let reyna = new Reyna("Reyna", "reyna", "duelist", "#9B3587", "clases de habilidades", "clases de habilidades", "clases de habilidades", "clases de habilidades")
    let sage = new Sage("Sage", "sage", "duelist", "#36E4C4", "clases de habilidades", "clases de habilidades", "clases de habilidades", "clases de habilidades")
    let skye = new Skye("Skye", "skye", "initiator", "#4F6539", "clases de habilidades", "clases de habilidades", "clases de habilidades", "clases de habilidades")
    let sova = new Sova("Sova", "sova", "initiator", "#3C598D", "clases de habilidades", "clases de habilidades", "clases de habilidades", "clases de habilidades")
    let viper = new Viper("Viper", "viper", "controller", "#0ED534", "clases de habilidades", "clases de habilidades", "clases de habilidades", "clases de habilidades")
    let yoru = new Yoru("Yoru", "yoru", "duelist", "#0306A5", "clases de habilidades", "clases de habilidades", "clases de habilidades", "clases de habilidades")

    // Adding Points        (acá player tiene que ser colorA1) //   player = color del player/player número x
    function addPoint(ability, player, agent) {
        for (let i = 0; i < ability.length; i++) {
            let point = document.createElement("div");
            ability[i].appendChild(point);
            point.style.backgroundColor = agent.color;
            point.style.borderBottomColor = player;
            point.className = player;
        } 
    }

    // WORK IN PROGRESS W I P
    function enableOption () {
        let enable = document.querySelectorAll('["value="'+agent.variable+'"]');
        enable.style.display = "block";
    }
    function disableOption () {
        let disable = document.querySelectorAll('["value="'+agent.variable+'"]');
        disable.style.display = "none";
    }

    // Agent Selection
    function agentSelection(option, agent, player) {
        if (option === "astra") {
            agent.className = '';
            agent.classList.add(astra.variable);
            agent.classList.add(astra.clase);
            document.querySelectorAll(paraClases + player).forEach(el => el.remove());
            astra.ability(player);
            

        } else if (option === "breach") {
            agent.className = '';
            agent.classList.add(breach.variable);
            agent.classList.add(breach.clase);
            document.querySelectorAll(paraClases + player).forEach(el => el.remove());
            breach.ability(player);

        } else if (option === "brimstone") {
            agent.className = '';
            agent.classList.add(brimstone.variable);
            agent.classList.add(brimstone.clase);
            document.querySelectorAll(paraClases + player).forEach(el => el.remove());

            brimstone.ability(player);

        } else if (option === "cypher") {
            agent.className = '';
            agent.classList.add(cypher.variable);
            agent.classList.add(cypher.clase);
            document.querySelectorAll(paraClases + player).forEach(el => el.remove());

            cypher.ability(player);

        } else if (option === "jett") {
            agent.className = '';
            agent.classList.add(jett.variable);
            agent.classList.add(jett.clase);
            document.querySelectorAll(paraClases + player).forEach(el => el.remove());

            jett.ability(player);

        } else if (option === "kayo") {
            agent.className = '';
            agent.classList.add(kayo.variable);
            agent.classList.add(kayo.clase);
            document.querySelectorAll(paraClases + player).forEach(el => el.remove());

            kayo.ability(player);

        } else if (option === "killjoy") {
            agent.className = '';
            agent.classList.add(killjoy.variable);
            agent.classList.add(killjoy.clase);
            document.querySelectorAll(paraClases + player).forEach(el => el.remove());

            killjoy.ability(player);

        } else if (option === "omen") {
            agent.className = '';
            agent.classList.add(omen.variable);
            agent.classList.add(omen.clase);
            document.querySelectorAll(paraClases + player).forEach(el => el.remove());

            omen.ability(player);

        } else if (option === "phoenix") {
            agent.className = '';
            agent.classList.add(phoenix.variable);
            agent.classList.add(phoenix.clase);
            document.querySelectorAll(paraClases + player).forEach(el => el.remove());

            phoenix.ability(player);

        } else if (option === "raze") {
            agent.className = '';
            agent.classList.add(raze.variable);
            agent.classList.add(raze.clase);
            document.querySelectorAll(paraClases + player).forEach(el => el.remove());

            raze.ability(player);

        } else if (option === "reyna") {
            agent.className = '';
            agent.classList.add(reyna.variable);
            agent.classList.add(reyna.clase);
            document.querySelectorAll(paraClases + player).forEach(el => el.remove());

            reyna.ability(player);

        } else if (option === "sage") {
            agent.className = '';
            agent.classList.add(sage.variable);
            agent.classList.add(sage.clase);
            document.querySelectorAll(paraClases + player).forEach(el => el.remove());

            sage.ability(player);

        } else if (option === "skye") {
            agent.className = '';
            agent.classList.add(skye.variable);
            agent.classList.add(skye.clase);
            document.querySelectorAll(paraClases + player).forEach(el => el.remove());

            skye.ability(player);

        } else if (option === "sova") {
            agent.className = '';
            agent.classList.add(sova.variable);
            agent.classList.add(sova.clase);
            document.querySelectorAll(paraClases + player).forEach(el => el.remove());

            sova.ability(player);

        } else if (option === "viper") {
            agent.className = '';
            agent.classList.add(viper.variable);
            agent.classList.add(viper.clase);
            document.querySelectorAll(paraClases + player).forEach(el => el.remove());

            viper.ability(player);

        } else if (option === "yoru") {
            agent.className = '';
            agent.classList.add(yoru.variable);
            agent.classList.add(yoru.clase);
            document.querySelectorAll(paraClases + player).forEach(el => el.remove());

            yoru.ability(player);
        } else {
            agent.className = '';
            document.querySelectorAll(paraClases + player).forEach(el => el.remove());
        }

    }

    // CLasses Selection W I P
    function classesSelection() {
        let controller = document.querySelectorAll(".controller");
        let sentinel = document.querySelectorAll(".sentinel");
        let duelist = document.querySelectorAll(".duelist");
        let initiator = document.querySelectorAll(".iniator");
        
        if (controller.length === 1) {
            console.log("Controllers check!");
        } else {
            console.log("Falta 1 Controller");
        }
        if (duelist.length === 0) {
            console.log("Falta 1 o 2 duelista/s!");
        } else if (duelist.length === 2) {
            console.log("Duelista/s check!");
        } else if (duelist.length === 1 && initiator === 2) {
            console.log("Duelista check!");
        }
        


    }

    //Player selects an Agent, adds certain points to abilities
    let paraClases = ".";

    let agent1 = document.querySelector("#agent1");
    let player1 = document.querySelector("#player1");
    player1.addEventListener('change', function () {
        let option1 = this.options[this.selectedIndex].value;
        agentSelection(option1, agent1, colorP1);
        classesSelection();
        
    });

    let agent2 = document.querySelector("#agent2");
    let player2 = document.querySelector("#player2");
    player2.addEventListener('change', function () {
        let option2 = this.options[this.selectedIndex].value;
        agentSelection(option2, agent2, colorP2);
        classesSelection();
    });

    let agent3 = document.querySelector("#agent3");
    let player3 = document.querySelector("#player3");
    player3.addEventListener('change', function () {
        let option3 = this.options[this.selectedIndex].value;
        agentSelection(option3, agent3, colorP3);
        classesSelection();

    });

    let agent4 = document.querySelector("#agent4");
    let player4 = document.querySelector("#player4");
    player4.addEventListener('change', function () {
        let option4 = this.options[this.selectedIndex].value;
        agentSelection(option4, agent4, colorP4);
        classesSelection();
    });

    let agent5 = document.querySelector("#agent5");
    let player5 = document.querySelector("#player5");
    player5.addEventListener('change', function () {
        let option5 = this.options[this.selectedIndex].value;
        agentSelection(option5, agent5, colorP5);
        classesSelection();
    });

    let agent6 = document.querySelector("#agent6");
    let player6 = document.querySelector("#player6");
    player6.addEventListener('change', function () {
        let option6 = this.options[this.selectedIndex].value;
        agentSelection(option6, agent6, colorP6);
        classesSelection();
    });

    let agent7 = document.querySelector("#agent7");
    let player7 = document.querySelector("#player7");
    player7.addEventListener('change', function () {
        let option7 = this.options[this.selectedIndex].value;
        agentSelection(option7, agent7, colorP7);
        classesSelection();
    });

    let agent8 = document.querySelector("#agent8");
    let player8 = document.querySelector("#player8");
    player8.addEventListener('change', function () {
        let option8 = this.options[this.selectedIndex].value;
        agentSelection(option8, agent8, colorP8);
        classesSelection();
    });

    let agent9 = document.querySelector("#agent9");
    let player9 = document.querySelector("#player9");
    player9.addEventListener('change', function () {
        let option9 = this.options[this.selectedIndex].value;
        agentSelection(option9, agent9, colorP9);
        classesSelection();
    });

    let agent10 = document.querySelector("#agent10");
    let player10 = document.querySelector("#player10");
    player10.addEventListener('change', function () {
        let option10 = this.options[this.selectedIndex].value;
        agentSelection(option10, agent10, colorP10);
        classesSelection();
    });

    // Basic - Advanced Section
    let basic = document.querySelector(".basic");
    basic.style.display = "flex"

    let advanced = document.querySelector(".advanced");
    let btnBasicAdvanced = document.querySelector(".btnBasicAdvanced");
    
    btnBasicAdvanced.addEventListener('click', function() {
        if (basic.style.display === "flex") {
            basic.style.display = "none";
            advanced.style.display = "flex";
        } else if (advanced.style.display = "flex") {
            basic.style.display = "flex";
            advanced.style.display = "none";
        }
        
    })
}
