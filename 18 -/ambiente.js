let num = [4,,8,7,5]
num.push(6)
num.sort()

console.log(`Nosso vetor possui os seguintes números ${num}`)

for ( let pos = 0 ; pos<num.length;pos++) {

    console.log(num[pos])   
} 

for ( let pos in num) {

    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}