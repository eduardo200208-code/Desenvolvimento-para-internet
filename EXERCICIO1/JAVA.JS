let inputX = document.querySelector("#X");
let inputY = document.querySelector("#Y");
let inputZ = document.querySelector("#Z");

let btLados = document.querySelector("#btLados");

let h3qualtriangulos = document.querySelector("#h3qualtriangulo");

function qualotriangulo(){

    let X = Number(inputX.value);
    let Y = Number(inputY.value);
    let Z = Number(inputZ.value);
    
    // Verificar se pode ser um triangulo
    if( X + Y < Z || X + Z < Y || Y + Z < X ){
        h3qualtriangulos.innerHTML = "O comprimento de cada lado em um tri&acirc;ngulo &eacute; menor que a soma dos outros dois lados";     
    }
    // Verificar se pode ser um triangulo equilatero
    else if( X == Y && Y == Z ){
        h3qualtriangulos.innerHTML = "Equil&aacute;tero: tem os comprimentos dos tr&ecirc;s lados iguais!";
    }
    // Verificar se pode ser um triangulo Escaleno
    else if( X != Y && Y != Z && Z != X ){
        h3qualtriangulos.innerHTML = "Esc&aacute;leno: tem os comprimentos de tr&ecirc;s lados diferentes."
    }
    // Verificar se pode ser um triangulo isoseles
    else if( X == Y != Z || X == Z != Y || Y == Z != X ){
        h3qualtriangulos.innerHTML = "Is&oacute;sceles: tem os comprimentos de dois lados iguais!"
    }
    
}

btLados.onclick = function(){
    qualotriangulo();
}