//Recuperamos el input y el boton
const BotonConNumero = document.querySelectorAll(".Numero");
const BotonLimpiar = document.querySelector(".BotonC");
const Pantalla = document.querySelector(".LCDScreen");

const cuandoSeHaceClick = function (evento) {
	Pantalla.value = Pantalla.value + this.innerText;
};

const LimpiarTodo = function (evento) {
	Pantalla.value = "";
};

BotonConNumero.forEach((boton) => {
	boton.addEventListener("click", cuandoSeHaceClick);
});

BotonLimpiar.addEventListener("click", LimpiarTodo);

function Sumar(num1, num2) {
	return num1 + num2;
}
function Restar(num1, num2) {
	return num1 - num2;
}
function Multiplicar(num1, num2) {
	return num1 * num2;
}
function Dividir(num1, num2) {
	return num1 / num2;
}
