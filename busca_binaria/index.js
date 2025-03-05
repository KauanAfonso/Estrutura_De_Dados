function busca_binaria(lista){
    numero_minimo = lista.reduce((menor_numero, elemento_atual)=>{
        return menor_numero < elemento_atual ? menor_numero : elemento_atual
    })

    numero_maior = lista.reduce((maior_numero, elemento_atual)=>{return maior_numero > elemento_atual ? maior_numero : elemento_atual },0)

    console.log(numero_minimo)
    console.log(numero_maior)
}





busca_binaria([1,20,5,0,18,6,18,-5])