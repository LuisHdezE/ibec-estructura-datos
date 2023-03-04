// Arrays

const leters = ['a', 'b', 'c', 'd', 'e'];

console.log(leters);
// Propiedad length
// Indica el numero de elementos que tiene mi Array
console.log(leters.length);

// Metodos para ingresar un elemento nuevo a un array o retirar elementos existentes

leters.push('f');
leters.unshift('h'); // agregando un elemento al inicio del array
console.log(leters);

// Metodo para retirar o remover un array
leters.pop(); // retira la f que se acaba de agregar

leters.shift(); // retira el elemento con el index mas bajo

console.log(leters);

// Recorriendo un array con un bucle
// for (let i = 0; i < leters.length; i++) {
//   console.log(leters[i]);
// }

// Métodos de iteración

// .forEach()
// leters.forEach((leter) => console.log(leter));

const fruits = ['🍑', '🍐', '🍌', '🍓', '🍉', '🥝', '🍊'];

// .find()
// devuelve el elemento de un array que cumpla con una condicion dada, en caso contrario devuelve un undefined
const result = fruits.find((fruit) => fruit === '🍐');
console.log('Resultado de busqueda: ', result);
