/*Ejercicio 1: Calcular la suma de los cuadrados
Dado un array de números, utiliza reduce para calcular la suma de los cuadrados de cada número.*/

let numeros = [2, 3, 4];

numeros.reduce((acc, current) => acc + current * current, 0);

/*Ejercicio 2: Crear un objeto que cuente las letras
Dado un array de palabras, usa reduce para crear un objeto que cuente cuántas veces aparece cada letra (sin importar mayúsculas o minúsculas).*/

let palabras = ["Hola", "mundo"];

let conteoLetras = palabras
    .join("") // Une todas las palabras en un solo string: "Holamundo"
    .toLowerCase() // Convierte el string a minúsculas: "holamundo"
    .split("") // Divide el string en un array de letras: ["h", "o", "l", "a", "m", "u", "n", "d", "o"]
    .reduce((acumulador, letra) => {
        if (acumulador[letra]) {
            acumulador[letra]++;
        } else {
            acumulador[letra] = 1;
        }
        return acumulador;
    }, {}); // Inicia con un objeto vacío {}

//Resuelto por la IA

/*Ejercicio 3: Agrupar elementos por propiedad
Tienes un array de objetos que representan productos con una propiedad categoria. Usa reduce para agrupar los productos por categoria.*/
let productos = [
    { nombre: "Camiseta", categoria: "Ropa" },
    { nombre: "Pantalón", categoria: "Ropa" },
    { nombre: "Manzana", categoria: "Fruta" },
    { nombre: "Lechuga", categoria: "Verdura" },
];

/*{
  Ropa: [
    { nombre: "Camiseta", categoria: "Ropa" },
    { nombre: "Pantalón", categoria: "Ropa" }
  ],
  Fruta: [
    { nombre: "Manzana", categoria: "Fruta" }
  ],
  Verdura: [
    { nombre: "Lechuga", categoria: "Verdura" }
  ]
}*/

/*Ejercicio 4: Encontrar el máximo en un array de objetos
Tienes un array de objetos que representan estudiantes, cada uno con una propiedad nombre y calificacion. Usa reduce para encontrar el estudiante con la calificación más alta.*/

let estudiantes = [
    { nombre: "Juan", calificacion: 85 },
    { nombre: "Ana", calificacion: 92 },
    { nombre: "Pedro", calificacion: 88 },
];

let mayorNota = estudiantes.reduce((acc, el) => {
    if (acc < el.calificacion) {
        return el;
    } else if (acc.calificacion < el.calificacion) {
        return el;
    } else {
        return acc;
    }
}, 0);
console.log("mayorNota", mayorNota);

/*Ejercicio 5: Aplanar un array de objetos
Tienes un array de objetos que contienen un array de sub-elementos. Usa reduce para aplanar todos los sub-elementos en un solo array.
*/

let datos = [
    { id: 1, valores: [10, 20, 30] },
    { id: 2, valores: [40, 50] },
    { id: 3, valores: [60] },
];

let ordenados = datos.reduce((acc, el) => acc.concat(el.valores), []);
console.log(ordenados);

/*Ejercicio 6: Transformar un array de objetos a un objeto clave-valor
Dado un array de objetos que representan configuraciones, usa reduce para transformarlo en un solo objeto donde las claves sean los nombres y los valores sean las valores correspondientes.*/

let configuraciones = [
    { nombre: "tema", valor: "oscuro" },
    { nombre: "lenguaje", valor: "espanol" },
    { nombre: "mostrarNotificaciones", valor: true },
];

let llaveValor = configuraciones.reduce((acc, el) => {
    acc[el.nombre] = el.valor;
    return acc;
}, {});

console.log(llaveValor);
