const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
     
})

// this line allows us to create a model named 'Task' using the TaskSchema, it means we can interact with the 'tasks' collection in the database
module.exports = mongoose.model('Task', TaskSchema);