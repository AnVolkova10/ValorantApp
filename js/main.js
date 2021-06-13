window.onload = () => {
    document.querySelector("form").onsubmit = function () {
        location.href = "principal.html";
    };
    let agent1 = document.querySelector(".agent1");
    let player1 = document.querySelector("#player1");
    let option1 = player1.options[player1.selectedIndex].value;
    
    if (option1 === "astra") {
        agent1.classList.add("astra");
    }

    let player2 = document.querySelector("#player1");
    let option2 = player2.options[player2.selectedIndex].value;

    let player3 = document.querySelector("#player1");
    let option3 = player3.options[player3.selectedIndex].value;

    let player4 = document.querySelector("#player1");
    let option4 = player4.options[player4.selectedIndex].value;

    let you = document.querySelector("#player1");
    let youroption = you.options[you.selectedIndex].value;
    
    console.log(option1);


}


 // get option selected


