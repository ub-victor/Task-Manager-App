const express = require ('express')
const router = express.Router()

const {getAllTasks, getTask, updateTask, deleteTask, createTask} = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(createTask)
router.route('/').get(getTask).patch(updateTask).delete

module.exports = router