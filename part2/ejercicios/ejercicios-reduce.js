/*Ejemplo 1: Sumar todos los números de un array
Imagina que tienes un array de números y quieres obtener su suma total:*/

var orders = [
    {amonut: 250},
    {amonut: 400},
    {amonut: 100},
    {amonut: 325},
]

/*var totalAmount = 0
for (let i = 0; i < orders.length; i++) {
    totalAmount += orders[i].amonut;
    
}*/

var totalAmount = orders.reduce((sum, order)=>sum + order.amonut,0)//Esta funcion esta devolviendo el resultado y encapsulandola en la variable totalAmunt, si la corres en el navegador tal cual no te retornara nada pero existiar la variable totalAmount en la consola con el valor final del array de orders


/*Ejemplo 3: Aplanar un array de arrays (Flatten)
Supongamos que tienes un array de arrays, y quieres convertirlo en un solo array que contenga todos los elementos:*/

let arrays = [[1, 2], [3, 4], [5, 6]];

let aplanado = arrays.reduce((acumulador, valorActual) => {
  return acumulador.concat(valorActual);
}, []);

console.log(aplanado); // [1, 2, 3, 4, 5, 6]


/*Ejemplo 4: Contar ocurrencias de elementos en un array
Si tienes un array con elementos repetidos y quieres contar cuántas veces aparece cada uno, puedes hacerlo con reduce:*/

let frutas = ['manzana', 'naranja', 'manzana', 'pera', 'naranja', 'manzana'];

let conteoFrutas = frutas.reduce((acumulador, valorActual) => {
  if (acumulador[valorActual]) {
    acumulador[valorActual]++;
  } else {
    acumulador[valorActual] = 1;
  }
  return acumulador;
}, {});

console.log(conteoFrutas); 
// { manzana: 3, naranja: 2, pera: 1 }

/*Ejercicio 5: Calcular la suma de los cuadrados
Dado un array de números, utiliza reduce para calcular la suma de los cuadrados de cada número.*/

let numeros = [2, 3, 4];


let numeroCuadrados = numeros.reduce((acc, current)=> acc + current * current,0)

/*Ejercicio 2: Crear un objeto que cuente las letras
Dado un array de palabras, usa reduce para crear un objeto que cuente cuántas veces aparece cada letra (sin importar mayúsculas o minúsculas).*/

let palabras = ["Hola", "mundo"];

// palabras.reduce((acc, current)=>{
//      if()
// },{})

let objectLetras={}
for (let i = 0; i < palabras.length; i++) {
    let count = 0;
    let palabra = palabras[i];
    for (let j = 0; j < palabra.length; j++) {
        let letra = palabra[j];
        console.log(Boolean(letra))
        if(Boolean(letra)){
            count++
            Object.defineProperty(objectLetras,letra,{
                value:count
            })
            console.log('objectLetras',objectLetras)
        }
        else{
            Object.defineProperty(objectLetras,letra,{
                value:1
            })
        }
    }
    
}
console.log(objectLetras) 