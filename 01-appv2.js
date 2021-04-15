//trabajo con promesas en multiplicar 2
const {crearArchivo} = require('./helpers/multiplicar2.js')

console.clear();

const base = 9;

crearArchivo(base) //con esto ya era suf, lo de abajo me confirma si todo resulto bn o hubo un problema
    .then( nombreArchivo => console.log(nombreArchivo,'creado bn') )
    .catch(err => console.log(err))