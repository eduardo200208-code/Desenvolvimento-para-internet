let inputPeso = document.querySelector("#Peso");
let inputAltura = document.querySelector("#Altura");

let h3ValordoIMC = document.querySelector("#ValordoIMC");
let h3ClassificacaodoIMC = document.querySelector("#ClassificacaodoIMC");

let btIMC = document.querySelector("#btIMC");

function calcularIMC(){

    let Peso = Number(inputPeso.value);
    let Altura = Number(inputAltura.value);

    let resultadoIMC = Peso / (Altura * Altura);
    h3ValordoIMC.textContent = resultadoIMC.toFixed(1);

    if( resultadoIMC < 18.5 )
        h3ClassificacaodoIMC.innerHTML = "Abaixo de 18.5 &rarr; Abaixo do peso"

    else if( resultadoIMC >= 18.5 && resultadoIMC <= 24.9 ){
        h3ClassificacaodoIMC.innerHTML = "18.5 a 24.9 &rarr; Peso normal"
    }
    
    else if( resultadoIMC >= 25 && resultadoIMC <= 29.9 ){
        h3ClassificacaodoIMC.innerHTML = "25 a 29.9 &rarr; Sobrepeso"
    }

    else if( resultadoIMC >= 30 && resultadoIMC <= 34.9 ){
        h3ClassificacaodoIMC.innerHTML = "30 a 34.9 &rarr; Obesidade grau 1"
    }

    else if( resultadoIMC >= 35 && resultadoIMC <= 39.9 ){
        h3ClassificacaodoIMC.innerHTML = "35 a 39.9 &rarr; Obesidade grau 2"
    }
    
    else{
        h3ClassificacaodoIMC.innerHTML = "40+ &rarr; Obesidade grau 3"
    }

}
    

btIMC.onclick = function(){
    calcularIMC();
}