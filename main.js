var texto = document.getElementById("textbox");
var reconocerVoz = window.webkitSpeechRecognition;
var reconocimiento = new reconocerVoz();
reconocimiento.lang = "es-MX";
var leerEnVozAlta = window.speechSynthesis;
function iniciar() {
    texto.value = "";
    reconocimiento.start();
}

reconocimiento.onresult = function (resultado) {
    console.log(resultado);
    var textoDetectado = resultado.results[0][0].transcript;
    texto.value = textoDetectado;
    hablar(textoDetectado)
    if (textoDetectado.toLowerCase() == "una tortuga tortura a otra tortuga tuerta que tropieza con la tuerca tras la puerta") {
        hablar("lo lograste sonrie por que tomaremos una foto de recuerdo ¡PEINATE!")
        setTimeout(tomarFoto, 13000)
    }else{
    hablar("¡BUEN INTENTO!")        
    }
}

function hablar(mensaje) {
    lectura = new SpeechSynthesisUtterance(mensaje);
    lectura.lang = "es-MX"
    leerEnVozAlta.speak(lectura);
}
var camara = document.getElementById("camara");
Webcam.set({
    width: 360,
    height: 260,
    image_format: "jpeg",
    image_quality: 90
})
Webcam.attach(camara)
function tomarFoto() {
    Webcam.snap(function (data_uri) {
        document.getElementById("resultado").innerHTML = '<img id ="foto" src="' + data_uri + '"/>';
    })
}