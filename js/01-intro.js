// Tipos datos
// string, number, booleam
// undefined, null, NaN

// variables
const pi = 3.14;
let currentDate = new Date();

console.log(currentDate);

// operaciones aritmeticas
// +, -, *, /, %,

// operaciones de comparacion
// >, >=, <, <=, == (igual), === (estrictamente igual), != (desigual), !== (estrictemente desigual)
//Resultados posibles => true / false

//Operaciones logicas
// operadores: && (AND), || (OR)
// true && true = true
// false && true = false
// true && false = false
// false && false = false
//-----------------
//true || false = true
// false || true = true
// true || true = true
// false || false = false

//Operadores unitarios
// toman una variable y la modifican
// operador de incrementacion (++)
// let count = 0; => ++count  = 1
//operador de decrementacion (--)
// --count = 0

// Flujo de control
const age = 17;

if (age >= 16 && age < 18) {
  // Cuando la condicion es verdadera
  console.log('Puede conducir con consentimiento');
} else {
  // cuando la condicion es falsa
  console.warn('entre al else');
}

// switch
let key = 'a';
switch (key) {
  case 'a':
    console.log('se ejecuta caso A');
    break;

  case 'b':
    console.log('se ejecuta caso B');
    break;

  default:
    console.warn('key no coincide con un case definido');
}

// Loops o ciclos de repetición

let count = 10;
while (count >= 1) {
  console.log(count);
  --count; // valor centinela
}

// Ciclo for
//for( variable de inicio, condicion, operacion de incrementacion )

for (let i = 0; i < 20; ++i) {
  console.log('indice ' + i);
}

// Estructuras de datos
// Array
