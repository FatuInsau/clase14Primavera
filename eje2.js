// puedeVerPelicula(edad, tieneAutorizacion)
// Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

                    //    number  booleano (true,false)
function puedeVerPelicula (edad,tieneAutorizacion) {
// si tiene 15 o más entonces puede entrar
    if (edad>=15) {
        return true;
// sino, si tiene autorizacion puede entrar
    } else if (tieneAutorizacion) {
        return true;
// sino cumple nada, no puede entrar
    } else {
        return false;
    }
};


console.log( puedeVerPelicula(12, false) ) // false
// console.log(puedeVerPelicula(12, true))  // true
// console.log(puedeVerPelicula(16, false)) // true
// console.log(puedeVerPelicula(18, true))  // true