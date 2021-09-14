var val1 = 0;
var val2 = 0;
var val3 = 0;
var ent=0;
function UserException(message) {
    var textt = document.getElementById("ntext").childNodes[0];
    document.getElementById("ntext").removeChild(textt);
    var text = document.createTextNode(message);
    document.getElementById("ntext").appendChild(text);



}
function contraException(message) {
    var textt = document.getElementById("ctext").childNodes[0];
    document.getElementById("ctext").removeChild(textt);
    var text = document.createTextNode(message);
    document.getElementById("ctext").appendChild(text);



}
function emailException(message) {
    var textt = document.getElementById("etext").childNodes[0];
    document.getElementById("etext").removeChild(textt);
    var text = document.createTextNode(message);
    document.getElementById("etext").appendChild(text);



}

function nombree(nombre) {

    if (nombre.length < 8) {

         UserException("Tu nombre es muy corto tiene que tener 8 o mas caracteres");
        return 0;

    } else if (nombre.length > 24) {

         UserException("Tu nombre es muy largo tiene que tener menos de 24 caracteres");
        return 0;

    } else if (tiene_numeros(nombre) == 0) {

         UserException("Debes usar algun caracter numerico en el nombre");
        return 0;
    } else {
        return 1;
    }

}


function tiene_numeros(texto) {
    var numeros = "0123456789";
    for (i = 0; i < texto.length; i++) {
        if (numeros.indexOf(texto.charAt(i), 0) != -1) {
            return 1;
        }
    }
    return 0;
}
function contrasenna(nombre) {

    if (nombre.length < 8) {

         contraException("Tu contraseña es muy corta tiene que tener 8 o mas caracteres");
        return 0;

    } else if (nombre.length > 24) {

         contraException("Tu contraseña es muy larga tiene que tener menos de 24 caracteres");
        return 0;

    } else if (tiene_numeros(nombre) == 0) {

         contraException("Debes usar algun caracter numerico en la contraseña");
        return 0;
    } else {
        return 1;
    }

}

function email(nombre) {
   
    if (/^[-\w.%+]{1,24}@(?:[A-Z0-9-]{1,63}\.){1,24}[A-Z]{2,5}$/i.test(nombre)) {
        
        return 1;
    } else {
         emailException("La dirección de email es incorrecta.");
        return 0;
    }
}

function tiene_numeros(texto) {
    var numeros = "0123456789";
    for (i = 0; i < texto.length; i++) {
        if (numeros.indexOf(texto.charAt(i), 0) != -1) {
            return 1;
        }
    }
    return 0;
}
function valido() {


    if ((val1 == 1) && (val2 == 1) && (val3 == 1)) {
       if(document.getElementById("submit")==null){
       ent=1;
        var submit = document.createElement("input");
        submit.type = "submit";
        submit.name = "aceptar";
        submit.id = "submit";
        submit.value = "registrarse";

        document.getElementById("regis").appendChild(submit);
    }
    }else if(ent==1){
       
        ent=0;
        
        document.getElementById("submit").remove();
    }
}
function funcion_primera() {


    document.getElementById("nombre").addEventListener("keyup", function () {

        if (nombree(document.getElementById("nombre").value) == 1) {

            var textt = document.getElementById("ntext").childNodes[0];
            document.getElementById("ntext").removeChild(textt);
            var text = document.createTextNode("*Nombre de usuario valido");
            document.getElementById("ntext").appendChild(text);
            val1 = 1;
            valido();
        }else{val1=0;valido();}


    })
    document.getElementById("contrasena").addEventListener("keyup", function () {

        if (contrasenna(document.getElementById("contrasena").value) == 1) {
            var textt = document.getElementById("ctext").childNodes[0];
            document.getElementById("ctext").removeChild(textt);
            var text = document.createTextNode("*Contraseña de usuario valida");
            document.getElementById("ctext").appendChild(text);
            val2 = 1;
            valido();
        }else{val2=0;valido();}


    })
    document.getElementById("email").addEventListener("keyup", function () {

        if (email(document.getElementById("email").value) == 1) {
          
            var textt = document.getElementById("etext").childNodes[0];
            document.getElementById("etext").removeChild(textt);
            var text = document.createTextNode("*Email de usuario valido");
            document.getElementById("etext").appendChild(text);
            val3 = 1;
            valido();
        }else{val3=0;valido();}


    })




}


function funciones() {
    funcion_primera();

}

window.onload = funciones;


