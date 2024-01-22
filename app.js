let numeroMaximo=prompt('Elije el rango de numeros con el que quieres jugar');
let lista=[];
let numeroSecreto = generarNumeroAleatorio();
let intentos=1;


function asignarTextoElemento(elemento, texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
}

function reiniciarJuego() {
    numeroMaximo=prompt('Elije el rango de numeros con el que quieres jugar');
    numeroSecreto = generarNumeroAleatorio();
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

function intentoDeUsuario(){
    verificarIntento();
}

function generarNumeroAleatorio() {
    let numAleatorio=Math.floor(Math.random()*numeroMaximo)+1;
    
    if(lista.length==numeroMaximo){
        lista=[];
    }
    
    if(lista.includes(numAleatorio)){
        return generarNumeroAleatorio();
    }
    
    lista.push(numAleatorio);
    return numAleatorio;
}

function verificarIntento(params) {
    let numeroDeUsuario=parseInt(document.getElementById('numeroUsuario').value);
    
    if(numeroSecreto>numeroDeUsuario){
        asignarTextoElemento('p', 'Mi numero es mayor');
    }else if(numeroSecreto<numeroDeUsuario){
        asignarTextoElemento('p', 'Mi numero es menor');
    }else{
        asignarTextoElemento('p', `Acertaste en ${intentos} ${(intentos===1 ? 'intento' : 'intentos')}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }

    intentos++;
    limpiarCaja();
}

function limpiarCaja(){
    document.querySelector('#numeroUsuario').value='';
}


asignarTextoElemento('h1','Juego del numero secreto');
asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);