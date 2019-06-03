['Bibidi', 'babidi', 'bum'].forEach(mostrar => console.log(mostrar)) // Esto es un callback

/////
// myVar1.map((actualNum) => setTimeout(1000, actualNum));


let uno = () =>
console.log (1)
setTimeout(uno, 3000);

let dos = () =>
console.log (2)
setTimeout(dos, 1000);

let tres = () =>
console.log (3)
setTimeout(tres, 2000);


myArr = [1, 4, 6, 8]

function tiempito ([]) {
    myArr.forEach(element => (element)) 
        setTimeout([0], 3000)
        setTimeout([1], 1000)
        setTimeout([2], 4000)
}



var myVar1 = [1]
var myVar2 = [4]
var myVar3 = [6]


function mainFunction(foo1, foo2, foo3) {
   
    myVar1.forEach(v => (v))
    setTimeout(foo1,3000);

    myVar2.forEach(v => (v))
    setTimeout(foo2,1000);

    myVar3.forEach(v => (v))
    setTimeout(foo3,4000);
}
   

function foo1() {
        console.log(myVar1);
    }
    function foo2() {
        console.log(myVar2);
    }
    function foo3 () {
        console.log(myVar3);
    }
    
mainFunction(foo1, foo2, foo3);

//// escribe un callback que reciba un argumento y lo imprime

let dulces = ['Pulparindo', 'Hersheys', 'Tutsi-pop', 'Larin']

dulces.forEach(function(dulce) {
    console.log('Quiero ' + dulce)
});


// crea una función que recibe el callback anterior y lo ejecute

let dulcess = ['Pulparindo', 'Hersheys', 'Tutsi-pop', 'Larin']

let quieroDulc= function(comer) {
    console.log('Quiero ' + comer)
}
dulcess.forEach(quieroDulc);

//crea una función que llama a un callback y usa el valor que regresa para llamar a otro. Despues debe llamar
//a un tercer callback con el valor que regresa el segundo

function callbackHell(palabra){
    return function(palabra2) {
        return function(palabra3) {
            return palabra + palabra2 + palabra3;
        }
    }
}
callbackHell('super')('cali')('fragi')
