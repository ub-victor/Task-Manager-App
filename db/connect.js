const moogoose = require('mongoose');// this line it allows us to connect to mongoDB database


const connectDB = (url)=>{
    return moogoose.connect(connectionString)
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.log('Error connecting to MongoDB:', err));

}

module.exports = connectDB;