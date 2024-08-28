const início= prompt('insira o primeiro número da sequência:');
const fim= prompt('Insira o último número da sequência:');
let quantidadedeImpares = 0;

for (let i = início; i <= fim; i++){
    if(i % 2 !== 0){
        quantidadedeImpares++
    }
        
}
    alert (`tem ${quantidadedeImpares} numeros impares `)
