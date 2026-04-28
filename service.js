// service.js

const { pedidos } = require("./database");
const {
  calcularTotalPorIds,
  atualizarStatusPedido,
  deletarPedido
} = require("./pedidoService");

let idAtual = 1;

function criarPedido(cliente, produtosIds) {
  if (!cliente) {
    throw new Error("Cliente obrigatório");
  }

  if (!produtosIds || produtosIds.length === 0) {
    throw new Error("Pedido precisa de produtos");
  }

  const total = calcularTotalPorIds(produtosIds);

  const novoPedido = {
    id: idAtual++,
    cliente,
    produtos: produtosIds,
    total,
    status: "Pendente",
    criadoEm: new Date()
  };

  pedidos.push(novoPedido);

  return novoPedido;
}

function alterarStatus(id, status) {
  return atualizarStatusPedido(id, status);
}

function removerPedido(id) {
  return deletarPedido(id);
}

module.exports = {
  criarPedido,
  alterarStatus,
  removerPedido
};
