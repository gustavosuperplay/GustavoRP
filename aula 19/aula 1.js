const numero = 10;
const texto = "10";
// Com dois sinais de igual (==), faz uma comparação de igualdade solta
if (numero == texto) {
console.log("Usando ==: O número é igual ao texto (considerando igualdade solta).");
} else {
console.log("Usando ==: O número não é igual ao texto (considerando igualdade solta).");
}
// Com três sinais de igual (===), faz uma comparação de igualdade estrita
if (numero === texto) {
    console.log("Usando ===: O número é igual ao texto (considerando igualdade estrita).");
    } else {
    console.log("Usando ===: O número não é igual ao texto (considerando igualdade estrita).");
    }