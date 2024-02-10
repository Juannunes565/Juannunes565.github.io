function loadPlayers(){
    let player1 = localStorage.getItem("player1");
    let player2 = localStorage.getItem("player2");
    let player3 = localStorage.getItem("player3");
    let player4 = localStorage.getItem("player4");

    let players = [player1, player2, player3, player4];
    
    let score = document.getElementById("score");

    players.forEach(function(player){
        let p = document.createElement("p");
        let text = document.createTextNode(player + ": 0");
        p.appendChild(text);
        score.appendChild(p);
    })
}

loadPlayers();