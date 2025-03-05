function busca_binaria(lista, valor){

  let lado_esquerdo = 0
  let lado_direita = lista.length - 1

  while(lado_direita >= lado_esquerdo){

    let meio_lista = Math.floor((lado_direita + lado_esquerdo) / 2)

    if(lista[meio_lista] == valor){
        return meio_lista
    }
    else if(lista[meio_lista] > valor){
        lado_direita = meio_lista - 1
    }
    else if(lista[meio_lista] < valor){
        lado_esquerdo = meio_lista + 1
        console.log(lado_esquerdo)
    }
  } 

  return -1

}

const resultado = busca_binaria([1,20,44,55,32,78,82,83,91,92,94,100], 100)

if(resultado == -1){
    console.log("Valor não encontrado")
}else{
    console.log("valor encontrado")
}