function produtoExcetoAtual(arr) {
  const n = arr.length;
  const resultado = new Array(n).fill(1);

  let produtoEsquerda = 1;
  for (let i = 0; i < n; i++) {
    resultado[i] = produtoEsquerda;
    produtoEsquerda *= arr[i];
  }

  let produtoDireita = 1;
  for (let i = n - 1; i >= 0; i--) {
    resultado[i] *= produtoDireita;
    produtoDireita *= arr[i];
  }

  return resultado;
}

// Testes
//                             [1, 1, 2, 6, 24]
//                             [120, 60, 40, 30, 24]
console.log(produtoExcetoAtual([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
//                             [1, 3, 6]
//                             [2, 3, 6]
console.log(produtoExcetoAtual([3, 2, 1])); // [2, 3, 6]
