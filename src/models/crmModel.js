const mongoose = require('mongoose');

const Schema = mongoose.Schema;

module.exports = new Schema({
    firstName:{
        type:String,
        required:'Enter your first name'
    },
    lastName:{
        type:String,
        required:'Enter your last name'
    },
    email:{
        type:String
    },
    company:{
        type:String
    },
    phone:{
        type:Number
    },
    created_date:{
        type:Date,
        default:Date.now
    }
})