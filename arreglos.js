function generarMatriz(){
    var arreglo = document.getElementById("slc").value;
    var matriz = new Array(arreglo);

    for(var i=0; i<arreglo; i++){
        matriz[i] = new Array();
    }

    for(var i=0; i<arreglo; i++){
        for(var j=0; j<arreglo; j++){
            if(i==j){
                matriz[i][j] = 1;
            } else{
                matriz[i][j] = 0;
            }
        }
    }
    //console.log(matriz);
    generarTabla(matriz);
}

function generarTabla(mat){
    var tabla = document.getElementById("tabla");
    var tlbody = document.createElement('tbody');
    mat.forEach(function(row){
        var fila = document.createElement('tr');
        row.forEach(function(cell){
            var columna = document.createElement('td');
            columna.appendChild(document.createTextNode(cell));
            fila.appendChild(columna);
        });
        tlbody.appendChild(fila);
    });
    tabla.appendChild(tlbody);
    document.body.appendChild(tabla);
}