// ? DATE METHODS

console.log("DATE METHODS");
console.log("\n");

// ! Date.now()
console.log("Date.now()");
// * Date.now() es una función que nos permite obtener la fecha actual en milisegundos.
console.log(Date.now());
console.log("\n");

// ! Date.parse()
console.log("Date.parse()");
// * Date.parse() es una función que nos permite convertir una fecha en milisegundos.
console.log(Date.parse("2021-01-01"));
console.log("\n");

// ! Date.UTC()
console.log("Date.UTC()");
// * Date.UTC() es una función que nos permite convertir una fecha en milisegundos.
console.log(Date.UTC(2021, 0, 1));
console.log("\n");

// ! Date()
console.log("Date()");
// * Date() es una función que nos permite crear un objeto de fecha.
const date = new Date();
console.log(date);
console.log("\n");

// ! Date.getFullYear()
console.log("Date.getFullYear()");
// * Date.getFullYear() es una función que nos permite obtener el año de un objeto de fecha.
console.log(date.getFullYear());
console.log("\n");

// ! Date.getMonth()
console.log("Date.getMonth()");
// * Date.getMonth() es una función que nos permite obtener el mes de un objeto de fecha.
console.log(date.getMonth());
console.log("\n");

// ! Date.getDate()
console.log("Date.getDate()");
// * Date.getDate() es una función que nos permite obtener el día de un objeto de fecha.
console.log(date.getDate());
console.log("\n");

// ! Date.getDay()
console.log("Date.getDay()");
// * Date.getDay() es una función que nos permite obtener el día de la semana de un objeto de fecha.
console.log(date.getDay());
console.log("\n");

// ! Date.getHours()
console.log("Date.getHours()");
// * Date.getHours() es una función que nos permite obtener la hora de un objeto de fecha.
console.log(date.getHours());
console.log("\n");

// ! Date.getMinutes()
console.log("Date.getMinutes()");
// * Date.getMinutes() es una función que nos permite obtener los minutos de un objeto de fecha.
console.log(date.getMinutes());
console.log("\n");

// ! Date.getSeconds()
console.log("Date.getSeconds()");
// * Date.getSeconds() es una función que nos permite obtener los segundos de un objeto de fecha.
console.log(date.getSeconds());
console.log("\n");

// ! Date.getMilliseconds()
console.log("Date.getMilliseconds()");
// * Date.getMilliseconds() es una función que nos permite obtener los milisegundos de un objeto de fecha.
console.log(date.getMilliseconds());
console.log("\n");

// ! Date.getTime()
console.log("Date.getTime()");
// * Date.getTime() es una función que nos permite obtener los milisegundos de un objeto de fecha.
console.log(date.getTime());
console.log("\n");

// ! Date.setTime()
console.log("Date.setTime()");
// * Date.setTime() es una función que nos permite establecer los milisegundos de un objeto de fecha.
date.setTime(0);
console.log(date);
console.log("\n");

// ! Date.setFullYear()
console.log("Date.setFullYear()");
// * Date.setFullYear() es una función que nos permite establecer el año de un objeto de fecha.
date.setFullYear(2021);
console.log(date);
console.log("\n");

// ! Date.setMonth()
console.log("Date.setMonth()");
// * Date.setMonth() es una función que nos permite establecer el mes de un objeto de fecha.
date.setMonth(0);
console.log(date);
console.log("\n");

// ! Date.setDate()
console.log("Date.setDate()");
// * Date.setDate() es una función que nos permite establecer el día de un objeto de fecha.
date.setDate(1);
console.log(date);
console.log("\n");

// ! Date.setHours()
console.log("Date.setHours()");
// * Date.setHours() es una función que nos permite establecer la hora de un objeto de fecha.
date.setHours(0);
console.log(date);
console.log("\n");

// ! Date.setMinutes()
console.log("Date.setMinutes()");
// * Date.setMinutes() es una función que nos permite establecer los minutos de un objeto de fecha.
date.setMinutes(0);
console.log(date);
console.log("\n");

// ! Date.setSeconds()
console.log("Date.setSeconds()");
// * Date.setSeconds() es una función que nos permite establecer los segundos de un objeto de fecha.
date.setSeconds(0);
console.log(date);
console.log("\n");

// ! Date.setMilliseconds()
console.log("Date.setMilliseconds()");
// * Date.setMilliseconds() es una función que nos permite establecer los milisegundos de un objeto de fecha.
date.setMilliseconds(0);
console.log(date);
console.log("\n");
