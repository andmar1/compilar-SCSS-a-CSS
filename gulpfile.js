const { src,dest} = require('gulp');

const sass = require('gulp-sass')(require('sass'));

// sass.compiler = require('node-sass')          //Realiza la inyeccion para cambiar el texto, era la forma anterior para compilar SASS con CSS, pero dart tiene mas performance

sass.compiler = require('dart-sass')

sass.compiler = require('dart-sass')

function compilarSASS(){
    return src("./src/scss/app.scss")      //buscar ubicacion del src
        .pipe( sass() )                     //aplicar SASS
        .pipe( dest("./build/css") );       //crear carpeta build con el archivo css

}
 
exports.compilarSASS = compilarSASS 





