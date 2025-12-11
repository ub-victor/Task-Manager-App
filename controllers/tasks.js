const getAllTasks = (req, res)=>{
    res.send('all items')
}

const createTask = (req, res)=>{
    res.send('create task')
}

const getTask = (req, res)=>{
    res.send('get sigle task')
}

const updateTask = (req, res)=>{
    res.send('update task')
}

const deleteTask = (req, res)=>{
    res.send('delete a task')
}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}
