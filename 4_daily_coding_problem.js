function createNode(value) {
  return { value, next: null };
}

// Criando os nós compartilhados (8 -> 10)
const node8 = createNode(8);
const node10 = createNode(10);
node8.next = node10;

// Criando a lista A: 3 -> 7 -> 8 -> 10
const headA = createNode(3);
headA.next = createNode(7);
headA.next.next = node8; // Conectando ao nó compartilhado

// Criando a lista B: 99 -> 1 -> 8 -> 10
const headB = createNode(99);
headB.next = createNode(1);
headB.next.next = node8; // Conectando ao nó compartilhado

// Função para encontrar a interseção
function getIntersectionNode(headA, headB) {
  if (!headA || !headB) return null;

  let a = headA,
    b = headB;

  while (a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }

  return a;
}

// Chamando a função e imprimindo o resultado
const intersection = getIntersectionNode(headA, headB);
console.log(intersection ? intersection.value : "Sem interseção");
