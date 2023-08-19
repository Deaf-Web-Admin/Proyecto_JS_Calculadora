const Pantalla = document.querySelector(".LCDScreen");

const BotonConNumero = document.querySelectorAll(".Numero");
const cuandoSeHaceClick = function () {
	Pantalla.value = Pantalla.value + this.innerText;
	localStorage.setItem("NumeroGuardado", Pantalla.value);
};
BotonConNumero.forEach((boton) => {
	boton.addEventListener("click", cuandoSeHaceClick);
});

const BotonConFuncion = document.querySelectorAll(".Funcion");
const AlmacenarFuncion = function () {
	localStorage.setItem("Operacion", this.innerText);
	localStorage.setItem(
		"NumeroGuardado2",
		localStorage.getItem("NumeroGuardado")
	);
	Pantalla.value = Pantalla.value + this.innerText;
	localStorage.setItem("NumeroGuardado", "");
	Pantalla.value = "";
};
BotonConFuncion.forEach((boton) => {
	boton.addEventListener("click", AlmacenarFuncion);
	localStorage.setItem("NumeroGuardado", "");
});

const BotonLimpiar = document.querySelector(".BotonC");
const LimpiarTodo = function () {
	Pantalla.value = "";
	localStorage.setItem("Operacion", "");
	localStorage.setItem("NumeroGuardado", "");
	localStorage.setItem("NumeroGuardado2", "");
};
BotonLimpiar.addEventListener("click", LimpiarTodo);

const BotonDeResultado = document.querySelector(".Total");
const ImprimirResultado = function () {
	let ElPrimero = localStorage.getItem("NumeroGuardado2");
	let ElSegundo = localStorage.getItem("NumeroGuardado");
	if (localStorage.getItem("Operacion") == "+") {
		Pantalla.value = Number(ElPrimero) + Number(ElSegundo);
		setTimeout(LimpiarTodo, 5000);
	} else if (localStorage.getItem("Operacion") == "-") {
		Pantalla.value = ElPrimero - ElSegundo;
		setTimeout(LimpiarTodo, 5000);
	} else if (localStorage.getItem("Operacion") == "*") {
		Pantalla.value = ElPrimero * ElSegundo;
		setTimeout(LimpiarTodo, 5000);
	} else if (localStorage.getItem("Operacion") == "/") {
		Pantalla.value = ElPrimero / ElSegundo;
		setTimeout(LimpiarTodo, 5000);
	} else {
	}
};
BotonDeResultado.addEventListener("click", ImprimirResultado);

console.log("Gracias a mis compis por el reto, ayuda a no oxidarme en JS :)");
