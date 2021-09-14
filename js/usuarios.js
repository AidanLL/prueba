

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


    
      document.getElementById("usuariopciones").addEventListener("change", function () {
            
            filtro();
        })
    }

     

    





function filtro() {

    var fil = document.getElementById("usuariopciones").value;
    document.getElementById("filtros").style.visibility = 'visible';
    if (fil == 1) {
        document.getElementById("usuarios").style.visibility = 'hidden';
        document.getElementById("usuariosin").style.visibility = 'hidden';
        document.getElementById("login").style.visibility = 'visible';
        document.getElementById("logintxt").style.visibility = 'visible';
        document.getElementById("contranuevo").style.visibility = 'visible';
        document.getElementById("contranuevotxt").style.visibility = 'visible';
        document.getElementById("crearin").style.visibility = 'visible';
        document.getElementById("modin").style.visibility = 'hidden';
      
    } else if (fil == 2) {
          document.getElementById("usuarios").style.visibility = 'visible';
        document.getElementById("usuariosin").style.visibility = 'hidden';
        document.getElementById("login").style.visibility = 'hidden';
        document.getElementById("logintxt").style.visibility = 'hidden';
        document.getElementById("contranuevo").style.visibility = 'hidden';
        document.getElementById("contranuevotxt").style.visibility = 'hidden';
        document.getElementById("crearin").style.visibility = 'hidden';
        document.getElementById("modin").style.visibility = 'visible';
    } else if (fil == 3) {
             document.getElementById("usuarios").style.visibility = 'visible';
        document.getElementById("usuariosin").style.visibility = 'visible';
        document.getElementById("login").style.visibility = 'hidden';
        document.getElementById("logintxt").style.visibility = 'hidden';
        document.getElementById("contranuevo").style.visibility = 'hidden';
        document.getElementById("contranuevotxt").style.visibility = 'hidden';
        document.getElementById("crearin").style.visibility = 'hidden';
        document.getElementById("modin").style.visibility = 'hidden';
    }
}

function funciones() {

    funcionverplanes();
}

window.onload = funciones;