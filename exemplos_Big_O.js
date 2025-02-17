// 🔹 Complexidades de Big O
// A notação Big O é usada para medir a eficiência de um algoritmo em termos de tempo ou espaço conforme o tamanho dos dados cresce. Vamos ver as mais comuns:

// 1️⃣ O(1) - Tempo Constante
// 👉 O tempo de execução não muda conforme o tamanho dos dados cresce.
// 🔹 Exemplo: Acesso direto a um índice de um array (arr[3]), buscas em Set ou Map.

const arr = [10, 20, 30];
console.log(arr[1]); // O(1)

// 2️⃣ O(n) - Tempo Linear
// 👉 O tempo de execução cresce na mesma proporção que o número de elementos.
// 🔹 Exemplo: Percorrer uma lista inteira com um for.

const arr2 = [10, 20, 30, 40, 50];
for (let num of arr2) {
  console.log(num); // O(n)
}
// Se tivermos 10 elementos, fazemos 10 operações. Se tivermos 1 milhão, fazemos 1 milhão.

// 3️⃣ O(n²) - Tempo Quadrático
// 👉 O tempo de execução cresce exponencialmente (multiplicado pelo tamanho da entrada).
// 🔹 Exemplo: Dois loops aninhados.

const arr3 = [10, 20, 30, 40];
for (let i = 0; i < arr3.length; i++) {
  for (let j = 0; j < arr3.length; j++) {
    console.log(arr3[i], arr3[j]); // O(n²)
  }
}
// Se tivermos 10 elementos, fazemos 100 operações (10 × 10). Se tivermos 1000, fazemos 1.000.000 operações! 😱

// 4️⃣ O(log n) - Tempo Logarítmico
// 👉 O tempo de execução cresce muito devagar conforme o tamanho dos dados aumenta.
// 🔹 Exemplo: Busca Binária (onde cortamos o problema pela metade a cada iteração).

function buscaBinaria(arr, alvo) {
  let inicio = 0;
  let fim = arr.length - 1;

  while (inicio <= fim) {
    let meio = Math.floor((inicio + fim) / 2);

    if (arr[meio] === alvo) return true;

    if (arr[meio] < alvo) inicio = meio + 1;
    else fim = meio - 1;
  }

  return false;
}
// Se tivermos 1 milhão de elementos, a busca binária encontra um valor em apenas ~20 operações! 🚀

// 🔥 Comparando na prática:
// Big O	10 elementos	1.000 elementos	1.000.000 elementos
// O(1)	1 operação	1 operação	1 operação
// O(log n)	~3 operações	~10 operações	~20 operações
// O(n)	10 operações	1.000 operações	1.000.000 operações
// O(n²)	100 operações	1.000.000 operações	🚨 1 TRILHÃO de operações! 😱
