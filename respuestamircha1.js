// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

/* function cadena(texto){
if (typeof texto === 'string'){
  console.log(texto.length);
  }else{
    console.log('no es un cadena de texto')
  };
}
cadena('Hola mundo');
 */

/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
 */

/*  function corte(){
	let cort = 'Hola mundo';
  console.log(cort.slice(0,5));
}
corte();

 */
/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
 */
/* function convArr(){
	let text = 'Hola mundo';
  arr1 = text.split(' ');
 	console.log(arr1);
}
convArr();

 */

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

/* 
function repeatCad(){
	let text = 'Hola munodo';
  for (i='0'; i >= 5; i++);
 	console.log(text.repeat(3));
}
repeatCad();
 */
// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
 
/* 
let cadena = "Hola mundo";
function invCadena(cadena){
    let nuevaCadena = "";
    for (let  x = cadena.length - 1; x >= 0; x--) {
        nuevaCadena += cadena[x];
    }
    return nuevaCadena;
}

invCadena(cadena);

 */


/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
 */
// analizar
 /* https://es.stackoverflow.com/questions/276083/m%C3%A9todo-para-saber-cuantas-veces-se-repite-un-numero-en-dos-arrays */

// forEach
// indexOf
// filter
// match
// find

// verificar estos metodos de los array


/* let text = 'Hola mundo adios mundo';
let repeStr = text.split(' ');

function checkRep() {
  console.log(repeStr.includes('mundo')); //validando que existe
  // contar el numero de veces que esta repetido
  const result = repeStr.filter((repeStr) => repeStr.includes("mundo"));
  // mostrar el resultado
  console.log(result.length);
  
}
checkRep(); */

/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. */

/* let word = 'salas';

function palindromo(word) {
  let newWord = "";
  for (let x = word.length - 1; x >= 0; x--) {
    newWord += word[x];
  }
  console.log(newWord);

  if (newWord === "salas" && word === "salas") {
  
    console.log("true");
  }

}

palindromo(word);

 */
/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
 */



/* function reemplazarCadena(cadenaVieja, cadenaNueva, cadenaCompleta) {
  // Reemplaza cadenaVieja por cadenaNueva en cadenaCompleta

  for (var i = 0; i < cadenaCompleta.length; i++) {
    if (cadenaCompleta.substring(i, i + cadenaVieja.length) == cadenaVieja) {
      cadenaCompleta =
        cadenaCompleta.substring(0, i) +
        cadenaNueva +
        cadenaCompleta.substring(i + cadenaVieja.length, cadenaCompleta.length);
    }
  }
  console.log(cadenaCompleta);
}

reemplazarCadena("xyz1, xyz2, xyz3, xyz4, xyz5", "5", "1 2 3 4 5"); */
/* 
function extraStr(){
  let str = "xyz1, xyz2, xyz3, xyz4, xyz5";
  let res = str.substring(3, 4);
  let res2 = str.substring(9,10);
  let res3 = str.substring(15, 16);
  let res4 = str.substring(21, 22);
  let res5 = str.substring(27, 28);
  console.log(res, res2, res3, res4, res5);
}
extraStr();
 */

 /* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600. */

/* function numAlea(min, max) {
    let numa =  Math.round(Math.random() * (max -min) + min);
    console.log(numa)

}

numAlea(501,600);
 */

/* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
 */
/* 
esto es para cadenas de texto o palabras

String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};

function testCapCua(word) {
  //Una vez definido, ya lo tenemos practicamente hecho.
  var inverseWord = word.reverse();
  if (word == inverseWord) {
    //Si la palabra es igual a la palabra girada.
    alert("La palabra '" + word + "' SI es cap i cua");
    return true; //Es capicua/palindromo.
  } else {
    alert("La palabra '" + word + "' NO es cap i cua: '" + inverseWord + "'");
    return false; //NO es capicua/palindromo.
  }
} 

testCapCua();
 */
/* let txt1, centena, decena, unidad;
txt1 = parseInt( prompt('Favor digita el numero: '));

    centena = Math.floor(txt1 / 100);
    decena = Math.floor((txt1 % 100) / 10);
    unidad = Math.floor((txt1 % 100) % 10);

    if ( centena  === unidad){
      console.log('EL numero es capicua');
    }else{
      console.log('Elnumero no es capicua');
     }*/

/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */
/* 
let fact;

function factorial(n) {
  let fact = 1;
  // expresion para factorial
  for (let i = n; i > 0; i--)  {
          fact = fact *  i ;      
  }
  return console.info(`El factorial es: ${fact}`);
  
}

factorial(5);
 */

/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true. */
/* 
function primo(n) {
    numbers = n;
    if (numbers % n === 0) {
      return console.info('Es un numero primo');
    return console.log('No es un numero primo');
    }  
}

primo(7); */

/* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar. */
/* 
function parImpar(n) {
      if (n % 2 === 0) {
      return console.info('Es un numero par');
    }  else{
      return console.log("es un numero impar");
    }
}

parImpar(29); */

/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F */

/* let c=0;
let f=0;
let numC = c;
let numF = f;
let cTemp = "celcius";
let fTemp = "fahrenheit";
let fToCel = (numC * 9) / 5 + 32;
let cToFar = ((numF - 32) * 5) / 9;
  
function convertTemp(c, f) {
  const resultado =
    numC === c || numF !== ''
      ? console.info(
          `el dato es ${numC} y el resultado es ${fToCel}°F en grados ${fTemp}`
        )
      : console.warn('no no no')  
  const resultado2 =    
    numC != '' || numF === f
      ? console.info(
          `el dato es ${numf} y el resultado es ${cToFar}°C en grados ${cTemp}`
        )
      : console.error("asi no");

  return resultado, resultado2;
}

convertTemp(0,'c');

 */
/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10. */


/* let b = '';
let d = '';
let nBin = b;
let nDec = d;
let bToDec;
let cToBin;


const convertNum = (b, d)=>{
  bToDec = parseInt(b,2).toString(10);
  console.info(bToDec);

 
  cToBin = parseInt(d, 10).toString(2)
  console.info(cToBin);

}

convertNum('100','2');
 */
/* 
let value = '';
let unit = '';




const convN = (value, unit)=>{
  if (!value || !unit)
    return console.error("No has ingresado los datos de número y unidad");
  if (value === undefined) return console.warn(" No ingresaste un numero");
  if (typeof unit !== "number")
    return console.error(`El dato "${unit}" ingresado, No es un numero`);
if (typeof value !== "number")
  return console.error("el dato ingresado no es un numero");


  // de binario a decimal
  let bToDec = (value.toString(unit));
    console.info(`el numero binario ingresado es ${value} y su valor binario es ${bToDec} `);

//  de decimal a binario
  let dToBin = parseInt(value, unit);
   console.info(`el numero decimal ingresado es ${value} y su valor decimal es ${dToBin} `);
}

convN(100, 2);
 */


/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800. */

/* let value = '';
let discount = '';

const discountapp = (value, discount) =>{
    if (isNaN(value)) return console.error("No ingreso un número");

    let result = ((value *- discount / 100) + value);
    console.info(`su descuento es ${discount} y su monto quedo en:  ${result}`)

}

discountapp(1000, 20);
 */

/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). */



/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5. */

/* 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero. */

/* 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */

/* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25]. */

/* 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60]. */

/* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
 */

/* La expresión regular que uso para el email en este video /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i */

/* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }. */

/* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]. */

/* 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

 */
/* La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
 */


 // funcion para validaciones de numero
/* 
const validateNum = (num = undefined)=>{

if (Math.sign(num) === -1)
  return console.error("El número no puede ser negativo");
if (num === undefined)
    return console.error("No ingresaste el número");
if (!num) return console.error("No ingreso el valor");
 if (isNaN(num)) return console.error("No ingreso un número");
 if (typeof num !== 'number' ) return console.error('el dato ingresado no es un numero');

}

validateNum('x')
 */