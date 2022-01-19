const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },

    lastName:{
        type: String,
        required: true
    },

    dateOfBirth:{
        type: String,
        required:true
    },

    school:{
        type: String,
        required: true
    }

},{timestamps:true});

module.exports = mongoose.model('user',userSchema);