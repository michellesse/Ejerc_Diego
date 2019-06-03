// Escribe una función llamada calculateDogAge que reciba un número (la edad humana del perro)
// y calcule su edad en años de perro (edad x 7)

function calculateDogAge() {
    let edadH= Number(window.prompt('Cuántos años tiene tu perrito?'))
    alert ("Tu perro tiene " + (edadH * 7) + " años en años perro");
}

// Escribe una función llamada getCandySupply que reciba dos números (edad, cantidad por día) 
//y calcule cuantos dulces consumirías por el resto de tu vida.
// El resto de tu vida es definido por una edad constante (por ejemplo, 75 años)

function getCandySupply (edad, cantD) {
    edad = Number(window.prompt('Cuántos años tienes?'))
    cantD = Number(window.prompt('Cuántos dulces consumes al día?'))
    let edadMax =  75 - edad
    let dulcAn = cantD * 365

    alert("Por el resto de tu vida, consumirás " + (edadMax * dulcAn) + " dulces!")
}

// Crea una función que permita encadenar llamadas
  // a().a().a() ... etc



// Crea una función que recibe un tipo (formal/casual) y dos funciones, 
//una para un saludo casual (hola!) y otra para un saludo formal (buenos dias)
// La función debe regresar el tipo de saludo que va a usarse

function fcasual() {
    alert ("Hola! :3")
}
function fformal() {
    alert ("Buenos días!")
}

var tipo = (window.prompt('Qué tipo de saludo deseas?'))

function saludo(tipo, fformal , fcasual) {
if (tipo === 'formal') {
         fformal()
    } else {
        fcasual()
    }
} 
saludo(tipo, fformal, fcasual);

// Conviertan cualquier ciclo for que use un arreglo de la parte 1 para que use forEach o map

// Explica cual es la salida de las siguientes funciones y porqué:

var a = 12;
(function() {
  alert(a);
})();
 
//La respuesta es 12. Establece el valor de a en un inicio, luego, en la función se establece que 
//el numero guardado en la variable se mostrará en una alerta. Posteriormente, se ejecuta a la función



var a = 5;
(function() {
  var a = 12;
  alert(a);
})();


//La respuesta es 12 porque considera el valor dentro del scope de la función


var a = 10;
var x = (function() {
  var a = 12;
  return (function() {
    alert(a);
  });
})();
x();


//La respuesta es 12 porque considera el valor dentro del scope de la función


var a = 10;
var x = (function() {
        var y = function() {
                    var a = 12;
                };
        return function() {
                    alert(a);
                }
        })();
x();


//La respuesta es 10. La segunda a, está dentro del scope de la funcion dentro de var y. 


var a = 10;
var x = (function() {
            (function() {
                    a = 12;
            })();
  return (function() {
            alert(a);
        });
    })();
x();


//La respuesta es 12. El valor de la segunda a, al estar dentro de otra funcion (no variable?) queda
//dentro del scope de la funcion dentro de var y.


var a = 10;
(function() {
  var a = 15;
  window.x = function() {
    alert(a);
  }
})();
x();

//El resultado es 15


function leFunction() {
  console.log(a); // ---> en este punto, esta variable no está definida
  console.log(foo()); // ---> manda llamar la función

  var a = 1;
  function foo() { // ---> entra aqui e imprime dos
     return 2;
  }
}
leFunction();


// ---> La respuesta es 2

/*
var a = 1;
function someFunction(number) {
        function otherFunction(input) {
                 return a;
        }
  a = 5;
  return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);
*/



var fullname = 'A Name';
var obj = {
  fullname: 'Full Name',
  prop: {
    fullname: 'Le Name',
    getFullname: function() {
      return this.fullname;
    }
  }
};
console.log(obj.prop.getFullname());// ---> Imprimiría 'Le Name' ?
var aCall = obj.prop.getFullname;
console.log(obj.fullname); // ---> regresaría 'Full Name'?
console.log(aCall()); // ---> qué es esto? No sacaría aCall is not a function? ---> Saca A Name, por la variable global.


/////////////
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);// ---> Imprime 1? O marcaría error o undefined al llegar a la linea 180



/*
  Crea una clase persona que recibe un nombre, apellido y edad
  Agrega métodos para cambiar y obtener cada una de las propiedades
  Agrega un método (describe) que regrese una cadena como esta:
  {Nombre} {Apellido}, {edad} años.
*/

// class persona {
//     constructor (nombre, apellido, edad) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = edad;
// } }

// let uru = new persona ("Raúl", "Jiménez", "23");
// uru.nombre = "Federico"
// console.log(uru.nombre + " " + uru.apellido, + " " + uru.edad + " años.")


/*
  Crea una clase Product que recibe un nombre y un valor
  tiene un método (value) que regresa su valor con iva (x1.16)

  Crea otra clase Cart que recibe un arreglo de Product
  tiene un método (add) que recibe un Product y lo agrega a su lista
  tiene un método (total) que regresa el total de todos los Product(con iva)

  Crea otra clase Food que hereda de product
  su método value regresa el valor sin iva
  Esta clase debería poder usarse en Cart
*/
/*

  Crea una clase Product que recibe un nombre y un valor
  tiene un método (value) que regresa su valor con iva (x1.16)

 */

class Product {
    constructor (nomb, val) {
    this.nomb = nomb;
    this.val = val;
    }
    //Getter

    get iva () {
        return this.calcIVA();
    }
   //MEtodo 
    calcIVA () {
        return this.val * 1.16;
    }
 }


 let arrProduct = new Product ("Licuadora", 220);
 console.log (arrProduct.nomb, arrProduct.iva);

 /* Crea otra clase Cart que recibe un arreglo de Product
  tiene un método (add) que recibe un Product y lo agrega a su lista
  tiene un método (total) que regresa el total de todos los Product(con iva)
*/

 class Cart extends Product {
     constructor () {
         super();
     }
 }
let arrProductotro = new Cart


 class AnotherClass extends SomeClass {
    constructor(value) {
      super(value); // Esto llama al constructor de SomeClass (el padre)
    }
  }
  let x = new AnotherClass(1);
  x.add(2)
  x.getValue() // 3