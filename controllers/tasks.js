const Task = require('../models/Task')

const getAllTasks = (req, res)=>{
    res.send('all items')
}

const createTask = async (req, res)=>{
    const task = await Task.create({name: 'first task'})
    res.json(req.body)
}

const getTask = (req, res)=>{
    res.json({id:req.params.id})
}

const updateTask = (req, res)=>{
    res.json({id:req.params.id})
}

const deleteTask = (req, res)=>{
    res.json({id:req.params.id})
}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}
