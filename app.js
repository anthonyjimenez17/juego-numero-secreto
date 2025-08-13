let numeroSecreto = 0;
let intento = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 3;

function asignacionDeTexto(elemento, texto){
    let elementHTML = document.querySelector(elemento);
    elementHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
            let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
            console.log(intento);
            if(numeroDeUsuario===numeroSecreto){
                asignacionDeTexto('p',`has acertado a la ${intento} ${(intento ===1? 'vez': 'veces')}`);
                document.getElementById('reiniciar').removeAttribute('disabled');
            }else if(numeroDeUsuario != numeroSecreto){
                if(numeroDeUsuario > numeroSecreto){
                    asignacionDeTexto('p', `El numero secreto es menor que ${numeroDeUsuario}`);
                }else{
                    asignacionDeTexto('p', `El numero secreto es mayor que ${numeroDeUsuario}`);
                }
                limpiarCaja();
                intento++;
            }
            return;
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}
function generarNumeroRandom(){
    numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroMaximo){
        asignacionDeTexto('p','Se sortearon todos los numeros');
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroRandom();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales(){
    asignacionDeTexto('h1', "Bienvenidos al juego de adivina el número");
    asignacionDeTexto('p', `Digita un numero en 1 a ${numeroMaximo}`);
    numeroSecreto = generarNumeroRandom();
    intento = 1;
    console.log(numeroSecreto);
    //console.log(numeroSecreto);


}
function reiniciarJuego (){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();
