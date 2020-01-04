const mongoose = require('mongoose');

const {Schema} = mongoose;
const {Types: {ObjectId}} = Schema;

const clubSchema = new Schema({
    admin:{
        type:ObjectId,
        required:true,
        ref:'User',
    },
    clubname:{
        type:String,
        required:true,
    },
    about:{
        type:String,
        default:null,
    },
    curriculum:{
        type:String,
        default:null,
    },
    club_result:{
        type:String,
        default:null,
    },
    review:{
        type:String,
    },
    created:{
        type:Date,
        default:Date.now,
    },
});

module.exports = mongoose.model('Club',clubSchema);