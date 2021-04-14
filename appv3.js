//trabajo con async-await en multiplicar3
const {crearArchivo} = require('./helpers/multiplicar3.js')

console.clear();

const base = 7;

crearArchivo(base) //con esto ya era suf, lo de abajo me confirma si todo resulto bn o hubo un problema
    .then( nombreArchivo => console.log(nombreArchivo,'creado bn') )
    .catch(err => console.log(err))

