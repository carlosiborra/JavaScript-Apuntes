// ! FUNCIONES Y TEMPORIZADORES EN JS

const arr = [1, 2, 3];
console.log("\n");

// ! FOR
console.log("FOR");
// * for() es un bucle que nos permite iterar sobre un bloque de código un número determinado de veces.
for (let i = 0; i < arr.length; i++) {
  console.log(`Elemento ${i}: ${arr[i]}`);
}
console.log("\n");

// ! FOREACH
console.log("FOREACH");
// * forEach() es un método de los arrays que nos permite iterar sobre cada uno de los elementos de un array.
arr.forEach((element, index) => console.log(`Elemento ${index}: ${element}`));
// Es lo mismo que
arr.forEach((element, index) => {
  console.log(`Elemento ${index}: ${element}`);
});
console.log("\n");

// ! FOR...OF
console.log("FOR...OF");
// * for...of es un bucle que nos permite iterar sobre cada uno de los elementos de un array.
for (const element of arr) {
  console.log(element);
}
console.log("\n");

// ! FOR...IN
console.log("FOR...IN");
// * for...in es un bucle que nos permite iterar sobre cada una de las propiedades de un objeto.
const person = {
  name: "John",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 Main st",
    city: "Boston",
    state: "MA",
  },
};

for (const property in person) {
  console.log(property);
}
console.log("\n");

// ! WHILE
console.log("WHILE");
// * while() es un bucle que nos permite iterar sobre un bloque de código un número indeterminado de veces (>= 0).
let i = 0;
while (i < arr.length) {
  console.log(`Elemento ${i}: ${arr[i]}`);
  i++;
}
console.log("\n");

// ! DO...WHILE
console.log("DO...WHILE");
// * do...while() es un bucle que nos permite iterar sobre un bloque de código un número indeterminado de veces (> 0).
let j = 0;
do {
  console.log(`Elemento ${j}: ${arr[j]}`);
  j++;
} while (j < arr.length);
console.log("\n");

// ! REST PARAMETERS
console.log("REST PARAMETERS");
// * Los parámetros rest nos permiten pasar un número indefinido de argumentos a una función.
function sum(...numbers) {
  let result = 0;
  numbers.forEach((number) => (result += number));
  return result;
}
console.log(sum(1, 2, 3, 4, 5));
console.log("\n");
// Nota: los parámetros rest siempre deben ir al final de la lista de parámetros de una función.
function sum2(a, b, ...numbers) {
  // Esto hace que los dos primeros parámetros sean a y b, y el resto de parámetros se almacenen en un array llamado numbers.
  let result = 0;
  numbers.forEach((number) => (result += number));
  return result;
} // * Esto no funcionaría
console.log(sum2(1, 2, 3, 4, 5));
console.log("\n");

// ! OBJECT ARGUMENTS
console.log("OBJECT ARGUMENTS");
// * El objeto arguments es una variable local disponible dentro de todas las funciones. Contiene un array con los argumentos con los que se llamó a la función.
function sum3() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}
console.log(sum3(1, 2, 3, 4, 5));
console.log("\n");

// ! SPREAD OPERATOR
console.log("SPREAD OPERATOR");
// * El operador spread nos permite expandir un array o un objeto en sus elementos.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);
console.log("\n");
// Otro ejemplo de uso
let arr5 = [1, 2, 3];
console.log(...arr);
console.log("\n");

// ? NOTA: para diferenciar el operador spread de los parámetros rest, debemos recordar que los parámetros rest se utilizan para definir una función, mientras que el operador spread se utiliza para llamar a una función.
// ? Es decir, cuando ... esta a la izquierda de un =, es un parámetro rest, y cuando ... esta a la derecha de un =, es un operador spread.

// ! - - - - - - - - - - - - - - -  TEMPORIZADORES

// ! SETTIMEOUT
console.log("SETTIMEOUT");
// * setTimeout() es una función que nos permite ejecutar un bloque de código después de un tiempo determinado.
// * Sintaxis: setTimeout(() => { ... }, delayInMilliseconds)
// * Sintaxis: let timerId = setTimeout (func | code, [delay], [arg1, arg2, ...])
setTimeout(() => {
  console.log("Hello World");
}, 100);
// Otro ejemplo
function printHello() {
  console.log("Hello World");
}
setTimeout(printHello, 100);
console.log("\n");
// * clearTimeout() es una función que nos permite detener la ejecución de un timeout.
let timerId = setTimeout(() => console.log("Hello World"), 100);
clearTimeout(timerId);
console.log("\n");

// ! SETINTERVAL
console.log("SETINTERVAL");
// * setInterval() es una función que nos permite ejecutar un bloque de código cada cierto tiempo.
// * Sintaxis: setInterval(() => { ... }, delayInMilliseconds)
// * Sintaxis: let timerId = setInterval (func | code, [delay], [arg1, arg2, ...])
const interval = setInterval(() => {
  console.log("Hello World");
}, 200);
setTimeout(() => {
  clearInterval(interval); // * clearInterval() es una función que nos permite detener la ejecución de un intervalo.
}, 600);
console.log("\n");

// * bind() es una función que nos permite enlazar un objeto a una función.
// * Sintaxis: func.bind(thisArg[, arg1[, arg2[, ...]]])
const timer = {
  count: 0,
  init: function (val) {
    this.count = val;
  },
  startCounter: function () {
    let timerId = setTimeout(
      function cnt() {
        this.count = this.count - 1;
        console.log(this.count);
        if (this.count > 0) {
          timerId = setTimeout(cnt.bind(this), 1000);
        }
      }.bind(this),
      1000
    );
  },
};
timer.init(10);
timer.startCounter();

// Con funciones flecha
const timer2 = {
  count: 0,
  init: function (val) {
    this.count = val;
  },

  startCounter: function () {
    let cnt = () => {
      this.count = this.count - 1;
      console.log(this.count);
      if (this.count > 0) {
        timerId = setTimeout(cnt, 1000);
      }
    };
    let timerId = setTimeout(cnt, 1000);
  },
};
timer.init(10);
timer.startCounter();

// ? NOTA: las funciones flecha no tienen su propio this, sino que toman el this del contexto en el que se encuentran.
// ? Las funciones flecha tampoco tienen su propio objeto arguments, sino que toman el objeto arguments del contexto en el que se encuentran



let foo = (...args) => args;

console.log(foo(1,2,3));


let newFoo = function(){
  return [...arguments]
}

console.log(newFoo(1,2,3));

console.