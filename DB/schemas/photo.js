const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const photoSchema = new Schema({
    path:{
        type:String,
    },
    caption:{
        type:String,
    },
    created:{
        type:Date,
        default:Date.now,
    },
});

module.exports = mongoose.model('Photo',photoSchema);