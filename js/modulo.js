//variable que se usara para la posicion actual
var posicionn;
//funcion de micuenta que cambiar el form de opciones a cambiodecontraseña
function modificar() {

    document.getElementById("contenedor").remove();
    let contenedor = document.createElement('form');
    let div = document.createElement('div');
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    contenedor.setAttribute("action", "micuenta.php");
    contenedor.setAttribute("method", "POST");
    contenedor.setAttribute("id", "contenedor");
    let br = document.createElement('br');
    let br1 = document.createElement('br');
    let contratxt = document.createElement('span');
    let txt = document.createTextNode("Introduzca su contraseña actual");
    contratxt.appendChild(txt);
    let contra = document.createElement('input');
    contra.setAttribute("type", "text");
    contra.setAttribute("id", "contra");
    contra.setAttribute("name", "contra");
    contra.required = true;
    let nuevacontratxt = document.createElement('span');
    txt = document.createTextNode("Introduzca su contraseña nueva");
    nuevacontratxt.appendChild(txt);
    let contranueva = document.createElement('input');
    contranueva.setAttribute("type", "text");
    contranueva.setAttribute("id", "contranueva");
    contranueva.setAttribute("name", "contranueva");
    contranueva.required = true;
    let submit = document.createElement('input');
    submit.setAttribute("type", "submit");
    submit.setAttribute("id", "cambiarcontra");
    submit.setAttribute("name", "cuenta");
    submit.setAttribute("value", "Cambiar Contraseña");

    div.appendChild(contratxt);
    div.appendChild(br1);
    div.appendChild(contra);
    div1.appendChild(submit);
    div2.appendChild(nuevacontratxt);
    div2.appendChild(br);
    div2.appendChild(contranueva);
    contenedor.appendChild(div);
    contenedor.appendChild(div2);

    contenedor.appendChild(div1);

    document.getElementById("formcambiar").appendChild(contenedor);





}
//funcion de micuenta que cambiar el form de opciones a modificardatos

function datos() {

    document.getElementById("contenedor").remove();
    let contenedor = document.createElement('form');
    contenedor.setAttribute("action", "micuenta.php");
    contenedor.setAttribute("method", "POST");
    contenedor.setAttribute("id", "contenedor");
    let div = document.createElement('div');
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');
    let div4 = document.createElement('div');

    let br = document.createElement('br');
    let br1 = document.createElement('br');
    let br2 = document.createElement('br');
    let br3 = document.createElement('br');
    let br4 = document.createElement('br');
    let nombretxt = document.createElement('span');
    let txt = document.createTextNode("Introduzca su nuevo nombre");
    nombretxt.appendChild(txt);
    let nombre = document.createElement('input');
    nombre.setAttribute("type", "text");
    nombre.setAttribute("id", "nombre");
    nombre.setAttribute("name", "nombrec");
    let apellidostxt = document.createElement('span');
    txt = document.createTextNode("Introduzca su nuevo apellido");
    apellidostxt.appendChild(txt);
    let apellidos = document.createElement('input');
    apellidos.setAttribute("type", "text");
    apellidos.setAttribute("id", "apellidos");
    apellidos.setAttribute("name", "apellidosc");
    let emailtxt = document.createElement('span');
    txt = document.createTextNode("Introduzca su nuevo email");
    emailtxt.appendChild(txt);
    let correo = document.createElement('input');
    correo.setAttribute("type", "email");
    correo.setAttribute("id", "correo");
    correo.setAttribute("name", "correoc");
    let edadtxt = document.createElement('span');
    txt = document.createTextNode("Introduzca su nueva edad");
    edadtxt.appendChild(txt);
    let edad = document.createElement('input');
    edad.setAttribute("type", "number");
    edad.setAttribute("id", "edad");
    edad.setAttribute("name", "edadc");
    let submit = document.createElement('input');
    submit.setAttribute("type", "submit");
    submit.setAttribute("id", "cambiardatos");
    submit.setAttribute("value", "Actualizar datos");
    submit.setAttribute("name", "cuenta");
    div.appendChild(nombretxt);
    div.appendChild(br);
    div.appendChild(nombre)
    div1.appendChild(apellidostxt);
    div1.appendChild(br1);
    div1.appendChild(apellidos)
    div2.appendChild(emailtxt);
    div2.appendChild(br2);
    div2.appendChild(correo)
    div3.appendChild(edadtxt);
    div3.appendChild(br3);
    div3.appendChild(edad)
    div4.appendChild(submit);

    contenedor.appendChild(div);
    contenedor.appendChild(div1);
    contenedor.appendChild(div2);
    contenedor.appendChild(div3);
    contenedor.appendChild(div4);
    document.getElementById("formcambiar").appendChild(contenedor);





}
//funcion de micuenta que cambiar el form de opciones a borrarcuenta
function borrarcuenta() {

    document.getElementById("contenedor").remove();
    let contenedor = document.createElement('form');
    let div = document.createElement('div');
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    contenedor.setAttribute("action", "Borrarcuenta.php");
    contenedor.setAttribute("method", "POST");
    contenedor.setAttribute("id", "contenedor");
    let br = document.createElement('br');
    let br1 = document.createElement('br');
    let contratxt = document.createElement('span');
    let txt = document.createTextNode("Introduzca su contraseña actual");
    contratxt.appendChild(txt);
    let contra = document.createElement('input');
    contra.setAttribute("type", "text");
    contra.setAttribute("id", "contra");
    contra.setAttribute("name", "contra");
    contra.required = true;
    let borrartxt = document.createElement('span');
    txt = document.createTextNode("Marca la casilla si esta seguro");
    borrartxt.appendChild(txt);
    let borrar = document.createElement('input');
    borrar.setAttribute("type", "checkbox");
    borrar.setAttribute("id", "borrarcue");
    borrar.setAttribute("name", "borrarcue");
    borrar.required = true;
    let submit = document.createElement('input');
    submit.setAttribute("type", "submit");
    submit.setAttribute("id", "borrarcuenta");
    submit.setAttribute("name", "cuenta");
    submit.setAttribute("value", "Borrar Cuenta");

    div.appendChild(contratxt);
    div.appendChild(br1);
    div.appendChild(contra);
    div1.appendChild(submit);
    div2.appendChild(borrartxt);
    div2.appendChild(br);
    div2.appendChild(borrar);
    contenedor.appendChild(div);
    contenedor.appendChild(div2);

    contenedor.appendChild(div1);

    document.getElementById("formcambiar").appendChild(contenedor);





}
//funcion que se inicia una vez toda la pagina esta cargada y añade un evento para mandar el mensaje escrito a mensaje.php,
// loadlog escribe en el chatbox el html de mensajes.html y despues hace un scroll del chatbox hast la el final del contenido
//setInterval lanza la funcion load log cada 2,5 segundos

$(document).ready(function () {
    $("#submitmsg").click(function () {
        var clientmsg = $("#usermsg").val();
        $.post("mensaje.php", {text: clientmsg});
        $("#usermsg").attr("value", "");
        return false;
    });

    function loadLog() {
        var oldscrollHeight = $("#chatbox").attr("scrollHeight") - 20; //Scroll height before the request
        $.ajax({
            url: "mensajes.html",
            cache: false,
            success: function (html) {
                $("#chatbox").html(html); //Insert chat log into the #chatbox div	

                //Auto-scroll			
                var newscrollHeight = $("#chatbox").attr("scrollHeight") - 20; //Scroll height after the request
                if (newscrollHeight > oldscrollHeight) {
                    $("#chatbox").animate({scrollTop: newscrollHeight}, 'normal'); //Autoscroll to bottom of div
                }
            },
        });
    }
    setInterval(loadLog, 2500);
});
//funcion que se llama al cargar la pagina y añade a un boton un evento
//evento remueve el boton y llama a la funcion success

function funcion_primera() {


    document.getElementById("boton_geo").addEventListener("click", function () {

        document.getElementById("mapa").removeChild(document.getElementById("boton_geo"));
        if (navigator.geolocation) {
            posicionn = navigator.geolocation.getCurrentPosition(success, error);
        } else {
            $("#sitio").append('Tu navegador no soporta Geolocalización');
        }


    })




}

//llama a la funcion muestraMapa pasandole los valores de la lat y long del usuario

function success(pos) {

    var lat = pos.coords.latitude;
    var long = pos.coords.longitude;


    muestraMapa(lat, long);

}
//Crea una capa con el mapa ubicada en la locacion del usuario , añade un click event en la capa del mapa y ademas llama a la funcion mark
//el evento del mapa llama a la funcion mark para ubicar la marca donde se indico
function muestraMapa(lat, longitud) {



    const LATITUD_CENTRO = lat,
            LONGITUD_CENTRO = longitud,
            ZOOM = 15;

    const mapa = new ol.Map({
        target: 'mapa', // el id del elemento en donde se monta
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([LONGITUD_CENTRO, LATITUD_CENTRO]),
            zoom: ZOOM,
        })
    });
    mark(mapa, longitud, lat);
// Y agregamos la capa al mapa



    mapa.on('click', function (evt) {
        let coordenadas = (ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326'));

        mark(mapa, coordenadas[0], coordenadas[1]);
    });
    // use lonlat 



}
function error() {

    switch (position.code) {
        case position.PERMISSION_DENIED:
            alert("El usuario denego la petición de geolocalización.")
            break;
        case position.POSITION_UNAVAILABLE:
            alert("Información de localización no disponible.")
            break;
        case position.TIMEOUT:
            alert("La petición para obtener la ubicación del usuario expiró.")
            break;
        case position.UNKNOWN_ERROR:
            alert("Error desconocido.")
            break;
    }

}

//Crea una capa marca para indicar el lugar exacto del usuario y la borra si ya existiera
function mark(mapa, longitud, lat) {
    let b = mapa.getLayers().getArray()

    mapa.removeLayer(b[1]);
    let marcador = new ol.Feature({
        geometry: new ol.geom.Point(
                ol.proj.fromLonLat([longitud, lat])// En dónde se va a ubicar
                ),
    });

// Agregamos icono
    marcador.setStyle(new ol.style.Style({
        image: new ol.style.Icon({
            src: "./css/mark.png",
        })
    }));


// marcadores debe ser un arreglo
    const marcadores = []; // Arreglo para que se puedan agregar otros más tarde

    marcadores.push(marcador);// Agregamos el marcador al arreglo

    let capa = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: marcadores, // A la capa le ponemos los marcadores
        }),
    });
    mapa.addLayer(capa);
    document.getElementById("latitud").setAttribute("value", lat);
    document.getElementById("longitud").setAttribute("value", longitud);

}





function funciones() {
    funcion_primera();

}

window.onload = funciones;