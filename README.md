# Trabalho-AP2---Backend-Food-Truck-The-Hungry-Dev-
Trabalho Prático - Disciplina de Desenvolvimento Back-End 
Food Truck - The Hungry Dev (Backend)

API simples desenvolvida em Node.js com Express para gerenciamento de pedidos de um food truck. Nomeado The Hungry Dev! 

📁 Estrutura do Projeto
food-truck-backend/
│

├── database.js

├── pedidoService.js

├── service.js

├── server.js

├── package.json

🚀 Como executar o projeto: 

Instale as dependências:

npm install

Execute o servidor:

node server.js

O servidor estará disponível em: http://localhost:3000

📬 Rotas da API:

🔹 Listar produtos

GET /produtos

🔹 Criar pedido:

POST /pedidos

Corpo da requisição:

{
  "cliente": "Jeronimo",
  "produtos": [1, 2]
}

🔹 Atualizar status do pedido:

PATCH /pedidos/:id/status
Corpo da requisição:
{
  "status": "Em Preparo"
}

🔹 Deletar pedido:

DELETE /pedidos/:id

🧠 Regras de Negócio:

O cliente envia apenas os IDs dos produtos
O cálculo do total é feito no backend
O status inicial do pedido é "Pendente"
Pedidos com status "Entregue" não podem ser alterados.
Pedidos com status "Em Preparo" ou "Entregue" não podem ser excluídos.

⚠️ Observações:

Os dados são armazenados em memória (não há banco de dados)
Ao reiniciar o servidor, os pedidos são resetados
Projeto com foco em aprendizado de backend e organização em camadas.

🛠️ Tecnologias utilizadas:

Node.js
Express

👨‍💻 Autor: Jerônimo Hendres da Cunha. 

Trabalho acadêmico desenvolvido para disciplina de Desenvilvimento Back-end. Curso Análise e Desenvolvimento de Sistemas. 2026/01. 
