const mongoose = require('mongoose');
const { Schema } = mongoose;

const workerSchema = new Schema({
    name : String,
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    vehicleType : {
        type : String,
        required : true
    },
    currentTask : {
        type : Schema.Types.ObjectId,
        ref : 'Request'
    }
});

const Worker = mongoose.model('Worker', workerSchema);

module.exports = Worker;