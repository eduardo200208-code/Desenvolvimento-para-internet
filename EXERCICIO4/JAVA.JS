let inputSalario = document.querySelector("#Salario");
let selectcargo = document.querySelector("#selectcargo");

let btsalarioecargos = document.querySelector("#btsalarioecargo");

let h3Salarioantigo = document.querySelector("#Salarioantigo");
let h3Salarionovo = document.querySelector("#Salarionovo");
let h3Diferencaentreossalarios = document.querySelector("#Diferencaentreossalarios");


function calcularsalario(){

    let Salario = Number(inputSalario.value);
    let Cargo = selectcargo.value;

    let Gerente = Salario * (10 / 100);
    let Engenheiro = Salario * (20 / 100);
    let Tecnico = Salario * (30 / 100);
    let Outrocargo = Salario * (40 / 100);

    let salarionovoGerente = (Salario + Gerente);
    let salarionovoEngenheiro = (Salario + Engenheiro);
    let salarionovoTecnico = (Salario + Tecnico);
    let salarionovoOutrocargo = (Salario + Outrocargo);

    let diferencaGerente = (salarionovoGerente - Salario);
    let diferencaEngenheiro = (salarionovoEngenheiro - Salario);
    let diferencaTecnico = (salarionovoTecnico - Salario);
    let diferencaOutrocargo = (salarionovoOutrocargo - Salario);

    if( Cargo == "A" ){
        
        h3Salarioantigo.innerHTML = "Salario antigo R$ " + Salario;
        h3Salarionovo.innerHTML = "Salario novo R$ " + salarionovoGerente;
        h3Diferencaentreossalarios.innerHTML = "Diferen&ccedil;a de sal&aacute;rio R$ " + diferencaGerente;
    }

    else if( Cargo == "B" ){
        h3Salarioantigo.innerHTML = "Salario antigo R$ " + Salario;
        h3Salarionovo.innerHTML = "Salario novo R$ " + salarionovoEngenheiro;
        h3Diferencaentreossalarios.innerHTML = "Diferen&ccedil;a de sal&aacute;rio R$ " + diferencaEngenheiro;
    }

    else if( Cargo == "C" ){
        h3Salarioantigo.innerHTML = "Salario antigo R$ " + Salario;
        h3Salarionovo.innerHTML = "Salario novo R$ " + salarionovoTecnico;
        h3Diferencaentreossalarios.innerHTML = "Diferen&ccedil;a de sal&aacute;rio R$ " + diferencaTecnico;
    }

    else if( Cargo == "D" ){
        h3Salarioantigo.innerHTML = "Salario antigo R$ " + Salario;
        h3Salarionovo.innerHTML = "Salario novo R$ " + salarionovoOutrocargo;
        h3Diferencaentreossalarios.innerHTML = "Diferen&ccedil;a de sal&aacute;rio R$ " + diferencaOutrocargo;
    }

}

btsalarioecargos.onclick = function(){
    calcularsalario();
}