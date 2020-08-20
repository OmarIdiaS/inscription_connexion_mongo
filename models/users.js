var mongoose = require("mongoose")


var userSchema = new mongoose.Schema({
    pseudo: {
        type: String
    },
    email : {
        type : String
    }, 
    mdp:{
        type: String
    }, 
    admin: {
        type : Boolean
    },

}, {timestamps: true}); 

module.exports = mongoose.model('user', userSchema)