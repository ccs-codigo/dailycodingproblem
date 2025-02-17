// resolvido com Big O(n²), depois otimizado com ajuda para Big O(n)

const arr = [10, 15, 3, 7];
const k = 17;

const numerosVistos = new Set();
for (let i = 0; i < arr.length; i++) {
  const indiceAtual = arr[i];
  const complemento = k - indiceAtual;

  if (numerosVistos.has(complemento)) {
    console.log(`O número ${indiceAtual} + ${complemento} é igual à ${k}`);
    return;
  }

  numerosVistos.add(indiceAtual);
}
