let inputAno = document.querySelector("#Ano");
let inputTabela = document.querySelector("#Valordatabela");

let btimposto = document.querySelector("#btimposto");

let h3impostoaserpago = document.querySelector("#impostoaserpago");
let h3valordoimpostosobreatabela = document.querySelector("#valordoimpostosobreatabela");

function calcularimpostos(){

    let Ano = Number(inputAno.value);
    let Tabela = Number(inputTabela.value);

    let imposto1 = Tabela * (1 / 100);
    let imposto2 = Tabela * (1.5 / 100);

    let valortotal1 = Tabela + imposto1;
    let valortotal2 = Tabela + imposto2;

    if( Ano < 1990 ){
        h3valordoimpostosobreatabela.innerHTML = " Valor total a ser pago &eacute; " + "R$ " + valortotal1 + " com um aumento de " + "R$ " + imposto1;
        h3impostoaserpago.innerHTML = "Imposto a ser pago &eacute; de 1%" 
    }

    else if( Ano >= 1990 ){
        h3valordoimpostosobreatabela.innerHTML = " Valor total a ser pago &eacute; " + "R$ " + valortotal2 + " com um aumento de " + "R$ " + imposto2;
        h3impostoaserpago.innerHTML = "Imposto a ser pago &eacute; de 1.5%"
    }

}

btimposto.onclick = function(){
    calcularimpostos();
}