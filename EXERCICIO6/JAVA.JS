let inputCodigo = document.querySelector("#Codigo");
let inputQuantidade = document.querySelector("#Quantidade");

let btvaloraserpago = document.querySelector("#btvaloraserpago");

let h3Valoraserpago = document.querySelector("#Valoraserpago");

function calcularvalordopedido(){

    let Codigo = Number(inputCodigo.value);
    let Quantidade = Number(inputQuantidade.value);

    let pedido001 = Codigo;
    let pedido002 = Codigo;
    let pedido003 = Codigo;
    let pedido004 = Codigo;
    let pedido005 = Codigo;
    let pedido006 = Codigo;

    let calcular001 = Quantidade * 11;
    let calcular002 = Quantidade * 8.50;
    let calcular003 = Quantidade * 8;
    let calcular004 = Quantidade * 9;
    let calcular005 = Quantidade * 10;
    let calcular006 = Quantidade * 4.50;

    if( Codigo == "001" ){
        h3Valoraserpago.innerHTML = "Valor do pedido R$ " + calcular001;
    }

    else if( Codigo == "002" ){
        h3Valoraserpago.innerHTML = "Valor do pedido R$ " + calcular002;
    }

    else if( Codigo == "003" ){
        h3Valoraserpago.innerHTML = "Valor do pedido R$ " + calcular003;
    }

    else if( Codigo == "004" ){
        h3Valoraserpago.innerHTML = "Valor do pedido R$ " + calcular004;
    }

    else if( Codigo == "005" ){
        h3Valoraserpago.innerHTML = "Valor do pedido R$ " + calcular005;
    }

    else if( Codigo == "006" ){
        h3Valoraserpago.innerHTML = "Valor do pedido R$ " + calcular006;
    }

}

btvaloraserpago.onclick = function(){
    calcularvalordopedido();
}