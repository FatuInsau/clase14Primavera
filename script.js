// condicional

// si la condicion es verdadera, entonces...
// if (condicion) {
//     // codigo que se ejecuta cuando la condicion es verdadera
//     // sino, entonces hace lo siguiente
// } else {
//     // codigo que se ejecuta cuando la condicion es falsa
// }


var numero = 10;

// si numero es mayor que 8, entonces hace un console.log
if (numero>8) {
    console.log("Numero es más grande que 8")
// sino, si numero es igual que 8, entonces
} else if (numero === 8) {
    console.log("numero es 8")
// sino, (no se cumple ninguna de las condiciones)
} else {
    console.log("Numero es menor que 8")
}

// (condicion)? parte verdadera : parte false

// numero>=8? console.log("Numero es más grande que 8 o igual"): console.log("Numero es menor que 8")



var adulto = edad>=18?"Es mayor de edad":"Es menor de edad"

var adulto2;

if (edad>=18) {
    adulto2 = "Es mayor de edad";
} else {
    adulto2 = "Es menor de edad"
}


// var adulto = edad>=18?"Es mayor de edad":edad>=16? "Puede votar":"Es menor de edad"


