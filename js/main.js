window.onload = () => {
    
    let agent1 = document.querySelector("#agent1");
    let player1 = document.querySelector("#player1");
    
    player1.addEventListener('change', function() {
        let option1 = this.options[this.selectedIndex].value;
        
        if (option1 === "astra") {
            agent1.className = '';
            agent1.classList.add("astra");    
        } else if (option1 === "breach") {
            agent1.className = '';
            agent1.classList.add("breach");
        }else if (option1 === "brimstone") {
            agent1.className = '';
            agent1.classList.add("brimstone");
        }else if (option1 === "cypher") {
            agent1.className = '';
            agent1.classList.add("cypher");
        }else if (option1 === "jett") {
            agent1.className = '';
            agent1.classList.add("jett");
        }else if (option1 === "killjoy") {
            agent1.className = '';
            agent1.classList.add("killjoy");
        }else if (option1 === "omen") {
            agent1.className = '';
            agent1.classList.add("omen");
        }else if (option1 === "phoenix") {
            agent1.className = '';
            agent1.classList.add("phoenix");
        }else if (option1 === "raze") {
            agent1.className = '';
            agent1.classList.add("raze");
        }else if (option1 === "reyna") {
            agent1.className = '';
            agent1.classList.add("reyna");
        }else if (option1 === "sage") {
            agent1.className = '';
            agent1.classList.add("sage");
        }else if (option1 === "skye") {
            agent1.className = '';
            agent1.classList.add("skye");
        }else if (option1 === "sova") {
            agent1.className = '';
            agent1.classList.add("sova");
        }else if (option1 === "viper") {
            agent1.className = '';
            agent1.classList.add("viper");
        }else if (option1 === "yoru") {
            agent1.className = '';
            agent1.classList.add("yoru");
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
        } else if (option2 === "breach") {
            agent2.className = '';
            agent2.classList.add("breach");
        }else if (option2 === "brimstone") {
            agent2.className = '';
            agent2.classList.add("brimstone");
        }else if (option2 === "cypher") {
            agent2.className = '';
            agent2.classList.add("cypher");
        }else if (option2 === "jett") {
            agent2.className = '';
            agent2.classList.add("jett");
        }else if (option2 === "killjoy") {
            agent2.className = '';
            agent2.classList.add("killjoy");
        }else if (option2 === "omen") {
            agent2.className = '';
            agent2.classList.add("omen");
        }else if (option2 === "phoenix") {
            agent2.className = '';
            agent2.classList.add("phoenix");
        }else if (option2 === "raze") {
            agent2.className = '';
            agent2.classList.add("raze");
        }else if (option2 === "reyna") {
            agent2.className = '';
            agent2.classList.add("reyna");
        }else if (option2 === "sage") {
            agent2.className = '';
            agent2.classList.add("sage");
        }else if (option2 === "skye") {
            agent2.className = '';
            agent2.classList.add("skye");
        }else if (option2 === "sova") {
            agent2.className = '';
            agent2.classList.add("sova");
        }else if (option2 === "viper") {
            agent2.className = '';
            agent2.classList.add("viper");
        }else if (option2 === "yoru") {
            agent2.className = '';
            agent2.classList.add("yoru");
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
        } else if (option3 === "breach") {
            agent3.className = '';
            agent3.classList.add("breach");
        }else if (option3 === "brimstone") {
            agent3.className = '';
            agent3.classList.add("brimstone");
        }else if (option3 === "cypher") {
            agent3.className = '';
            agent3.classList.add("cypher");
        }else if (option3 === "jett") {
            agent3.className = '';
            agent3.classList.add("jett");
        }else if (option3 === "killjoy") {
            agent3.className = '';
            agent3.classList.add("killjoy");
        }else if (option3 === "omen") {
            agent3.className = '';
            agent3.classList.add("omen");
        }else if (option3 === "phoenix") {
            agent3.className = '';
            agent3.classList.add("phoenix");
        }else if (option3 === "raze") {
            agent3.className = '';
            agent3.classList.add("raze");
        }else if (option3 === "reyna") {
            agent3.className = '';
            agent3.classList.add("reyna");
        }else if (option3 === "sage") {
            agent3.className = '';
            agent3.classList.add("sage");
        }else if (option3 === "skye") {
            agent3.className = '';
            agent3.classList.add("skye");
        }else if (option3 === "sova") {
            agent3.className = '';
            agent3.classList.add("sova");
        }else if (option3 === "viper") {
            agent3.className = '';
            agent3.classList.add("viper");
        }else if (option3 === "yoru") {
            agent3.className = '';
            agent3.classList.add("yoru");
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
        } else if (option4 === "breach") {
            agent4.className = '';
            agent4.classList.add("breach");
        }else if (option4 === "brimstone") {
            agent4.className = '';
            agent4.classList.add("brimstone");
        }else if (option4 === "cypher") {
            agent4.className = '';
            agent4.classList.add("cypher");
        }else if (option4 === "jett") {
            agent4.className = '';
            agent4.classList.add("jett");
        }else if (option4 === "killjoy") {
            agent4.className = '';
            agent4.classList.add("killjoy");
        }else if (option4 === "omen") {
            agent4.className = '';
            agent4.classList.add("omen");
        }else if (option4 === "phoenix") {
            agent4.className = '';
            agent4.classList.add("phoenix");
        }else if (option4 === "raze") {
            agent4.className = '';
            agent4.classList.add("raze");
        }else if (option4 === "reyna") {
            agent4.className = '';
            agent4.classList.add("reyna");
        }else if (option4 === "sage") {
            agent4.className = '';
            agent4.classList.add("sage");
        }else if (option4 === "skye") {
            agent4.className = '';
            agent4.classList.add("skye");
        }else if (option4 === "sova") {
            agent4.className = '';
            agent4.classList.add("sova");
        }else if (option4 === "viper") {
            agent4.className = '';
            agent4.classList.add("viper");
        }else if (option4 === "yoru") {
            agent4.className = '';
            agent4.classList.add("yoru");
        }

        console.log(option4);
    });

    let youragent = document.querySelector("#youragent");
    let you = document.querySelector("#you");
    
    you.addEventListener('change', function() {
        let option5 = this.options[this.selectedIndex].value;
        
        if (option5 === "astra") {
            youragent.className = '';
            youragent.classList.add("astra");    
        } else if (option5 === "breach") {
            youragent.className = '';
            youragent.classList.add("breach");
        }else if (option5 === "brimstone") {
            youragent.className = '';
            youragent.classList.add("brimstone");
        }else if (option5 === "cypher") {
            youragent.className = '';
            youragent.classList.add("cypher");
        }else if (option5 === "jett") {
            youragent.className = '';
            youragent.classList.add("jett");
        }else if (option5 === "killjoy") {
            youragent.className = '';
            youragent.classList.add("killjoy");
        }else if (option5 === "omen") {
            youragent.className = '';
            youragent.classList.add("omen");
        }else if (option5 === "phoenix") {
            youragent.className = '';
            youragent.classList.add("phoenix");
        }else if (option5 === "raze") {
            youragent.className = '';
            youragent.classList.add("raze");
        }else if (option5 === "reyna") {
            youragent.className = '';
            youragent.classList.add("reyna");
        }else if (option5 === "sage") {
            youragent.className = '';
            youragent.classList.add("sage");
        }else if (option5 === "skye") {
            youragent.className = '';
            youragent.classList.add("skye");
        }else if (option5 === "sova") {
            youragent.className = '';
            youragent.classList.add("sova");
        }else if (option5 === "viper") {
            youragent.className = '';
            youragent.classList.add("viper");
        }else if (option5 === "yoru") {
            youragent.className = '';
            youragent.classList.add("yoru");
        }

        console.log(option5);
    });

}


 


