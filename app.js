let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el numero al ${intentos} intento.`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento ("p", "El numero secreto es menor.")
        } else {
            asignarTextoElemento ("p", "El numero secreto es mayor.")
        }
        intentos++;
        limpiarCaja();

    }

}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento ('p', 'Ops! me quede sin numeros.');
    } else{
        
    }

    //si el numero se ecuentra en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto ();
    } else {
        listaNumerosSorteados.push(numeroGenerado)

        return numeroGenerado;
    }
}

function condionesIniciales() {
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", `indica un numero del 1 al ${numeroMaximo}:`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();

    //indicar mensaje de inicio
    //generar numero secreto
    //reiniciar intentos
    condionesIniciales();

    //deshabilitar boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

    
}

condionesIniciales();