const insertion_sort = (lista)=>{

    for (let i = 1; i < lista.length; i++) {
        const elmento_atual = lista[i];
        let elmento_anterior = i - 1

  
        while(lista[elmento_anterior] > elmento_atual && elmento_anterior>=0){
                
            lista[elmento_anterior + 1] =lista[elmento_anterior]
            elmento_anterior--
        }
        
        lista[elmento_anterior + 1] = elmento_atual
    }

    return lista


}


console.log(insertion_sort([1,2,4,7,9,3,6,7]))