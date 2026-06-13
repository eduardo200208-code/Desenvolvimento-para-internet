let inputValor = document.querySelector("#Valor");

let btcondicaodepagamento = document.querySelector("#btcondiçãodepagamento");

let selectOpcoesdepagamento = document.querySelector("#opcoesdepagamento");

let h3resultado = document.querySelector("#h3resuldado");

function calcularvalordoproduto(){

    let Valor = Number(inputValor.value);

    let Opcaodepagamento = selectOpcoesdepagamento.value;

    let calculo1 = Valor - (10 / 100 * Valor).toFixed(2);
    let calculo2 = Valor - (15 / 100 * Valor).toFixed(2);

    //Calculo de quanto vai ficar eu duas vezes
    let calculo3 = Valor.toFixed(2);
    let duasvezes1 = (Valor / 2).toFixed(2);

    let calculo4 = (Valor * (10 / 100) + Valor).toFixed(2);
    let duasvezes2 = (calculo4 / 2).toFixed(2);

    if( Opcaodepagamento == "A" ){
        h3resultado.innerHTML = "O valor do produto ficara R$ " + calculo1;
    }

    else if( Opcaodepagamento == "B" ){
        h3resultado.innerHTML = "O valor do produto ficara R$ " + calculo2;
    }

    else if( Opcaodepagamento == "C" ){
        h3resultado.innerHTML = "O valor do produto ficara R$ " + calculo3 + ", Em duas vezes de R$ " + duasvezes1;
    }

    else if( Opcaodepagamento == "D" ){
        h3resultado.innerHTML = "O valor do produto ficara R$ " + calculo4 + ", Em duas vezes de R$ " + duasvezes2;
    }
    
}

btcondicaodepagamento.onclick = function(){
    calcularvalordoproduto();
}