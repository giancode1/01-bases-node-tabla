//LE HAGO UNA PROMESA
const fs = require('fs');

const crearArchivo = (base = 5) => {
    return new Promise ( (resolve, reject) => {
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
    
    (nombreArchivo)
        ? resolve (nombreArchivo)
        : reject ('Ocurrio un error');

    });
    
}

module.exports = {
    //funcion: crearArchivo
    //crerArchivo: crerArchivo   //esto es redundante dejamos:
    crearArchivo
}