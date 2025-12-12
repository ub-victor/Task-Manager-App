const moogoose = require('mongoose');// this line it allows us to connect to mongoDB database


const connectDB = (url)=>{
    return moogoose.connect(url)
}

module.exports = connectDB;