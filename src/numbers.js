//1- Hallar el valor mayor de dos numeros

let valor1 = Number(prompt("escribe un valor"));
let valor2 = Number(prompt("escribe otro valor"));

if (valor1 == "" && valor2 == ""){
    alert ("no ha introducido ningun valor")  //Use un verificador por si el usuario no ha ingresado los valores.
    location.reload ();
}else{if (valor1 > valor2) {
    alert(valor1 + " Es mayor")
} else {
    alert(valor2 + " Es mayor")
}}



//2- Sumar, restar, multiplicar y dividir los numeros.


let valor3 = Number(prompt("Escribe el primer valor"));
let valor4 = Number(prompt("Escribre el segundo valor"));

function sumar(a, b) {
  console.log(a + b);
}

sumar(valor3, valor4);

function restar(a, b) {
    console.log(a - b);
} 

restar(valor3, valor4);

function multiplicar(a, b) {
    console.log(a * b);
} 

multiplicar(valor3, valor4);

function dividir(a, b) {
    console.log(a / b);
} 

dividir(valor3, valor4);

//3- Calcular la raiz cuadrada de los numeros agregados

let mostrar = prompt("Introduce un numero");
let resultadoDivi = Math.sqrt(mostrar);
console.log(resultadoDivi)
