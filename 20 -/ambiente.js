let amigo = {nome:'Diego', sexo:'M', peso:85.0, emagrecer(p){
    console.log('Emagreceu')
    this.peso += p
}}

amigo.emagrecer(-2)
console.log(`O ${amigo.nome} emagreceu e está pesando ${amigo.peso}Kg agora`)