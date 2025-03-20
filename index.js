const express = require('express')
const tasksRoutes = require('./routes/tasks')

const app = express()
const PORT = 3000

// Middleware para processar JSON
app.use(express.json())

// Rotas
app.use('/tasks', tasksRoutes)

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})