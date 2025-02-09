const insertion_sort = (lista)=>{

    for (let i = 1; i < lista.length; i++) {
        const elemnto_atual = lista[i];
        let elemnto_anterior = i - 1

  
        while(lista[elemnto_anterior] > elemnto_atual && elemnto_anterior>=0){
                
            lista[elemnto_anterior + 1] =lista[elemnto_anterior]
            elemnto_anterior--
        }
        
        lista[elemnto_anterior + 1] = elemnto_atual
    }

    return lista


}


console.log(insertion_sort([1,2,4,7,9,3,6,7]))