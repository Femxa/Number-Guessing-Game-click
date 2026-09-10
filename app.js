const entrada = document.querySelector('#campo-adivinanza');
const botonEnviar = document.querySelector('#enviar-adivinanza');
const intentosAnteriores = document.querySelector('#intentos-anteriores');
const intentosRestantes = document.querySelector('#intentos-restantes');
const mensaje = document.querySelector('#mensaje');

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let numerosProbados = [];

intentosRestantes.textContent = 10;

botonEnviar.addEventListener('click', function () {
	const adivinanza = Number(entrada.value);

	intentos++;
	numerosProbados.push(adivinanza);
	intentosAnteriores.textContent = numerosProbados.join(', ');
	intentosRestantes.textContent = 10 - intentos;

	if (adivinanza === numeroSecreto) {
		mensaje.textContent = `¡Correcto! El número era ${numeroSecreto}.`;
		entrada.disabled = true;
		botonEnviar.disabled = true;
	} else if (intentos === 10) {
		mensaje.textContent = `Has perdido. El número era ${numeroSecreto}.`;
		entrada.disabled = true;
		botonEnviar.disabled = true;
	} else if (adivinanza < numeroSecreto) {
		mensaje.textContent = 'El número secreto es mayor.';
	} else {
		mensaje.textContent = 'El número secreto es menor.';
	}

	entrada.value = '';
});
