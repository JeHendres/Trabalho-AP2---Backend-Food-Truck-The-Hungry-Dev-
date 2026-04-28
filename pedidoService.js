// pedidoService.js

const { produtos, pedidos } = require("./database");

function calcularTotalPorIds(listaIds) {
  let total = 0;

  for (const id of listaIds) {
    const produto = produtos.find(p => p.id == id);

    if (!produto) {
      throw new Error("Produto não encontrado");
    }

    total += produto.preco;
  }

  return total;
}

function atualizarStatusPedido(id, novoStatus) {
  const pedido = pedidos.find(p => p.id == id);

  if (!pedido) {
    throw new Error("Pedido não encontrado");
  }

  if (pedido.status === "Entregue") {
    throw new Error("Pedido já finalizado");
  }

  pedido.status = novoStatus;

  return pedido;
}

function deletarPedido(id) {
  const index = pedidos.findIndex(p => p.id == id);

  if (index === -1) {
    throw new Error("Pedido não encontrado");
  }

  const pedido = pedidos[index];

  if (pedido.status === "Em Preparo" || pedido.status === "Entregue") {
    throw new Error("Não pode excluir esse pedido");
  }

  pedidos.splice(index, 1);

  return { msg: "Pedido removido" };
}

module.exports = {
  calcularTotalPorIds,
  atualizarStatusPedido,
  deletarPedido
};
