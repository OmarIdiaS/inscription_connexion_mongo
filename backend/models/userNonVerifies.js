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
    imageURL: {
        type: String
    }, 

}, {timestamps: true}); 

module.exports = mongoose.model('userNonVerifie', userSchema)