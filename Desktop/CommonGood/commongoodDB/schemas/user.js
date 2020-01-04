const mongoose = require('mongoose');

const {Schema} = mongoose;
const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    scrap:{
        type:String,
        default:null,
    },
    my_club:{
        type:String,
        default:null,
    },
    created:{
        type:Date,
        default:Date.now,
    },
});

module.exports = mongoose.model('User',userSchema);