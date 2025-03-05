function busca_binaria(lista, valor){

  //definido os índicies iniciais  
  let lado_esquerdo = 0
  let lado_direita = lista.length - 1

  //enquanto o lado direito for maior ou igual o lado esquerdo
  while(lado_direita >= lado_esquerdo){

    //calculando o intervalo do meio
    let meio_lista = Math.floor((lado_direita + lado_esquerdo) / 2)//math floor redonda o valor

    //se o valor for igual o valor da lista na posicao do meio acaba
    if(lista[meio_lista] == valor){
        return meio_lista
    }
    //se o numero procurado for menor que o num da lista, descartaremos o lado direito da lista
    else if(lista[meio_lista] > valor){
        
        lado_direita = meio_lista - 1 // o lado direito receberá o meio - 1
    }

    //se a lista[meio] for menor que o valor, descartaremos o lado esquerdo da lista
    else if(lista[meio_lista] < valor){
        lado_esquerdo = meio_lista + 1 // o lado esquerdo recebe do meio pra frente agora
    }
  } 

  return -1 // se não encontrar, retorne -1

}

const resultado = busca_binaria([1,20,44,55,32,78,82,83,91,92,94,100], 100)

if(resultado == -1){
    console.log("Valor não encontrado")
}else{
    console.log("valor encontrado")
}