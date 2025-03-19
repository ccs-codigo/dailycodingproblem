function createOrderLog(N) {
  let log = []; // Lista para armazenar os últimos N pedidos

  function record(order_id) {
    if (log.length >= N) {
      log.shift(); // Remove o mais antigo quando atingir o limite
    }
    log.push(order_id); // Adiciona o novo pedido
  }

  function get_last(i) {
    return log[log.length - i]; // Retorna o i-ésimo último pedido
  }

  return { record, get_last }; // Retorna as funções para serem usadas
}

// Exemplo de uso:
const log = createOrderLog(5); // Criando um log que mantém os últimos 5 pedidos

log.record(98);
log.record(99);
log.record(100);
log.record(101);
log.record(102);
log.record(103);
log.record(104);
log.record(105);
log.record(108); // Isso deve remover os primeiros e manter apenas os últimos

console.log(log.get_last(1)); //(último pedido)
console.log(log.get_last(2));
console.log(log.get_last(3));
console.log(log.get_last(4));
console.log(log.get_last(5));
