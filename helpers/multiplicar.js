const fs = require ('fs');   
var colors = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
    
    try{
   
    let salida = '';
    let consola = '';

    for ( let i = 1; i <=hasta; i++) {
          salida += `${base} x ${i} = ${base * i }\n ` ;          
          consola += `${base} ${'x'.blue } ${i} ${'='.blue } ${base * i }\n ` ;

    }

    if ( listar ) {      
        console.log( '================'.green);
        console.log(` TABLA DEL`.green, colors.blue( base ) );
        console.log( '================'.green);
        
        console.log(consola);
   }

    fs.writeFileSync(`./salida/tabla del ${base}.txt`,salida);
    
    return `tabla del ${ base }.text`;

}catch(err) {
    throw err 
}

}
module.exports = {
    crearArchivo
}











































































