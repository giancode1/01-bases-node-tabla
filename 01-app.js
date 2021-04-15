//File system
const fs = require('fs');

console.clear();

const base = 5;
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

fs.writeFile(`tabla-${base}.txt`,salida,(err)=>{
    if (err) throw err;
    console.log(`tabla-${base}.txt creado`);
})





