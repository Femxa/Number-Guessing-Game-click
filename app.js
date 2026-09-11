const numeroSecreto = Math.floor(Math.random() * 100);
console.log(numeroSecreto);
let intentosRestantes = 3; // number
let listaIntentos = [];

const campoAdivinanza = document.querySelector("#campo-adivinanza");
const botonEnviar = document.querySelector("#enviar-adivinanza");
const mensaje = document.querySelector("#mensaje");
const textoAnteriores = document.querySelector("#intentos-anteriores");
const textoRestantes = document.querySelector("#intentos-restantes");

// Recupero el formualario para asociarle el evento submit
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    //Actualizar la variable lista de intentos con el valor que acaba de introducir el usuario
    //Actualizar la pantalla/nodo con el valor de la variable listaIntentos
    event.preventDefault();
    listaIntentos.push(Number(campoAdivinanza.value));
    textoAnteriores.textContent = listaIntentos;
    intentosRestantes--;
    textoRestantes.textContent = intentosRestantes;
    console.log("numeroSecreto", numeroSecreto);
    console.log("campoAdivinanza", campoAdivinanza.value);
    //Si el número secreto es igual que el número que ha puesto el usuario hemos ACERTADO
    //Si ha acertado ponemos un mensaje de enhorabuena
    if (numeroSecreto === Number(campoAdivinanza.value)) {
        mensaje.textContent = "Enhorabuena, !Has acertado el número secreto";
        console.log("He acertado");
        campoAdivinanza.disabled = true;
        botonEnviar.disabled = true;
    } else if (intentosRestantes == 0) {
        mensaje.textContent = "!Game Over¡, te has quedado sin intentos"; 
        campoAdivinanza.disabled = true;
        botonEnviar.disabled = true;

    }
    else if (numeroSecreto > Number(campoAdivinanza.value)) {
        mensaje.textContent = "El número es mayor";

    } else {
        mensaje.textContent = "El número es menor";
    }

});




