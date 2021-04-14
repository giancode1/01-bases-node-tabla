//AQUI USAS YARGS
const {crearArchivo} = require('./helpers/multiplicar3.js')

const argv = require('yargs').argv


console.clear();



//console.log(process.argv);  //me da en una lista, la direccion del archvio, y el argumento
console.log(argv);

console.log('base: yargs', argv.base);
//entradas ejemplo:
// node app3 --base=9
// node app3 --base 9 --listar
// node app3 --help


/* crearArchivo(base) 
    .then( nombreArchivo => console.log(nombreArchivo,'creado bn') )
    .catch(err => console.log(err)) */

