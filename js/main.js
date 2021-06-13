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
       
    

    let player2 = document.querySelector("#player1");
    let option2 = player2.options[player2.selectedIndex].value;

    let player3 = document.querySelector("#player1");
    let option3 = player3.options[player3.selectedIndex].value;

    let player4 = document.querySelector("#player1");
    let option4 = player4.options[player4.selectedIndex].value;

    let you = document.querySelector("#player1");
    let youroption = you.options[you.selectedIndex].value;
    
    


}


 


