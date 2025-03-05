//criando uma lista a partir de duas e ordenando ela
function abc(lista1 , lista2){

    let lista_nova = []
    for (let i = 0; i < lista1.length; i++) {
         lista_nova.push(lista1[i]);
        
    }

    for (let i = 0; i < lista2.length; i++) {
        lista_nova.push(lista2[i]);
       
   }

   lista_nova.sort((a,b) => a-b)

    return lista_nova
}


let a = [1,2,3]
let b = [5,4,5]

console.log(abc(a,b))