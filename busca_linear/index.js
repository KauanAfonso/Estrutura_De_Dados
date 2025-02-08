const busca_linear =  (elemento, lista) =>{

    for (let i = 0; i < lista.length; i++) {
        element = lista[i]
        if(element == elemento){
            return "Elemento encontrado";
        }
    }
    return "Elemento não encontrado";
}


console.log(busca_linear(2, [2,10,6,3,8,1,2,10]))