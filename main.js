const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");
const olItens = document.querySelector("#itens");

adiconaElementoNaLista("Primeiro");
adiconaElementoNaLista("Segundo");
adiconaElementoNaLista("Terceiro");

function adiconaElementoNaLista(){
    const li = document.createElement("li");
    li.textContent = texto;
    olItens.appendChild(li);
}