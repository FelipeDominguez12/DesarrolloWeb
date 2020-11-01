function validar(){
    
    var text = document.getElementById("txtMensaje").value;
    
    var rfc = document.getElementById("txtRFC").value;
    var cadena = /[A-Z][A|E|I|O|U][A-Z]{2}[0-9]{6}[A-Z|0-9]{3}/g;
    var Empresa = /^[A-Z]{3}[0-9]{6}[A-Z|0-9]{3}$/g;

    var validacionRFC = cadena.test(rfc);
    var validacionRFC1 = Empresa.test(rfc);

    var identificador =/^[A-Za-z$_]+[A-Za-z0-9_$^\S]*$/gi;
    var validacionIden = identificador.test(text);
   

    if(rfc==""){
        alert("Favor de Introducir RFC");
    } else if((validacionRFC|validacionRFC1)==true){
        alert("El RFC: "+rfc+" es Valido");
        if(validacionRFC1){
            document.getElementById("Resultado").innerHTML="\
            El RFC "+rfc+" corresponde a Persona Moral"+"<br>"+
            "Identificadores de JavaScript: "+validacionIden;
        } else if(validacionRFC){
            document.getElementById("Resultado").innerHTML="\
            El RFC "+rfc+" corresponde a Persona Física"+"<br>"+
            "Identificadores de JavaScript: "+validacionIden;
        }
    } else{
        alert("Introduzca un RFC válido");
    }
}