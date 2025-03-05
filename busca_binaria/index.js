function busca_binaria(lista, valor){

  const lado_esquerda = 0
  const lado_direita = lista.length - 1

  while(lado_direita >= lado_esquerda){

    const meio_lista = (lado_direita + lado_esquerda) / 2

    if(lista[meio_lista] == valor){
        return meio
    }
    else if(lista[meio_lista] < valor){
        lado_direita = meio_lista - 1
    }
    else if(lista[meio_lista] > valor){
        lado_esquerda = meio_lista + 1
    }
  }

  return -1

}





const resultado = busca_binaria([1,20,44,55,32,78,82,83,91,92,94,100], 20)

if(resultado == -1){
    console.log("Valor não encontrado")
}else{
    console.log("valor encontrado")
}