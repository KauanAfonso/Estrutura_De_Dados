const bublle_sort = (lista) =>{
    let num = 0
    let trocou 
    let tamanho_lista = lista.length
do{
     trocou = false
       for (let i = 0; i < tamanho_lista - 1; i++) {

            if(lista[i] > lista[i + 1]){
                num = lista[i]
                lista[i]= lista[i + 1]
                lista[i+1] = num

                trocou  = true
            }
        }

        tamanho_lista-=1

}while(trocou)

    return lista
}

console.log(bublle_sort([8,10,9,5,6,1,88,94,2]))
