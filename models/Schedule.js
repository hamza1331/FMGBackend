const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    day:{
        type:Number,
        min:1
    },
    sessionID:{
        type:String,
        required:true
    },
    lectureID:{
        type:String
    },
    lectureTitle:{
        type:String
    }

})


module.exports = mongoose.model('Schedules',scheduleSchema)