//1- Agregar valores al array al principio ("hola" "Soy" "Juan")


const array1 = ["Me", "Llamo", "Vanessa"];

array1.unshift("Hola", "Mundo", "Tierra", "Verde");

console.log(array1);


//Otra forma

function agregarValorInvertido(valores1) {
  let valor1 = prompt("Escribe una palabra"); 
  if (valor1 === null) { 
    return valores1;
  }
  valores1.reverse();
  valores1.unshift(valor1); 
  console.log("Valores actuales: " + valores1.join(' ')); 
  return agregarValorInvertido(valores1);
}

let valores1 = agregarValorInvertido([]);
console.log("Valores finales: " + valores1.join(' '));




//2- Revertir los valores que tenga el array (1,2,3) (3,2,1)

const array2 = [20, 30, 40, 50, 60];
console.log (array2);

const revertir = array2.reverse();
console.log (revertir);


//Otra forma

function invertirValor() {
  let valor2 = prompt("Escribe varias palabras:");
  let palabras = valor2.split(" ");
  let palabrasInvertidas = palabras.reverse();
  return palabrasInvertidas;
}

let palabrasInvertidas = invertirValor();
console.log("Palabras invertidas: " + palabrasInvertidas.join(" "));




// 3- Sumar todos los numeros del array

const array3 = [1, 2, 3, 4, 5]

const total = array3.reduce((a, b) => a + b, 0);

console.log(total);



//Otra forma

function sumarValores() {
  let valores3 = prompt("Escribe varios valores separados por comas"); 
  let valoresNumeros = valores3.split(",").map(valor => parseInt(valor)); 
  let suma = valoresNumeros.reduce((acumulador, valor) => acumulador + valor, 0);
  return suma;
}

let suma = sumarValores();
console.log("Suma de valores: " + suma);