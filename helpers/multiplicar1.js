//File systemm
const fs = require('fs');

const crearArchivo = (base = 5) => {
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
    
    fs.writeFileSync(`tabla-${base}.txt`,salida);
    console.log(`tabla-${base}.txt creado`);
}

module.exports = {
    //funcion: crearArchivo
    //crerArchivo: crerArchivo   //esto es redundante dejamos:
    crearArchivo
}