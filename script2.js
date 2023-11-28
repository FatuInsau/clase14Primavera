var nombre = "Maria";

if (nombre ==="Belen"){
    console.log("Hola Belen");
} else if (nombre === "Fati") {
    console.log("Hola Fati")
} else if (nombre=== "Dante") {
    console.log("Hola Dante")
} else if (nombre === "Seba") {
    console.log("Hola Seba")
} else if (nombre === "Maria") {
} else {
    console.log("No te conozco")
}

// segun
switch (nombre) {
    case "Belen": 
        console.log("Hola Belen");
        break;
    case "Fati":
        console.log("Hola Fati");
        break;
    case "Seba": 
        console.log("Hola Seba");
        break;
    default:
        console.log("No te conozco");
}



