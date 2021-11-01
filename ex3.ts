//verifica se a lista é numérica e retorna um array vazio caso não seja,
//ou um array com o maior valor, menor valor e valor médio caso seja
function retornaValoresImperativo(lista: Array<any>) : Array<number> {
    //percorre a lista mostrando mensagem de erro caso algum item não seja numérico
    for(let j=0; j<lista.length; j++) {
        if(!(typeof lista[j] === 'number')) {
            console.log('Um ou mais itens da lista não são do tipo number');
            return [];
        }
    };
    
    let novaLista: Array<number>;
    let maior: number = Number.MIN_VALUE;
    let menor: number = Number.MAX_VALUE;
    let soma: number = 0;

    //percorre a lista comparando cada item com o maior, menor, e acumulando a soma dos valores
    for(let i=0; i<lista.length; i++) {
        if(lista[i] > maior)
            maior = lista[i];
        if(lista[i] < menor)
            menor = lista[i];
        soma += lista[i];
    }
    novaLista = [maior, menor, (soma/lista.length)];

    return novaLista;
}

//verifica se a lista é numérica, mostrando mensagem de erro e retornando 'false' caso não seja
function verificaFuncional(lista: Array<number>) : boolean {
    return lista.some(function(item){
        return !(typeof item === "number")
    }) ? (console.log('Um ou mais itens da lista não são do tipo number') != null) : true
}

//retorna um array com o maior valor, menor valor e valor médio caso a lista seja numérica,
//ou um array vazio caso contrário
function retornaValoresFuncional(lista: Array<any>) : Array<number> {
    return verificaFuncional(lista) ? [
        lista.reduce(function(acumulador, item) {
            return Math.max(acumulador, item)
        }),
        lista.reduce(function(acumulador, item) {
            return Math.min(acumulador, item)
        }),
        (lista.reduce(function(acumulador, item) {
            return acumulador + item;
        })/lista.length)
    ] : [];
}

let lista: Array<any> = [3, 7, 1, 9, 5, -1];

console.log(retornaValoresImperativo(lista));
console.log(retornaValoresFuncional(lista));