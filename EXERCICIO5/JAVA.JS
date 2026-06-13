let inputSaldomedio = document.querySelector("#Saldomedio");

let btcredito = document.querySelector("#btcredito");

let h3Saldomedio = document.querySelector("#h3Saldomedio");
let h3Credito = document.querySelector("#h3credito");

function calcularcredito(){

    let Salariomedio = Number(inputSaldomedio.value);

    let credito20 = Salariomedio * (20 / 100);
    let credito30 = Salariomedio * (30 / 100);
    let credito40 = Salariomedio * (40 / 100);

    if( Salariomedio >= 0 && Salariomedio <= 200 ){
        h3Saldomedio.innerHTML = "Saldo m&eacute;dio R$ " + Salariomedio;
        h3Credito.innerHTML = "Nenhum cr&aacute;dito ";
    }
    
    else if( Salariomedio >= 201 && Salariomedio <= 400 ){
        h3Saldomedio.innerHTML = "Saldo m&eacute;dio R$ " + Salariomedio;
        h3Credito.innerHTML = "cr&eacute;dito R$ " + credito20;
    }

    else if( Salariomedio >= 401 && Salariomedio <= 601 ){
        h3Saldomedio.innerHTML = "Saldo m&eacute;dio R$ " + h3Saldomedio;
        h3Credito.innerHTML = "cr&eacute;dito R$ " + credito30;
    }

    else{
        h3Saldomedio.innerHTML = "Saldo m&eacute;dio R$ " + Salariomedio;
        h3Credito.innerHTML = "cr&eacute;dito R$ " + credito40;
    }

}

btcredito.onclick = function(){
    calcularcredito();
}