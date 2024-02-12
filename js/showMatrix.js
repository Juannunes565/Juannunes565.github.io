function showMatrix(){
    let matrix1 = JSON.parse(localStorage.getItem("matrix1"));
    let matrix2 = JSON.parse(localStorage.getItem("matrix2"));
    let matrix3 = JSON.parse(localStorage.getItem("matrix3"));
    let matrix4 = JSON.parse(localStorage.getItem("matrix4"));
    let size = localStorage.getItem("size");

    
    let allMatrix = [matrix4, matrix3, matrix2, matrix1]
    allMatrix.forEach(function(matrix, index){

        //Crear el carton
        let box = document.createElement("div");
        box.className = "box";
        box.id = "box" + index;
    
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

    })

}

showMatrix();