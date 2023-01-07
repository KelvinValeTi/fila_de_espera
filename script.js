//botoes
const novoPaciente = document.getElementById("novo-paciente");
const sair = document.getElementById("btn-sair");
const confirma = document.getElementById("btn-confirma");
const chamaProxPaciente = document.getElementById("prox-paciente");

//input
const nomePaciente = document.getElementById("nome-paciente");
const divInputPaciente = document.getElementById("div-input-paciente");

//mensagem de erro
const erroNome = document.getElementById("erro-nome");

let pacientes = ["Caio Castro","Lazaro Ramos","Bruna Marquezine"];

/**
 * FUNÇÕES
 */

//alterna a visibilade do botão novo-paciente para o input inserir nome
function toggleNovoPaciente(){
    novoPaciente.classList.toggle("hide");
    divInputPaciente.classList.toggle("hide");
}

function validarNome(){
        
    let nomeValor = nomePaciente.value;
    let padrao = /[^a-zà-ú\s]/gi;
    let valida_nome = nomeValor.match(padrao);

    //validar nome e sobrenome
    if( valida_nome || !nomeValor ){
        erroNome.classList.remove("hide");
    }else{
        erroNome.classList.add("hide");
    }

    //verifica se há mensagens de erro, se não houver, salva o nome completo.
    if(erroNome.classList.contains("hide")){
        //adiciona nome do paciente no fim vetor
        pacientes.push(nomeValor);
        exibePacientes();

    }else{
       //tirar depois
        console.log("tem erro");
    }
}

function limpaPaciente(){
    const divListaPacientes = document.getElementById("pacientes");
    divListaPacientes.innerHTML="";
}

function exibePacientes(){
    limpaPaciente();

    const divListaPacientes = document.getElementById("pacientes");

    for(let i=0; i<pacientes.length;i++){

        const paragraph = document.createElement("p");        
        paragraph.textContent = i+1+"- "+pacientes[i];
        divListaPacientes.appendChild(paragraph);
    }
}

function chamarPaciente(){
    pacientes.shift();
    exibePacientes();
}

/**
 * EVENTOS
 */

window.onload = exibePacientes();

novoPaciente.addEventListener("click", ()=>{
    toggleNovoPaciente();
});

sair.addEventListener("click",()=>{
    toggleNovoPaciente();
    erroNome.classList.add("hide");
});

confirma.addEventListener("click",()=>{
    validarNome();
});

chamaProxPaciente.addEventListener("click",()=>{
    chamarPaciente();
});