# NeoFinance Dashboard 🚀

Dashboard financeiro moderno com visual "Neo-Brutalist/Glassmorphism", focado em controle de gastos e visualização de dados.

## 🛠 Tech Stack

**Frontend:**

- React + Vite + TypeScript
- Tailwind CSS (Estilização)
- Recharts (Gráficos)
- Lucide React (Ícones)
- Axios (Integração API)

**Backend:**

- Node.js + Express
- TypeScript
- Prisma ORM
- PostgreSQL (via Docker)

**Mobile (Em breve):**

- React Native + Expo

## ⚡ Como Rodar o Projeto

### Pré-requisitos

- Node.js (v18+)
- Docker (para o banco de dados)

### 1. Infraestrutura (Banco de Dados)

Na pasta `neofinance-backend`, suba o container do Postgres:

```bash
cd neofinance-backend
docker-compose up -d
2. Backend API
Instale as dependências e rode o servidor:

Bash

cd neofinance-backend
npm install
# Cria as tabelas e popula com dados falsos
npx prisma migrate dev --name init
npx prisma db seed
# Roda a API
npm run dev
A API rodará em: http://localhost:3333

3. Frontend Web
Em outro terminal, inicie a interface:

Bash

cd neofinance-frontend
npm install
npm run dev
O App abrirá em: http://localhost:5173

🚧 Status
[x] Setup Inicial (Monorepo Structure)

[x] Banco de Dados Postgres Configurado

[x] API de Dashboard (Saldo/Entradas/Saídas)

[x] UI Base (Sidebar e Layout)

[x] Cards de Resumo Financeiro

[ ] Gráficos de Receita vs Despesa

[ ] CRUD de Transações

[ ] App Mobile

👨‍💻 Autor
Desenvolvido por Guilherme Candido.
```
