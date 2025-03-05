const busca_linear =  (numero, lista) =>{

    for (let i = 0; i < lista.length; i++) {
        elemento = lista[i]
        if(elemento == numero){
            return "Elemento encontrado";
        }
    }
    return "Elemento não encontrado";
}


console.log(busca_linear(2, [2,10,6,3,8,1,2,10]))