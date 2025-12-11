const express = require ('express')
const router = express.Router()

const {getAllTasks, getTask, updateTask, deleteTask} = require('../controllers/tasks')

router.route('/').get(getAllTasks);

module.exports = router