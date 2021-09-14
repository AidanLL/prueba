

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







function funcionverplanes() {


    let nplanes = document.getElementById("nplanes").value;
      document.getElementById("filtro").addEventListener("change", function () {
            
            filtro();
        })
    for (var k = 0; k < nplanes; k++) {
        
        document.getElementById("boton_geo" + k).addEventListener("click", function () {
            if (navigator.geolocation) {


                document.getElementById("mapa" + this.value).removeChild(this);
                //  var lat = document.getElementById("lat" + this.value).value;
                //  var long = document.getElementById("long" + this.value).value;

                var lat = parseFloat(document.getElementById('lat' + this.value).value);
                var long = parseFloat(document.getElementById('long' + this.value).value);

                muestraMapa2(lat, long, this.value);
            } else {
                $("#sitio").append('Tu navegador no soporta Geolocalización');
            }

        })

     

    }

}


function muestraMapa2(lat, longitud, mapaa) {

    const LATITUD_CENTRO = lat,
            LONGITUD_CENTRO = longitud,
            ZOOM = 15;

    const mapa = new ol.Map({
        target: 'mapa' + mapaa, // el id del elemento en donde se monta
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


}
function mark(mapa, longitud, lat) {

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


}
function filtro() {

    var fil = document.getElementById("filtro").value;
    document.getElementById("filtros").style.visibility = 'visible';
    if (fil == 1) {
        document.getElementById("categorias").style.visibility = 'visible';
        document.getElementById("catin").style.visibility = 'visible';
        document.getElementById("descripcion").style.visibility = 'hidden';
        document.getElementById("destxt").style.visibility = 'hidden';
        document.getElementById("desin").style.visibility = 'hidden';
        document.getElementById("fecha").style.visibility = 'hidden';
        document.getElementById("fectxt").style.visibility = 'hidden';
        document.getElementById("fecin").style.visibility = 'hidden';
    } else if (fil == 2) {
        document.getElementById("categorias").style.visibility = 'hidden';
        document.getElementById("catin").style.visibility = 'hidden';
        document.getElementById("descripcion").style.visibility = 'visible';
        document.getElementById("destxt").style.visibility = 'visible';
        document.getElementById("desin").style.visibility = 'visible';
        document.getElementById("fecha").style.visibility = 'hidden';
        document.getElementById("fectxt").style.visibility = 'hidden';
        document.getElementById("fecin").style.visibility = 'hidden';
    } else if (fil == 3) {
        document.getElementById("categorias").style.visibility = 'hidden';
        document.getElementById("catin").style.visibility = 'hidden';
        document.getElementById("descripcion").style.visibility = 'hidden';
        document.getElementById("destxt").style.visibility = 'hidden';
        document.getElementById("desin").style.visibility = 'hidden';
        document.getElementById("fecha").style.visibility = 'visible';
        document.getElementById("fectxt").style.visibility = 'visible';
        document.getElementById("fecin").style.visibility = 'visible';
    }
}

function funciones() {

    funcionverplanes();
}

window.onload = funciones;