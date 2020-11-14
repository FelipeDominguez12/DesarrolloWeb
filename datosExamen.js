window.onload = function() {
    document.getElementById("lblNombre").innerHTML += "<strong>Felipe de Jesus Dominguez Hernandez</strong>";
    document.getElementById("lblControl").innerHTML += "<strong>17390334</strong>";

    var personajes = [
        "Shrek",
        "Princesa Fiona",
        "Lord Farquaad",
        "Burro",
        "Jengibre"
    ];
    
    for(var i=0; i<personajes.length; i++){
        var fila="<tr><td>"+personajes[i]+"</td></tr>";
        var dato = document.createElement("TR");
        dato.innerHTML=fila;
        document.getElementById("tblPersonajesFavoritos").appendChild(dato);
    }

    var peliculas = [
        "Shrek",
        "Venom",
        "Aquaman",
        "Scooby",
        "Rapidos y Furiosos",
        "Bad Boys",
        "IT",
        "Jurassic World: El Reino Caido",
        "Creed II: Defendiendo el Legado",
        "Guasón"
    ];

    var arreglo = "";

    for(var i=0; i<peliculas.length; i++){
        arreglo += "<li>"+peliculas[i]+"</li>";
    }
    document.getElementById("listas").innerHTML=arreglo;
}

function personajes(){
    var personajeNuevo = document.getElementById("txtPersonajes").value;

    var filaNueva = "<tr><td>"+personajeNuevo+"</td></tr>";
    var nuevo = document.createElement("TR");
   	nuevo.innerHTML=filaNueva;
    document.getElementById("tblPersonajesFavoritos").appendChild(nuevo);
}

function eliminarPelicula(){
    var valor = document.getElementById("txtNumero").value;
    var numero = document.getElementById("listas").getElementsByTagName("li")[valor-1];
    if (valor=="") {
        alert("Favor de Ingresar el Numero de la Pelicula a Eliminar");
    } else {
        numero.parentNode.removeChild(numero);
    }
}