function createMatrix(){
    for (let i = 0; i < 4; i++) {
        var size = localStorage.getItem("size");
    
        var matrix = [];
        for (let i = 0; i < size; i++){
            var row = [];
            for (let j = 0; j < size; j++){
                let numeroAleatorio = Math.random() * (50 - 1) + 1;
                row.push(parseInt(numeroAleatorio));
            }
            matrix.push(row);
        }

        console.log(matrix)
        
        localStorage.setItem("matrix" + (i+1), JSON.stringify(matrix));
    }  
    /*  
        //Crear el carton
        let box = document.createElement("div");
        box.className = "box";

        //Establecer la cantidad de columnas
        let str = ""
        for (let i = 0; i < size; i++){
            if(i == size-1){
                str += "auto";
            }
            else{
                str += "auto ";
            }
        }
        box.style.gridTemplateColumns = str;

        //Agregar los numeros al carton
        matrix.forEach(function(row){
            row.forEach(function(elements){
                let v = document.createElement("div");
                v.innerHTML = elements;
                v.className = "element";
                box.appendChild(v);
            })
        })
        
        //Agregar el carton al contenedor
        document.getElementById("container").appendChild(box);
    */    
}

createMatrix();
