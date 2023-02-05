// ? STRING METHODS

console.log("STRING METHODS");
console.log("\n");

// ! String.length
console.log("String.length");
// * String.length es una propiedad que nos permite obtener la longitud de un string.
const str = "Hello World";
console.log(str.length);
console.log("\n");

// ! String.charAt()
console.log("String.charAt()");
// * String.charAt() es una función que nos permite obtener el carácter en una posición determinada de un string.
const str2 = "Hello World";
console.log(str2.charAt(0));
console.log("\n");

// ! String.charCodeAt()
console.log("String.charCodeAt()");
// * String.charCodeAt() es una función que nos permite obtener el código Unicode de un carácter en una posición determinada de un string.
const str3 = "Hello World";
console.log(str3.charCodeAt(0));
console.log("\n");

// ! String.concat()
console.log("String.concat()");
// * String.concat() es una función que nos permite concatenar dos o más strings.
const str4 = "Hello";
const str5 = "World";
console.log(str4.concat(" ", str5));
console.log("\n");

// ! String.includes()
console.log("String.includes()");
// * String.includes() es una función que nos permite determinar si un string contiene una determinada subcadena.
const str6 = "Hello World";
console.log(str6.includes("Hello"));
console.log("\n");

// ! String.indexOf()
console.log("String.indexOf()");
// * String.indexOf() es una función que nos permite determinar la posición de la primera aparición de una subcadena en un string.
const str7 = "Hello World";
console.log(str7.indexOf("World"));
console.log("\n");

// ! String.lastIndexOf()
console.log("String.lastIndexOf()");
// * String.lastIndexOf() es una función que nos permite determinar la posición de la última aparición de una subcadena en un string.
const str8 = "Hello World";
console.log(str8.lastIndexOf("World"));
console.log("\n");

// ! String.match()
console.log("String.match()");
// * String.match() es una función que nos permite buscar una subcadena en un string y devolver un array con los resultados.
const str9 = "Hello World";
console.log(str9.match(/World/g));
console.log("\n");

// ! String.replace()
console.log("String.replace()");
// * String.replace() es una función que nos permite buscar una subcadena en un string y reemplazarla por otra.
const str10 = "Hello World";
console.log(str10.replace("World", "Universe"));
console.log("\n");

// ! String.search()
console.log("String.search()");
// * String.search() es una función que nos permite buscar una subcadena en un string y devolver la posición de la primera aparición.
const str11 = "Hello World";
console.log(str11.search("World"));
console.log("\n");

// ! String.slice()
console.log("String.slice()");
// * String.slice() es una función que nos permite extraer una parte de un string.
const str12 = "Hello World";
console.log(str12.slice(0, 5));
console.log("\n");

// ! String.split()
console.log("String.split()");
// * String.split() es una función que nos permite dividir un string en un array de subcadenas.
const str13 = "Hello World";
console.log(str13.split(" "));
console.log("\n");

// ! String.substring()
console.log("String.substring()");
// * String.substring() es una función que nos permite extraer una parte de un string.
const str14 = "Hello World";
console.log(str14.substring(0, 5));
console.log("\n");

// ! String.toLowerCase()
console.log("String.toLowerCase()");
// * String.toLowerCase() es una función que nos permite convertir un string a minúsculas.
const str15 = "Hello World";
console.log(str15.toLowerCase());
console.log("\n");

// ! String.toUpperCase()
console.log("String.toUpperCase()");
// * String.toUpperCase() es una función que nos permite convertir un string a mayúsculas.
const str16 = "Hello World";
console.log(str16.toUpperCase());
console.log("\n");

// ! String.trim()
console.log("String.trim()");
// * String.trim() es una función que nos permite eliminar los espacios en blanco de un string.
const str17 = " Hello World ";
console.log(str17.trim());
console.log("\n");

// ! String.valueOf()
console.log("String.valueOf()");
// * String.valueOf() es una función que nos permite obtener el valor primitivo de un string.
const str18 = "Hello World";
console.log(str18.valueOf());
console.log("\n");
