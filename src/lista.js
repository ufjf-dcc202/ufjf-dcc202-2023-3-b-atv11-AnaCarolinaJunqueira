const lista = [
    "Um",
    "Dois", 
    "Três"
];

function getLista(){
    return lista;

}

function adicionaNaLista(item){
    lista.push(item);
}

function removeDaLista(posição){
    lista.splice(posição, 1);
}

function limpaLista(){
    lista.splice(0);
}
export {getLista, adicionaNaLista, removeDaLista, limpaLista};