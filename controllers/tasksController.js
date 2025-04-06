const { Task } = require('../models');

// Listar todas as tarefas DO USUÁRIO LOGADO
const getAllTasks = async (req, res) => {
    try {
        const userId = req.user.id; // Obtém o ID do usuário logado do token JWT
        const tasks = await Task.findAll({ 
            where: { userId } // Filtra apenas as tarefas do usuário logado
        });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar tarefas', error });
    }
};

// Obter uma tarefa por ID (SOMENTE DO USUÁRIO LOGADO)
const getTaskById = async (req, res) => {
    try {
        const userId = req.user.id;
        const task = await Task.findOne({ 
            where: { 
                id: req.params.id,
                userId // Garante que a tarefa pertence ao usuário
            } 
        });
        
        if (!task) {
            return res.status(404).json({ message: 'Tarefa não encontrada' });
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar tarefa', error });
    }
};

// Criar uma nova tarefa PARA O USUÁRIO LOGADO
const createTask = async (req, res) => {
    try {
        const userId = req.user.id;
        const { title } = req.body;
        
        const newTask = await Task.create({ 
            title,
            userId // Associa a tarefa ao usuário logado
        });
        
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar tarefa', error });
    }
};

// Atualizar uma tarefa (SOMENTE DO USUÁRIO LOGADO)
const updateTask = async (req, res) => {
    try {
        const userId = req.user.id;
        const { title, completed } = req.body;
        
        const task = await Task.findOne({ 
            where: { 
                id: req.params.id,
                userId 
            } 
        });
        
        if (!task) {
            return res.status(404).json({ message: 'Tarefa não encontrada' });
        }
        
        task.title = title || task.title;
        task.completed = completed || task.completed;
        await task.save();
        
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar tarefa', error });
    }
};

// Deletar uma tarefa (SOMENTE DO USUÁRIO LOGADO)
const deleteTask = async (req, res) => {
    try {
        const userId = req.user.id;
        const task = await Task.findOne({ 
            where: { 
                id: req.params.id,
                userId 
            } 
        });
        
        if (!task) {
            return res.status(404).json({ message: 'Tarefa não encontrada' });
        }
        
        await task.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar tarefa', error });
    }
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};