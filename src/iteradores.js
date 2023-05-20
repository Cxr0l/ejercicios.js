//1- Muestrame los elementos del iterador


for (let number1 = 0; number1 < 20; number1++) {
    console.log(number1);
}


//otra forma

const number2 = [1, 2, 3, 4, 5];
const iterador1 = number2[Symbol.iterator1]();

for (const elemento1 of iterador1) {
  console.log(elemento1);
}


//2- iterar un array de numeros y devolver el valor *2

for (let number3 = 0; number3 < 10; number3++){
    console.log (number3*2);
}

// otra forma

const number3 = [1, 2, 3, 4, 5];
const iterador2 = number3[Symbol.iterator]();

for (const elemento2 of iterador2){
    console.log(elemento2*2);
}



//3- Mostrarme los indices del array que vas a iterar

const array = ["naranja", "manzana", "durazno"];

for (let number4 = 0; number4 < array.length; number4++){
    console.log("indice: "+ number4 + " - " +array[number4]);
}