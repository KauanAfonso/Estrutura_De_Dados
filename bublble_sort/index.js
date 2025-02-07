const bublle_sort = (lista) =>{
    let num = 0
    for (let i = 0; i < lista.length; i++) {

        for (let j = i + 1; j < lista.length; j++) {

            if(lista[i] > lista[j]){
                num = lista[i]
                lista[i]= lista[j]
                lista[j] = num
            }
            
        }
        
        console.log(lista)
        return lista
    }
}



console.log(bublle_sort([8,10,9,5,6,1,88,94]))
