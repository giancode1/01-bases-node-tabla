//Trabajo con asyn-await
const fs = require('fs');

const crearArchivo = async(base = 5) => {
    try {
        let salida = '';
        let titulo = `=========================
        Tabla del ${base}
=========================
`;

    for(let i = 1 ; i<=10 ;i++){
        salida += (`${base} x ${i} = ${base*i}\n`)
    }
    salida= titulo + salida ;
    console.log(salida);
    nombreArchivo = `tabla-${base}.txt`;
    fs.writeFileSync(nombreArchivo,salida);
    
    return nombreArchivo;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    //funcion: crearArchivo
    //crerArchivo: crerArchivo   //esto es redundante dejamos:
    crearArchivo
}