var mongoose = require("mongoose")


var user = new mongoose.Schema({
    username: {
        type: String
    },
    email : {
        type : String
    }, 
    password:{
        type: String
    }, 
    admin: {
        type : Boolean
    },
    imageURL: {
        type : String
    }

}, {timestamps: true}); 

module.exports = mongoose.model('User', user)