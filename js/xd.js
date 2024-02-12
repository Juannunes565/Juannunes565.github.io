function tieneFilasColumnasIguales(matriz) {
    // Verificar filas
    for (let i = 0; i < matriz.length; i++) {
        let fila = matriz[i];
        if (tieneElementosIguales(fila)) {
            return true;
        }
    }

    // Verificar columnas
    for (let j = 0; j < matriz[0].length; j++) {
        let columna = [];
        for (let i = 0; i < matriz.length; i++) {
            columna.push(matriz[i][j]);
        }
        if (tieneElementosIguales(columna)) {
            return true;
        }
    }

    return false;
}

function tieneElementosIguales(arr) {
    return arr.every(function(elemento) {
        return elemento === arr[0];
    });
}

// Ejemplo de uso
const matriz = [
    [1, 2, 3],
    [1, 5, 6],
    [1, 8, 9]
];

if (tieneFilasColumnasIguales(matriz)) {
    console.log("La matriz tiene filas o columnas con los mismos valores.");
} else {
    console.log("La matriz no tiene filas o columnas con los mismos valores.");
}
