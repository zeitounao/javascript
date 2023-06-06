function imprimirDado(dado){
    console.log('tarefa 1');
    console.log(dado());
    console.log('tarefa 2');
}

imprimirDado(() => 'ola mundo')

imprimirDado(function () {
    return 'ola mundo'
})