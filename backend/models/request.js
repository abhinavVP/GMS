const mongoose = require('mongoose');
const { Schema } = mongoose;


const reqSchema = new Schema({
    citizen : {
        type: Schema.Types.ObjectId, 
        ref: 'Citizen',
        
    },
    dateOfReq : { type: Date, default: Date.now },
    address : {
        type : String,
    },
    assignedDriver : {
        type: Schema.Types.ObjectId, 
        ref: 'Worker',
    },
    completionStatus : { 
        type: String, 
        enum: ['pending', 'sent-to-driver','completed'],
        default : 'pending'
    },
    quantity : {
        type : Number,
        required : true
    }
});

const Request = mongoose.model('Request', reqSchema);
module.exports = Request;