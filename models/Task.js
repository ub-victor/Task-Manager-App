const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must provide name' ],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    
    }
     
})

// this line allows us to create a model named 'Task' using the TaskSchema, it means we can interact with the 'tasks' collection in the database
module.exports = mongoose.model('Task', TaskSchema);
