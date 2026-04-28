// server.js

const express = require("express");
const { produtos } = require("./database");
const {
  criarPedido,
  alterarStatus,
  removerPedido
} = require("./service");

const app = express();
app.use(express.json());

app.get("/produtos", (req, res) => {
  res.json(produtos);
});

app.post("/pedidos", (req, res) => {
  try {
    const { cliente, produtos } = req.body;

    const pedido = criarPedido(cliente, produtos);

    res.status(201).json(pedido);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

app.patch("/pedidos/:id/status", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { status } = req.body;

    const pedido = alterarStatus(id, status);

    res.json(pedido);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

app.delete("/pedidos/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const resultado = removerPedido(id);

    res.json(resultado);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
