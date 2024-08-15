/* Ejercicio 1: Filtrar números pares
// Dado un array de números, utiliza filter para crear un nuevo array que contenga solo los números pares. */

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let par = [];
for (let i = 0; i < numeros.length - 1; i++) {
  if (numeros[i] % 2 == 0) {
    par.push(numeros[i]);
  }
}

numeros.filter((number) => {
  return number % 2 == 0 ? [].push(number) : "";
});

/*Ejercicio 2: Filtrar palabras largas
Tienes un array de palabras. Usa filter para obtener un nuevo array con palabras que tengan más de 5 letras.*/

let palabras = ["manzana", "pera", "banana", "kiwi", "durazno", "uva"];

let palabrasConCincoLetras = [];
for (let i = 0; i < palabras.length - 1; i++) {
  if (palabras[i].length >= 5) {
    palabrasConCincoLetras.push(palabras[i]);
  }
}

palabras.filter((palabra) => {
  return palabra.length >= 5 ? [].push(palabra) : "";
});

/*Ejercicio 3: Filtrar objetos por propiedad
Tienes un array de objetos que representan personas, cada una con un nombre y una edad. Usa filter para crear un nuevo array que contenga solo las personas mayores de 18 años.*/

let personas = [
  { nombre: "Juan", edad: 16 },
  { nombre: "Ana", edad: 22 },
  { nombre: "Pedro", edad: 14 },
  { nombre: "Lucía", edad: 30 },
  { nombre: "Sofía", edad: 19 },
];

personas.filter((persona) => {
  return persona.edad > 18 ? [].push(persona) : "";
});

/*Ejercicio 4: Filtrar objetos anidados por múltiples condiciones
Tienes un array de objetos que representan libros. Cada libro tiene un título, un autor, y un objeto detalles que incluye el número de páginas y la calificación (rating). Usa filter para obtener los libros que tengan más de 300 páginas y una calificación mayor a 4.5.*/

let libros = [
  {
    titulo: "El Quijote",
    autor: "Cervantes",
    detalles: { paginas: 500, rating: 4.8 },
  },
  {
    titulo: "Cien Años de Soledad",
    autor: "García Márquez",
    detalles: { paginas: 300, rating: 4.7 },
  },
  {
    titulo: "El Principito",
    autor: "Saint-Exupéry",
    detalles: { paginas: 150, rating: 4.6 },
  },
  {
    titulo: "La Odisea",
    autor: "Homero",
    detalles: { paginas: 400, rating: 4.4 },
  },
  { titulo: "1984", autor: "Orwell", detalles: { paginas: 328, rating: 4.9 } },
];

libros.filter((libro) => {
  return libro.detalles.paginas > 300 && libro.detalles.rating > 4.5
    ? [].push(libro)
    : "";
});

/*Ejercicio 5: Filtrar números únicos y divisibles por 3
Dado un array de números, algunos de los cuales se repiten, utiliza filter para crear un nuevo array que contenga solo los números únicos (sin repetidos) y que sean divisibles por 3. Para eliminar duplicados, podrías necesitar usar filter junto con otro método de array.*/

let numeros2 = [1, 3, 6, 9, 12, 3, 18, 21, 21, 4, 6, 9];

//con indexOf
numeros2.filter(
  (value, index) => numeros2.indexOf(value) === index && value % 3 == 0
);

// con set
[...new Set(numeros2)].filter((numero) => numero % 3 === 0);

/*Ejercicio 6: Filtrar y transformar objetos según múltiples criterios
Tienes un array de objetos que representan transacciones bancarias. Cada transacción tiene un monto, un tipo (puede ser "ingreso" o "gasto"), y una fecha. Usa filter para crear un nuevo array que contenga solo las transacciones de tipo "gasto" ocurridas en el último mes (puedes asumir que la fecha es una cadena en formato "YYYY-MM-DD"). Luego, utiliza map para crear un array que contenga solo los montos de estas transacciones.*/

let transacciones = [
  { monto: 200, tipo: "ingreso", fecha: "2024-07-15" },
  { monto: 50, tipo: "gasto", fecha: "2024-08-10" },
  { monto: 300, tipo: "gasto", fecha: "2024-08-05" },
  { monto: 150, tipo: "ingreso", fecha: "2024-07-25" },
  { monto: 100, tipo: "gasto", fecha: "2024-06-20" },
];

transacciones.filter((transaccion) => {
  return transaccion.fecha.getMounth.substring(5) ==
    new Date("2024/08/14").substring(5) + 1 && transaccion.tipo == "gasto"
    ? transaccion.monto
    : "";
});
