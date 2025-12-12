const express = require ('express');
const app = express();
const connectDB = require('./db/connect');
require('dotenv');
const tasks = require('./routes/tasks');

// midlleware
app.use(express.json());// to parse json data, it allows us to access req.body

//routes
app.get('/hello',(req, res)=>{
    res.send('Task Manager App');
})   

// app.get('/api/v1/tasks') -- get all the tasks
// app.post('/api/v1/tasks') -- create a new task
// app.get('/api/v1/tasks/:id') -- get a a single task
// app.patch('/api/v1/tasks') -- update tasks
// app.delete('/api/v1/tasks/:id') -- delete task

app.use('/api/v1/tasks', tasks)


const start = async () => {
    try{
        await connectDB()
        app.listen(port, console.log(`Server is listening on port ${port}`));

    } catch(error){
        console.log(error)
    }
}

start();

const port = 3000;

