function saludo (nombre) {
    return "Buenas "+nombre;
};


var saludo2 = (nombre) => "Buenas " + nombre


// (parametro) => {codigo}


function cumpleaños (edad) {
    return edad + 1
};

var cumple = (edad) => "Feliz cumple "+edad

console.log(cumple(40))