const express = require('express')
const router = express.Router()
const tasksController = require('../controllers/tasksController')
const authenticate = require('../middleware/authenticate')

//Rotas

router.get('/', authenticate, tasksController.getAllTasks)
router.get('/:id', authenticate, tasksController.getTaskById)
router.post('/', authenticate, tasksController.createTask)
router.put('/:id', authenticate, tasksController.updateTask)
router.delete('/:id', authenticate, tasksController.deleteTask)

module.exports = router