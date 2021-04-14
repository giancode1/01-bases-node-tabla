//usado en app4-conf-yargs
const fs = require('fs');
const colors = require('colors'); 

const crearArchivo = async(base = 5, listar = false, hasta= 10) => {
    try {
        let salida = '' ;
        let salidaMostrar = '';
        let titulo =`=========================
        Tabla del ${base}
=========================
`;
        let tituloMostrar = `${colors.blue('=========================')}
        Tabla del ${colors.red(base)}
${colors.blue('=========================')}
`;

    for(let i = 1 ; i<=hasta ;i++){
        salida += (`${base} x ${i} = ${base*i}\n`)
        salidaMostrar += (`${base} ${'x'.blue} ${i} ${'='.blue} ${base*i}\n`)
    }
    salida = titulo + salida ;
    salidaMostrar = tituloMostrar + salidaMostrar ;

    if(listar){
        console.log(salidaMostrar);
    }

    nombreArchivo = `tabla-${base}.txt`;
    fs.writeFileSync(`./salida/${nombreArchivo}`,salida);
    
    return nombreArchivo;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}