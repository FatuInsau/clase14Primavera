// esVocal(letra)
// Crear una función esVocal que tome como argumento un string letra y devuelva true si letra es una vocal o false si no lo es.


function esVocal(letra) {
    var minuscula = letra.toLowerCase()
    switch (minuscula) {
        case "a":
            // return true;
        case 'e':
            // return true;
        case 'i':
            // return true;
        case 'o': 
            // return true;
        case 'u':
            return true;
        default:
            return false;
    };
};

console.log(esVocal('a') )// true
console.log(esVocal('A')) // false
// console.log(esVocal("b"))

// console.log("BUENAS TARDES".toLowerCase())

// || --> o --> or
// && --> y --> and

function esVocal2 (letra) {
    letra = letra.toLowerCase()
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        return true;
    } else {
        return false;
    }
}