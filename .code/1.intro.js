// ! Declaración de funciones constantes en ES6
const sum = function (a, b) {
  return a + b;
};

// ! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// ! VARIABLES
// * Declaración de variables con var
var a = 1;
// * Declaración de variables con let
let b = 2;
// * Declaración de variables con const
const c = 3;

// la diferencia entre let y var es que let solo se puede declarar una vez (alcance local)
// let b = 4; // Esto no se puede hacer
// La diferencia entre const y let es que const no se puede reasignar (alcance local)
// c = 4; // Esto no se puede hacer

// ! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// ! Métodos para mostrar información en la consola
console.log(sum(1, 2));
console.error("Error");
console.warn("Warning");
console.log("\n");

// ! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// ! IGUALDAD ABSTRACTA (==) Y ESTRICTA (===)
console.log(5 == "5"); // Igualdad abstracta, devuelve true
console.log(5 === "5"); // Igualdad estricta, devuelve false
console.log("\n");

// ! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// ! OBJETOS LITERALES
// * Declaración de objetos literales

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

console.log(person.name, person.age);

// * Acceder a las propiedades de un objeto
console.log(person.hobbies[1]); // movies
console.log(person.address.city); // Boston
console.log("\n");

// * Eliminar una propiedad de un objeto
delete person.age;
console.log(person);
console.log("\n");

// * Desestructuración de objetos
const { name, age } = person; // Se crea una variable con el nombre de la propiedad del objeto
console.log(name, age); // age es undefined porque se eliminó
console.log("\n");

// * Desestructuración de objetos anidados
const { street, city, state } = person.address;
console.log(street, city, state);
console.log(person.address.street, person.address.city, person.address.state);
console.log("\n");

// * Recorrer un objeto
for (let x in person) {
  console.log(x);
}
console.log("\n");

// * Recorrer los valores de un objeto
for (let x in person) {
  console.log(person[x]);
}
console.log("\n");

// ! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// ! COMPARAR OBJETOS
const person1 = {
  name: "John",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 Main st",
    city: "Boston",
    state: "MA",
  },
};

const person2 = {
  name: "John",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 Main st",
    city: "Boston",
    state: "MA",
  },
};

console.log(person1 == person2); // false

// * Igualdad estricta y abstracta
console.log(person === person2); // false
// Esto es falso porque se está comparando la referencia de la memoria, no el contenido

// * Comparar el contenido de los objetos
console.log(JSON.stringify(person1) === JSON.stringify(person2)); // true
// o también
console.log(person.name === person2.name); // true
console.log("\n");

// ! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// ! FUNCIONES COMO PROPIEDADES DE UN OBJETO LITERAL
const person3 = {
  name: "John",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 Main st",
    city: "Boston",
    state: "MA",
  },
  getBirthYear: function () {
    return 2020 - this.age;
  },
};

console.log(person3.getBirthYear());
console.log("\n");

// * Tambien se puede declarar una función como una propiedad de un objeto literal de la siguiente manera
const person4 = {
  name: "John",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 Main st",
    city: "Boston",
    state: "MA",
  },
  getBirthYear() {
    return 2020 - this.age;
  },
};

console.log(person4.getBirthYear());
console.log("\n");

// ! - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// ! FUNCIONES DE ORDEN SUPERIOR Y CLAUSURAS
console.log("FUNCIONES DE ORDEN SUPERIOR Y CLAUSURAS");

// * Funciones de orden superior
console.log("Funciones de orden superior");
function add(a, b) {
  return a + b;
} // Función normal

function substract(a, b) {
  return a - b;
} // Función normal

function multiply(a, b) {
  return a * b;
} // Función normal

function divide(a, b) {
  return a / b;
} // Función normal

function calculator(a, b, operator) {
  return operator(a, b);
} // Función de orden superior

console.log(calculator(5, 2, add)); // 7
console.log(calculator(5, 2, substract)); // 3
console.log(calculator(5, 2, multiply)); // 10
console.log(calculator(5, 2, divide)); // 2.5

// * Funciones de orden superior con funciones anónimas
console.log("Funciones de orden superior con funciones anónimas");
console.log(
  calculator(5, 2, function (a, b) {
    return a + b;
  })
); // 7
console.log(
  calculator(5, 2, function (a, b) {
    return a - b;
  })
); // 3
console.log(
  calculator(5, 2, function (a, b) {
    return a * b;
  })
); // 10
console.log(
  calculator(5, 2, function (a, b) {
    return a / b;
  })
); // 2.5

// * Funciones de orden superior con funciones flecha
console.log("Funciones de orden superior con funciones flecha");
console.log(calculator(5, 2, (a, b) => a + b)); // 7
console.log(calculator(5, 2, (a, b) => a - b)); // 3
console.log(calculator(5, 2, (a, b) => a * b)); // 10
console.log(calculator(5, 2, (a, b) => a / b)); // 2.5

// * Funciones de orden superior con funciones flecha y funciones anónimas
console.log(
  "Funciones de orden superior con funciones flecha y funciones anónimas"
);
console.log(
  calculator(5, 2, (a, b) => {
    return a + b;
  })
); // 7
console.log(
  calculator(5, 2, (a, b) => {
    return a - b;
  })
); // 3
console.log(
  calculator(5, 2, (a, b) => {
    return a * b;
  })
); // 10
console.log(
  calculator(5, 2, (a, b) => {
    return a / b;
  })
); // 2.5

// * Clausuras
console.log("Clausuras");
function outer() {
  let a = 5;
  function inner() {
    let b = 10;
    console.log(a + b);
  }
  inner();
}

outer(); // 15
console.log("\n");


// ! CONSTRUCTOR DE OBJETOS
console.log("CONSTRUCTOR DE OBJETOS");

// * Constructor de objetos
console.log("Constructor de objetos");

function Person(name, age, hobbies) {
  // this = {}; (implícitamente)
  this.name = name;
  this.age = age;
  this.hobbies = hobbies;
  // return this; (implícitamente)
}

const person5 = new Person("John", 30, ["music", "movies", "sports"]);
console.log(person5);
console.log("\n");

// * Constructor de objetos con métodos
console.log("Constructor de objetos con métodos");

function Person2(name, age, hobbies) {
  this.name = name;
  this.age = age;
  this.hobbies = hobbies;
  this.getBirthYear = function () {
    return 2020 - this.age;
  };
}

const person6 = new Person2("John", 30, ["music", "movies", "sports"]);
console.log(person6);
console.log(person6.getBirthYear());
console.log("\n");
