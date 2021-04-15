//trabajo con async-await en multiplicar3
//uno mismo seleccionando los argumentos de entrada, esto antes de usar YARGS
//mejor usa yargs!
const {crearArchivo} = require('./helpers/multiplicar3.js')

console.clear();

//console.log(process.argv);
//todo esto por fines educativos, no es la mejor forma, usa yargs!
const [ , , arg3 ='base=5'] = process.argv ;
const [ , base ] = arg3.split('=');

console.log(base);


crearArchivo(base) 
    .then( nombreArchivo => console.log(nombreArchivo,'creado bn') )
    .catch(err => console.log(err))

//poner: node app2 --base=10