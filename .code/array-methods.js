// ? ARRAY METHODS

console.log("ARRAY METHODS");
console.log("\n");

// ! Array.concat()
console.log("Array.concat()");
// * Array.concat() es una función que nos permite concatenar dos o más arrays.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(arr1.concat(arr2));
console.log("\n");

// ! Array.includes()
console.log("Array.includes()");
// * Array.includes() es una función que nos permite determinar si un array contiene un determinado elemento.
const arr3 = [1, 2, 3];
console.log(arr3.includes(2));
console.log("\n");

// ! Array.indexOf()
console.log("Array.indexOf()");
// * Array.indexOf() es una función que nos permite determinar la posición de la primera aparición de un elemento en un array.
const arr4 = [1, 2, 3];
console.log(arr4.indexOf(2));
console.log("\n");

// ! Array.join()
console.log("Array.join()");
// * Array.join() es una función que nos permite unir todos los elementos de un array en un string.
const arr5 = [1, 2, 3];
console.log(arr5.join(" - "));
console.log("\n");

// ! Array.lastIndexOf()
console.log("Array.lastIndexOf()");
// * Array.lastIndexOf() es una función que nos permite determinar la posición de la última aparición de un elemento en un array.
const arr6 = [1, 2, 3, 2];
console.log(arr6.lastIndexOf(2));
console.log("\n");

// ! Array.pop()
console.log("Array.pop()");
// * Array.pop() es una función que nos permite eliminar el último elemento de un array.
const arr7 = [1, 2, 3];
arr7.pop();
console.log(arr7);
console.log("\n");

// ! Array.push()
console.log("Array.push()");
// * Array.push() es una función que nos permite añadir uno o más elementos al final de un array.
const arr8 = [1, 2, 3];
arr8.push(4, 5, 6);
console.log(arr8);
console.log("\n");

// ! Array.reverse()
console.log("Array.reverse()");
// * Array.reverse() es una función que nos permite invertir el orden de los elementos de un array.
const arr9 = [1, 2, 3];
console.log(arr9.reverse());
console.log("\n");

// ! Array.shift()
console.log("Array.shift()");
// * Array.shift() es una función que nos permite eliminar el primer elemento de un array.
const arr10 = [1, 2, 3];
arr10.shift();
console.log(arr10);
console.log("\n");

// ! Array.slice()
console.log("Array.slice()");
// * Array.slice() es una función que nos permite extraer una parte de un array y devolver un nuevo array.
const arr11 = [1, 2, 3, 4, 5];
console.log(arr11.slice(0, 3));
console.log("\n");

// ! Array.sort()
console.log("Array.sort()");
// * Array.sort() es una función que nos permite ordenar los elementos de un array.
const arr12 = [1, 2, 3, 4, 5];
console.log(arr12.sort());
console.log("\n");

// ! Array.splice()
console.log("Array.splice()");
// * Array.splice() es una función que nos permite añadir y/o eliminar elementos de un array.
const arr13 = [1, 2, 3, 4, 5];
arr13.splice(2, 0, 6, 7, 8);
console.log(arr13);
console.log("\n");

// ! Array.unshift()
console.log("Array.unshift()");
// * Array.unshift() es una función que nos permite añadir uno o más elementos al inicio de un array.
const arr14 = [1, 2, 3];
arr14.unshift(4, 5, 6);
console.log(arr14);
console.log("\n");

// ! Array.toString()
console.log("Array.toString()");
// * Array.toString() es una función que nos permite convertir un array en un string.
const arr15 = [1, 2, 3];
console.log(arr15.toString());
console.log("\n");

// ! Array.valueOf()
console.log("Array.valueOf()");
// * Array.valueOf() es una función que nos permite obtener el valor primitivo de un array.
const arr16 = [1, 2, 3];
console.log(arr16.valueOf());
console.log("\n");

// ! Array.from()
console.log("Array.from()");
// * Array.from() es una función que nos permite crear un nuevo array a partir de un objeto iterable.
const arr17 = Array.from("123");
console.log(arr17);
console.log("\n");

// ! Array.of()
console.log("Array.of()");
// * Array.of() es una función que nos permite crear un nuevo array con un número variable de argumentos, sin importar el número o el tipo de los argumentos.
const arr18 = Array.of(1, 2, 3);
console.log(arr18);
console.log("\n");

// ! Array.every()
console.log("Array.every()");
// * Array.every() es una función que nos permite comprobar si todos los elementos de un array cumplen una condición determinada.
const arr19 = [1, 2, 3];
console.log(arr19.every((x) => x < 10));
console.log("\n");

// ! Array.filter()
console.log("Array.filter()");
// * Array.filter() es una función que nos permite crear un nuevo array con todos los elementos que cumplan una condición determinada.
const arr20 = [1, 2, 3];
console.log(arr20.filter((x) => x < 3));
console.log("\n");

// ! Array.find()
console.log("Array.find()");
// * Array.find() es una función que nos permite devolver el primer elemento de un array que cumpla una condición determinada.
const arr21 = [1, 2, 3];
console.log(arr21.find((x) => x > 1));
console.log("\n");

// ! Array.findIndex()
console.log("Array.findIndex()");
// * Array.findIndex() es una función que nos permite devolver el índice del primer elemento de un array que cumpla una condición determinada.
const arr22 = [1, 2, 3];
console.log(arr22.findIndex((x) => x > 1));
console.log("\n");

// ! Array.forEach()
console.log("Array.forEach()");
// * Array.forEach() es una función que nos permite ejecutar una función por cada elemento de un array.
const arr23 = [1, 2, 3];
arr23.forEach((x) => console.log(x));
console.log("\n");

// ! Array.reduce()
console.log("Array.reduce()");
// * Array.reduce() es una función que nos permite reducir todos los elementos de un array a un único valor.
const arr24 = [1, 2, 3];
console.log(arr24.reduce((a, b) => a + b));
console.log("\n");

// ! Array.reduceRight()
console.log("Array.reduceRight()");
// * Array.reduceRight() es una función que nos permite reducir todos los elementos de un array a un único valor, de derecha a izquierda.
const arr25 = [1, 2, 3];
console.log(arr25.reduceRight((a, b) => a + b));
console.log("\n");

// ! Array.some()
console.log("Array.some()");
// * Array.some() es una función que nos permite comprobar si al menos un elemento de un array cumple una condición determinada.
const arr26 = [1, 2, 3];
console.log(arr26.some((x) => x > 2));
console.log("\n");
