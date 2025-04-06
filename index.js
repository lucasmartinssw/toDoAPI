require('dotenv').config(); 
const express = require('express')
const tasksRoutes = require('./routes/tasks')
const authRoutes = require('./routes/auth');
const cors = require('cors')
const app = express()
const PORT = 3000



// Middleware para processar JSON
app.use(cors())
app.use(express.json())

// Rotas
///app.use('/api', require('./routes'))
app.use('/tasks', tasksRoutes)
app.use('/auth', authRoutes);

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})