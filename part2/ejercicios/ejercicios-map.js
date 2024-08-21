/*Ejercicio 7: Convertir a objetos de tipo "key-value"
Tienes un array de pares [clave, valor]. Usa map para convertirlo en un array de objetos donde cada objeto tenga una propiedad con el nombre de la clave y el valor correspondiente.*/

let pares = [
    ["nombre", "Juan"],
    ["edad", 25],
    ["pais", "España"]
  ];


pares.map((par)=> Object.defineProperty({}, par[0], {value:par[1]}))