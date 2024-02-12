let play = document.getElementById("play");
let back = document.getElementById("back");
let numeros = []

let matrix1 = JSON.parse(localStorage.getItem("matrix1"));
let matrix2 = JSON.parse(localStorage.getItem("matrix2"));
let matrix3 = JSON.parse(localStorage.getItem("matrix3"));
let matrix4 = JSON.parse(localStorage.getItem("matrix4"));
let size = localStorage.getItem("size");

let allMatrix = [matrix1, matrix2, matrix3, matrix4];
let counter = 0;

back.addEventListener("click", function(){
    window.location.href = "main.html";
})

play.addEventListener("click", function(){
    counter++;
    document.getElementById("turno").innerHTML = "Turno: " + counter;

    var score1 = columnasIguales(matrix1) + filasIguales(matrix1);
    var score2 = columnasIguales(matrix2) + filasIguales(matrix2);
    var score3 = columnasIguales(matrix3) + filasIguales(matrix3);
    var score4 = columnasIguales(matrix4) + filasIguales(matrix4);

    console.log(score1);
    console.log(score2);
    console.log(score3);
    console.log(score4);

    if(counter == 25){
        alert("El juego ha acabado");
        localStorage.setItem("score1", parseInt(localStorage.getItem("score1")) + score1);
        localStorage.setItem("score2", parseInt(localStorage.getItem("score2")) + score2);
        localStorage.setItem("score3", parseInt(localStorage.getItem("score3")) + score3);
        localStorage.setItem("score4", parseInt(localStorage.getItem("score4")) + score4);
        window.location.href = "main.html";
    }

    if(cartonLleno(matrix1)){
        localStorage.setItem("score1", localStorage.getItem("score1") + score1 + 5);
        window.location.href = "main.html";
    }

    if(cartonLleno(matrix2)){
        localStorage.setItem("score2", localStorage.getItem("score2") + score2 + 5);       
        window.location.href = "main.html";
    }

    if(cartonLleno(matrix3)){
        localStorage.setItem("score3", localStorage.getItem("score3") + score3 + 5);    
        window.location.href = "main.html";
    }

    if(cartonLleno(matrix4)){
        localStorage.setItem("score4", localStorage.getItem("score4") + score4 + 5);
        window.location.href = "main.html";
    }
    

    let numeroAleatorio = parseInt(Math.random() * (50 - 1) + 1);
    while(numeros.includes(numeroAleatorio)){
        numeroAleatorio = parseInt(Math.random() * (50 - 1) + 1);
    }

    numeros.push(numeroAleatorio);
    document.getElementById("numero").innerHTML = numeroAleatorio;

    for (let i = 0; i < matrix1.length; i++) {
        
        for (let j = 0; j < matrix1.length; j++) {
            
            let element1 = matrix1[i][j];
            let element2 = matrix2[i][j];
            let element3 = matrix3[i][j];
            let element4 = matrix4[i][j];

            let index = (size*i) + j;
            if(element1 == numeroAleatorio){
                matrix1[i][j] = "x"; 
                let box = document.getElementById("box3");
                box.children[index].className = "element-selected";          
            }
            
            else if(element2 == numeroAleatorio){
                matrix2[i][j] = "x";
                let box = document.getElementById("box2");
                box.children[index].className = "element-selected";
            }

            else if(element3 == numeroAleatorio){
                matrix3[i][j] = "x";
                let box = document.getElementById("box1");
                box.children[index].className = "element-selected";
            }
            
            else if(element4 == numeroAleatorio){
                matrix4[i][j] = "x";
                let box = document.getElementById("box0");
                box.children[index].className = "element-selected";
            }

            
            
        }
        
    }

})




function columnasIguales(matriz) {
    let columnasIguales = 0;
    for (let j = 0; j < matriz[0].length; j++) {
        let elementosUnicos = new Set();

        for (let i = 0; i < matriz.length; i++) {
            elementosUnicos.add(matriz[i][j]);
        }

        if (elementosUnicos.size === 1) {
            columnasIguales++;
        }
    }
    return columnasIguales;
}


function filasIguales(matriz) {
    let filasIguales = 0;

    for (let i = 0; i < matriz.length; i++) {
        let elementosUnicos = new Set(matriz[i]);

        if (elementosUnicos.size === 1) {
            filasIguales++;
        }
    }
    return filasIguales;
}

function cartonLleno(matriz) {
    const primerElemento = matriz[0][0];
    
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            
            if (matriz[i][j] !== primerElemento) {
                return false;
            }
        }
    }

    return true;
}



