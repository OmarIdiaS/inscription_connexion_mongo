var mongoose = require("mongoose")


var imageTest = new mongoose.Schema({
    imageURL: {
        type: String
    }, 

}, {timestamps: true}); 

module.exports = mongoose.model('imageTest', imageTest)