const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: "Es base de la tabla de multiplicar"
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    //demandOption: true ,
                    default: false,
                    describe: 'Muestra la tabla en la consola'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    //demandOption: true ,
                    default: 10,
                    describe: 'Numero hasta el cual multiplicar'
                })
                .check ( (argv,options) => {
                    if( isNaN(argv.b) ){
                        throw 'La base tiene que ser un número'
                    }
                    return true //sino hay ningun error
                })
                .argv;

module.exports = argv;