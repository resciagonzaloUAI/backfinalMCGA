const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxLength: 30
    },
    mail: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    token:{
        type: String,
        required: false
    },
    //isDeleted:{
    //    type: Boolean,
    //    default: false,
    //}
});

module.exports = User = mongoose.model('User', userSchema);
module.exports.User = User