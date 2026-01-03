const express = require ('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not');


// midlleware
app.use(express.static('./public'))
app.use(express.json());// to parse json data, it allows us to access req.body


// app.get('/api/v1/tasks') -- get all the tasks
// app.post('/api/v1/tasks') -- create a new task
// app.get('/api/v1/tasks/:id') -- get a a single task
// app.patch('/api/v1/tasks') -- update tasks
// app.delete('/api/v1/tasks/:id') -- delete task

app.use('/api/v1/tasks', tasks)

const port = 3000;

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port} `));
        console.log('Connected to MongoDB...')

    } catch(error){
        console.log(error)
    }
}

start();

