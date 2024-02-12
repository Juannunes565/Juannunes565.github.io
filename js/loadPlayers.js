function loadPlayers(){
    let player1 = localStorage.getItem("player1");
    let player2 = localStorage.getItem("player2");
    let player3 = localStorage.getItem("player3");
    let player4 = localStorage.getItem("player4");

    let players = [player1, player2, player3, player4];
    
    let score = document.getElementById("score");

    players.forEach(function(player, index){
        let p = document.createElement("p");
        let puntuacion = localStorage.getItem("score" + (index+1));
        console.log(puntuacion);

        let text = document.createTextNode(player + ": " + puntuacion);
        p.appendChild(text);
        score.appendChild(p);
    })

}

loadPlayers();
