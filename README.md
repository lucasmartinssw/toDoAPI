# README - API de Gerenciamento de Tarefas

## 📝 Descrição do Projeto

API RESTful para gerenciamento de tarefas (To-Do List) com funcionalidades CRUD completas e autenticação de usuários. Desenvolvida com Node.js, Express e banco de dados relacional (MySQL).

## ✨ Funcionalidades

- ✅ Cadastro e autenticação de usuários
- ✅ CRUD completo de tarefas
- ✅ Marcar/desmarcar tarefas como concluídas
- ✅ Validação de dados

## 🛠️ Tecnologias Utilizadas

### Backend
- Node.js (v18+)
- Express (Framework)
- Nodemon (reiniciar o servidor automaticamente durante o desenvolvimento)
- Sequelize (ORM para banco de dados)
- JWT (Autenticação)
- Bcrypt (Criptografia de senhas)
- Joi (Validação de dados)

### Banco de Dados
- MySQL

### Ferramentas
- Postman (Testes de API)
- XAMPP (Banco de dados local)

## ⚙️ Anatoações para Configuração do Ambiente

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/lucasmartinssw/todo-api.git
cd todo-api
```

2. Instale as dependências:
```bash
npm install express
npm install --save-dev nodemon
npm install mysql2 sequelize
npm install --save-dev sequelize-cli
npm install bcryptjs
npm install jsonwebtoken
```

3. Execute as migrações:
```bash
npx sequelize-cli db:migrate
```

4. Inicie a aplicação:
```bash
npm start
# Ou para desenvolvimento:
npm run dev
```


### Endpoints Principais

#### Autenticação
- `POST /auth/register` - Registrar novo usuário
- `POST /auth/login` - Login de usuário

#### Tarefas
- `GET /tasks` - Listar todas as tarefas
- `POST /tasks` - Criar nova tarefa
- `GET /tasks/:id` - Obter detalhes de uma tarefa
- `PUT /tasks/:id` - Atualizar tarefa
- `DELETE /tasks/:id` - Excluir tarefa
- `PATCH /tasks/:id/complete` - Alternar status de conclusão

## 🧪 Testes

Para executar os testes:

```bash
npm test
```
Este README é apenas alguns pontos de anotações que foram feitos ao decorrer do desenvolvimento.
