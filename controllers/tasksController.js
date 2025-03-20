const tasks = require('../data/tasks')

const getAllTasks = (req, res) => {
    res.json(tasks)
}

const getTaskById = (req, res) => {
    const taskId = parseInt(req.params.id) 
    const task = tasks.find(t => t.id === taskId)

    if (!task) {
        return res.status(404).json({ message: 'Tarefa não encontrada' })
    }

    res.json(task)
}

const createTask = (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        completed: false
    };

    tasks.push(newTask)
    res.status(201).json(newTask)
}

const updateTask = (req, res) => {
    const taskId = parseInt(req.params.id)
    const task = tasks.find(t => t.id === taskId)

    if (!task) {
        return res.status(404).json({ message: 'Tarefa não encontrada' })
    }

    task.title = req.body.title || task.title
    task.completed = req.body.completed || task.completed

    res.json(task);
}

const deleteTask = (req, res) => {
    const taskId = parseInt(req.params.id); // Certifique-se de usar taskId
    const taskIndex = tasks.findIndex(t => t.id === taskId)

    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Tarefa não encontrada' })
    }

    tasks.splice(taskIndex, 1)
    res.status(204).send()
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
}