console.log("hola mundo")

var demo = contador = 0;

function cambiarTextoBoton () { var boton = document.getElementById('boton').innerHTML = "Gracias! ver menos habilidades." }

function cambiarTextoBoton2() { var boton = document.getElementById('boton').innerHTML = "CLICK para mostrar mas habilidades." }

function cambiarTexto() {
    if (contador == 0) {
        console.log("apreto"); document.getElementById("demo").innerHTML = "SOY DIDACTICA DE APRENDIZAJE ACTIVO, CREATIVA Y ORIGINAL, CON PENSAMIENTO CRITICO A LA HORA DE RESOLVER PROBLEMAS. PERO ANTES QUE TODO SOY COMPAÑERA Y RESPETUOSA. "; contador = 1; cambiarTextoBoton()
    } else {
        console.log("volver"); document.getElementById("demo").innerHTML = "¡Y MÁS HABILIDADES QUE ME DESCRIBEN COMO PERSONA!."; contador = 0; cambiarTextoBoton2()
    };
}
