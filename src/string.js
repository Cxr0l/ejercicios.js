// //1- Identificar la longitud de la cadena de tecto agregada

const textoAdicional = "Ingresa una cadena de texto:";
const cadena1 = prompt(textoAdicional);

console.log("La longitud de la cadena de texto es: " + cadena1.length);

// //2- invertir la cadena de texto: Welcome

const textoInvertido = "Ingresa una cadena de texto:";
const cadena2 = prompt(textoInvertido);

const cadenaInvertida = cadena2.split("").reverse().join("");

console.log("La cadena de texto invertida es: " + cadenaInvertida);

//3- Repetir el texto

const textoOriginal = "Ingresa una cadena de texto:";
const cadena3 = prompt(textoOriginal);

const veces = prompt("¿Cuántas veces quieres repetir la cadena?");
const cadenaRepetida = (cadena3 + " ").repeat(veces);

console.log("La cadena de texto repetida es: " + cadenaRepetida.trim());

