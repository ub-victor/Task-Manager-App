const express = require ('express');

const app = express();


//routes
app.get('/hello',(req, res)=>{
    res.send('Task Manager App');
})

// app.get('/api/v1/tasks') -- get all the tasks
// app.post('/api/v1/tasks') -- create a new task
// app.get('/api/v1/tasks/:id') -- get a a single task
// app.patch('/api/v1/tasks') -- get all the tasks




const port = 3000;

app.listen(port, console.log(`Server is listening on port ${port}`));