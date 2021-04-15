//Configuraciones de yargs

//ejemplo de entrada:  node app4-conf-yargs -b 5 
//ejemplo de entrada:  node app4-conf-yargs -b 5 --listar
//ejemplo de entrada:  node app4-conf-yargs -b 5 -l

const {crearArchivo} = require('./helpers/multiplicar4.js')
const argv = require('./yargs/yargs');
const colors = require('colors'); //colores

console.clear();

crearArchivo(argv.b,argv.l,argv.h) 
    .then( nombreArchivo => console.log(nombreArchivo.rainbow,'creado bn'))
    .catch(err => console.log(err))