const Task = require('../models/Task');

const getAllTasks = async (req, res)=>{
    try {
        const tasks = await Task.find({});
        res.status(200).json({tasks})

    } catch(error){
        res.status(500).json({msg:error})

    }
}

const createTask = async (req, res)=>{
    try{
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch(error){
        res.status(500).json({msg:error})

    }
}

const getTask = async (req, res) => {
  try {
    // const taskID = req.params.id
    const { id: taskID } = req.params

    const task = await Task.findById(taskID)

    if (!task) {
      return res.status(404).json({
        msg: `No task with id ${taskID}`
      })
    }

    res.status(200).json({ task })

  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
}


const updateTask = async (req, res)=>{
    try{
        const {id:taskID} = req.params;
        const task = Task.findOneAndUpdate({_id:taskID}, req.body)
        if(!task){
            return res.status(404).json({msg: `No task with id : ${taskID}`})
        }


    } catch(error) {
        return res.status(404).json({msg: `No task with id : ${taskID}`})
    }
}

const deleteTask = async (req, res)=>{

    try{
        const { id: taskID} = req.params
        const task = await Task.findOneAndDelete({_id: taskID})
        if(!task){
            return res.status(404).json({msg: `No task with id : ${taskID}`})
        }
        res.status(200).json({task})
    } catch (error){
        res.status(500).json({msg:error})
    }
    
}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}
