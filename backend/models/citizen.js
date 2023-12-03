const mongoose = require('mongoose');
const { Schema } = mongoose;

const citizenSchema = new Schema({
    name : String,
    age : Number,
    phoneNo : {
        type : Number,
        required : true
    }, email : {
        type : String,
        required : true
    },
    address :{
        type : String,
        required : true
    },
    aadharNo : {
        type : Number,
        required : true
    },  
    password : {
        type : String,
        required : true
    },
    requests : 
        {
            type : Schema.Types.ObjectId,
            ref : 'Request'
        }
    
    },
);

const Citizen = mongoose.model('Citizen', citizenSchema);
module.exports = Citizen;