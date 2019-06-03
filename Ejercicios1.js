// Imprime la fecha actual

var f= new Date ();
console.log(f.toString());
console.log(f.getDate());

// Obten el área...perimetro? de un triángulo. Pidele los 3 lados al usuario
let number1 = Number(window.prompt('Dame el primer número'));
let number2 = Number(window.prompt('Dame el segundo número'));
let number3 = Number(window.prompt('Dame el tercer número'));

let PerimetroT = (number1 + number2 + number3);

alert(PerimetroT); 

// Voltea una string dada por el usuario

var palabra = String(window.prompt('Inserte aquí una palabra'));
var str= palabra.split("")
alert(str.reverse(palabra).join(""));

// Voltea una string dada por el usuario sin usar el método de reverse

function invertir(cadena) {
	var cadena = String(window.prompt('ingresa cadena invertida'));
	var x = cadena.length;
	var cadenaInvertida = "";
	while (x>=0) {
		cadenaInvertida = cadenaInvertida + cadena.charAt(x);
		x--;
	}
    alert(cadenaInvertida);  
}

// Convierte una temperatura dada en C o F a F o C, respectivamente
/*
  C -> F: (C x 9/5) + 32
  F -> C: (F - 32) x 5/9
  Ejemplos:
  60C: 140F
  45C: 7.222222222222222C
*/

function convertir(){
    let celsval = document.getElementById ('celsius').value
    let fahrval = document.getElementById ('fahr').value
    if (!celsval) {
        console.log((fahrval - 32) * 5/9);
    } else {
        console.log(celsval*9./5. + 32);
    }
}

// Crea un objeto que tenga una propiedad cuyo nombre es definido por el usuario. Su valor debe ser verdadero
/*
  si prop es el nombre,
  a  = {};
  a.prop = true
*/

var objeto = {};
var valUsuario = String(window.prompt('Inserte aquí una palabra'));
Object.defineProperty(objeto, valUsuario, {
    value: true
    });

//ooooo tambien:

var objeto2 = {};
objeto2[String(window.prompt('Inserte aquí una palabra'))] = true


// Realiza la suma de los valores que de el usuario hasta recibir un valor negativo

var result = 0
var i = 0

do {
i = Number(window.prompt('Dame un número'));
result = result + i;
} while (i>-1)

alert(result);

///ooo
var n1 = Number(window.prompt('Ingresa un número'))
var n2 = 0

while(n1 >= 0) {
    n2 += n1;
var n1 = Number(window.prompt('Ingresa un número'))
}
console.log ('La suma es: ' + n2);

// Convierte a mayúscula la primer letra de cada palabra en una cadena dada por el usuario


var texto = String(window.prompt("ingresa el texto :3"));
var mayus = texto.replace(/\b\w/g, function(palabra) {
  return palabra.toUpperCase() 
});
alert(mayus);

// Revisa si un número dado es múltiplo de 3 o de 7

function multiplo() {
    let num = Number(window.prompt("Ingresa un número para saber si es múltiplo de 3 o 7"));
    
    if (num % 3 === 0) {
        alert (num + "es múltiplo de 3");
    }
    else if ( num % 7 === 0) {
        alert (num + "es múltiplo de 7");
    }
    else {
        alert (num + "no es múltiplo ni de 3 ni de 7");
    }
}   


// Revisa cuantas veces se repite un caracter dado en una cadena dada

var palabraIng = String(window.prompt("Ingresa una palabra"));
var letraBuscar = String(window.prompt("Ingresa el carácter a buscar"));
var cantidad = 0;

for (var i = 0; i < palabraIng.length; i++) {
    if (palabraIng[i].toLowerCase() === letraBuscar) cantidad ++; 
}
 alert ("El texto ingresado contiene " + cantidad + " letras " + letraBuscar );


// Revisa cuantas veces se repite un valor dado en un arreglo

// var arreglo = ['Manzana', 'Mora', 'Banana', 'Mora', 'Mora', 'Sandia', 'Melon', 'Mora', 'Fresa', 'Mora', 'Mango', 'Kiwi', 'Mora' ];
var arreglo = [1, 1, 1, 1, 1, 1, 2, 3];
var arrBuscar = 1;
// var arrBuscar = Mora;
var cantidad = 1;

for (var i = 0; i < arreglo.length; i++) {
    if (arreglo[i] === arrBuscar) cantidad ++; 
}
 alert ("Existen " + cantidad + " números 1");


// Divide un número de 3 dígitos en sus centenas, decenas y unidades
  // 103 -> 1 centena, 0 decenas, 3 unidades

  var numDig = Number(window.prompt("Ingresa un número"));
    
  function convNum ()  {
    var num = numDig.toString().split('');
    var numresult = num[0] + " centenas " + num[1] + " decenas y "+ num[2] + " unidades"
    alert ("El número ingresado tiene " + numresult)
    }
    convNum();


// Regresa todos los caracteres que no sean letras de una cadena

var palabraIngNoletra = String(window.prompt("Ingresa una palabra"));
var arregloNoletra = [];
var Regetz = /[A-Za-z]/

for (var i = 0; i < palabraIngNoletra.length; i++) {
    if (!palabraIngNoletra[i].match(Regetz)) {
        arregloNoletra.push( palabraIngNoletra[i] ); 
    } 
}
 alert ("Los carácteres " + (arregloNoletra.join(""))+ " no son letras");


// Haz una función que lanza un error con el mensaje dado por el usuario

function Errr(){
    let msjError = String(window.prompt("Escribe un mensaje de error"))
    throw new Error (msjError);
};

 // Extiende la función anterior para atrapar el error e imprimir su mensaje y stack

function impErr () {
    try {
        throw Errr(); // genera una excepción
    }
    catch (Error) {

        alert(Error.stack)
        // logMyErrors(e); // pasa el objeto de la excepción al manejador de errores
    }
}
impErr()

 // function Errr(message) {
//     this.name = 'SuperError';
//     this.message = message || msjError;
//     this.stack = (new Error()).stack;
//   }





// Suma los contenidos de un arreglo de números

var arregloNum = [ 1, 1, 1, 1, 1, 1, 1, 1 ];
var i = 0
var sumaArr = 0
for (var i = 0; i < arregloNum.length; i++) {
    sumaArr= sumaArr + arregloNum[i];
}
 alert ("El resultado de los número del arreglo es " + sumaArr);

// Regresa un arreglo nuevo con el cuadrado de cada valor del arreglo original

var aConvertir = [25, 1, 25];
var i = 0
var raiz = 0
var arrRaiz = [];

for (var i = 0; i < aConvertir.length; i++) {
   arrRaiz.push(Math.sqrt(aConvertir[i]));
}
alert(arrRaiz.join('\n'))

// alert (arrRaiz);
//uuups, hice raiz cuadrada :p

// Regresa que tipo de ángulo es el dado
/*
  Agudo: 0 a 90 grados
  Recto: 90 grados
  Obtuso: 90 a 180 grados
  Llano: 180 grados
*/

var angulo = Number(window.prompt("Ingresa una ángulo"));
    if (angulo > 0 && angulo < 90 ) {
        alert("El ángulo es agudo");
    }       
    else if (angulo === 90 ) {
        alert("El ángulo es recto");
    }
    else if (angulo > 90 && angulo < 180 ) {
        alert("El ángulo es obtuso");
    }
    else if {
        alert("El ángulo es llano");
    } else {
        alert("El ángulo ingresado debe estar entre 0 y 180")
    }


// Regresa un arreglo nuevo sin los valores repetidos de un arreglo original

//filter es una función (de filtro jaja) que traen los arreglos en nuevas vers de JS
// El indexOf busca el índice de la primera aparición del item y lo compara con el actual
//Si son iguales lo devuelve y se introduce en el nuevo arreglo
//Cómo solo la primera aparición dará true a esa coincidencia pues terminas con uno de cada elemento
//Filter devuelve un arreglo 

var arrRep = ['a', 1, 'a', 2, 1]
var arrNoRep = arrRep.filter((v, i, a) => a.indexOf(v) === i);
console.log(arrNoRep);




///ooooo

var arrOrig = [1, 1, 1, 1, 1, 1, 2, 3];
var arrSinRep = [];
var rep 

for (var i = 0; i < arrOrig.length; i++) {
    if (arrOrig[i] === arrBuscar) cantidad ++; 
}
 alert ("Existen " + cantidad + " números 1");

 arregloNoletra.push( palabraIngNoletra[i] ); 

// Quita los valores repetidos de un arreglo (sin usar otro arreglo)


var arr = ['a', 1, 'a', 2, 1    ]
var unique = arr.filter((v, i, a) => a.indexOf(v) === i);
console.log(unique);


// Convierte un número binario dado por el usuario a decimal



// Convierte un número decimal dado por el usuario a binario, octal y hexadecimal (bases 2, 8 y 16)

var numDec = Number(window.prompt("Ingresa un número"));
alert("El número ingresado en binario es " + (numDec * 2) + " , en octal es " + (numDec * 8) + ", y en hexadecimal es " + (numDec * 16) ) 


// Regresa la cantidad de valores que comparten dos arreglos diferentes
 []
 []
var same = 0

 

// Valida que una cadena dada no tenga espacios en blanco

function validarNombre(){
    var p1 = document.getElementById("nombre").value;  //tomamos en una variable lo ingresado en el login nombre
    
    var espacios = false;
    var cont = 0;
    
    while (!espacios && (cont < p1.length)) {
    	if (p1.charAt(cont) == " "){ 
    	espacios = true;
    	cont++;
    	}
    }
    
    if (espacios) { 
    	alert ("La contraseña no puede contener espacios en blanco"); 
    	return false; 
    }
}


// Dada una cadena, determina su valor de scrabble
/*
  1: E, A, I, O, N, R, T, L, S, U
  2: D, G
  3: B, C, M, P
  4: F, H, V, W, Y
  5: K
  8: J, X
  10: Q, Z
*/

// Determina si una cadena dada por el usuario es un palíndromo

// Implementa una lista ligada

// Implementa una lista doblemente ligada

// Obten el Máximo común divisor de dos números dados

