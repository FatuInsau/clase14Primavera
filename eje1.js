// gritar(str)
// Crear una función gritar que tome como argumento un string y devuelva el mismo string con un signo de exclamación al principio y al final del mismo

function gritar (texto) {
    return "¡"+texto+"!";
};


// obtenerNombreCompleto(nombre, apellido)
// Crear una función obtenerNombreCompleto que tome como argumento un nombre y un apellido y devuelva un string con la unión de ambos valores

function obtenerNombreCompleto (nombre,apellido) {
    return nombre+ " " +apellido;
}

// saludar(nombre)
// Crear una función saludar que tome como argumentos un nombre y devuelva un saludo que lo incluya.

function saludar (nombre) {
    return `Hola ${nombre}, un gusto en conocerte`
};




// saludarGritando(nombre, apellido)
// Usando las funciones anteriores (obtenerNombreCompleto, saludar y gritar), crear una función saludarGritando que tome como argumentos un nombre y un apellido y devuelva un saludo con signos de exclamación.

function saludarGritando (nombre, apellido) {

    // obtenerNombreCompleto --> (nombre,apellido) --> el nombre todo junto
    var nombreCompleto = obtenerNombreCompleto(nombre,apellido);

    // saludar  --> (nombre)  --> un saludo con ese nombre
    var saludoConNombre = saludar(nombreCompleto);

    // gritar  --> (texto)  --> el texto gritado
    var resultado = gritar(saludoConNombre);

    return resultado;
};



console.log(saludarGritando('Ada', 'Lovelace')) // ¡Hola Ada Lovelace, un gusto conocerte!
console.log(saludarGritando("Fatu","Insau"))

// function saludarGritando2 (nombre,apellido){
//     return gritar(saludar(obtenerNombreCompleto(nombre,apellido)))
// }
