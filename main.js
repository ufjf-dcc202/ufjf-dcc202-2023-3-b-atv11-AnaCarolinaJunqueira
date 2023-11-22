import { adicionaNaLista, getLista } from "./src/lista.js";

const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");
const olItens = document.querySelector("#itens");

atualizarListaOrdenada();

btnAdicionar.addEventListener('click', adcionaItemDaEntrada);

function adcionaItemDaEntrada(){
    const valor = pEntrada.textContent;
    adicionaNaLista(valor);
    pEntrada.textContent = "";
    atualizarListaOrdenada();
}

function atualizarListaOrdenada(){
    const lista = getLista();
    olItens.innerHTML = "";
    for(let i = 0; i < lista.length; i++){
        adicionaElementoNaListaOrdenada(lista[i]);
    }
}

function adicionaElementoNaListaOrdenada(texto){
    const li = document.createElement("li");
    li.textContent = texto;
    olItens.appendChild(li);

}