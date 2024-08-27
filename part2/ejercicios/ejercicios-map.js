/*Ejercicio 1: Elevar al cuadrado cada número
Dado un array de números, utiliza map para crear un nuevo array donde cada número esté elevado al cuadrado.*/

let numeros = [1, 2, 3, 4, 5];

numeros.map((numero) => numero * numero);

/*Ejercicio 2: Convertir palabras a mayúsculas
Tienes un array de palabras en minúsculas. Usa map para crear un nuevo array donde cada palabra esté en mayúsculas.*/

let palabras = ["hola", "mundo", "javascript", "es", "genial"];

palabras.map((palabra) => palabra.toUpperCase());

/*Ejercicio 3: Extraer propiedades de objetos
Tienes un array de objetos que representan personas, cada una con un nombre y una edad. Usa map para crear un nuevo array que contenga solo los nombres de las personas.*/

let personas = [
  { nombre: "Juan", edad: 25 },
  { nombre: "Ana", edad: 30 },
  { nombre: "Pedro", edad: 22 },
];

personas.map((persona) => persona.nombre);

/*Ejercicio 4: Transformar objetos
Tienes un array de objetos que representan productos, cada uno con un nombre y un precio. Usa map para crear un nuevo array donde cada objeto tenga un precioConImpuesto (precio con un 10% de impuesto agregado).*/

let productos = [
  { nombre: "Camiseta", precio: 20 },
  { nombre: "Pantalón", precio: 30 },
  { nombre: "Zapatos", precio: 50 },
];

productos.map((producto) =>
  Object.defineProperty(producto, "precioConImpuesto", {
    value: producto.precio * 0.1 + producto.precio,
  })
);

/*Ejercicio 5: Convertir objetos a cadenas de texto
Tienes un array de objetos que representan libros, cada uno con un titulo y un autor. Usa map para crear un nuevo array que contenga cadenas de texto en el formato "Título - Autor".*/

let libros = [
  { titulo: "El Quijote", autor: "Cervantes" },
  { titulo: "Cien Años de Soledad", autor: "García Márquez" },
  { titulo: "1984", autor: "Orwell" },
];

libros.map((libro) => libro.titulo + " - " + libro.autor);

/*Ejercicio 6: Aplanar un array de arrays
Tienes un array de arrays (matriz). Usa map para convertirlo en un array de cadenas de texto donde cada cadena sea una lista de números separados por comas.*/

let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

matriz.map((numeros) => numeros.toString());

/*Ejercicio 7: Convertir a objetos de tipo "key-value"
Tienes un array de pares [clave, valor]. Usa map para convertirlo en un array de objetos donde cada objeto tenga una propiedad con el nombre de la clave y el valor correspondiente.*/

let pares = [
    ["nombre", "Juan"],
    ["edad", 25],
    ["pais", "España"]
  ];


pares.map((par)=> Object.defineProperty({}, par[0], {value:par[1]}))