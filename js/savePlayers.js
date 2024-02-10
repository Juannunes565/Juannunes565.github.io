document.getElementById("form").addEventListener('submit', function(event){
    event.preventDefault();

    const player1 = document.getElementById('player1').value;
    const player2 = document.getElementById('player2').value;
    const player3 = document.getElementById('player3').value;
    const player4 = document.getElementById('player4').value;

    
    const radioButtons = document.querySelectorAll('input[name="size"]');
    console.log(radioButtons);
    
    let sizeBox = null;
    
    radioButtons.forEach(element => {
        if(element.checked){
            sizeBox = element.value;
        }
    });
    
    if(sizeBox == null){
        alert("Selecciona un tamaño para los cartones");
    }
    else if(player1 == "" || player2 == "" || player3 == "" || player4 == ""){
        alert("No has ingresado todos los jugadores");
    }
    else{
        localStorage.setItem("player1", player1);
        localStorage.setItem("player2", player2);
        localStorage.setItem("player3", player3);
        localStorage.setItem("player4", player4);
        localStorage.setItem("size", sizeBox);
    }

    window.location.href = "main.html";

})


