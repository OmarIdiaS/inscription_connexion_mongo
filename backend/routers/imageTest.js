const express = require("express")
const router = express.Router()
const route = require("../models/testImage")
const multer = require("multer")
var   fs  = require("fs")


var storage = multer.diskStorage({
    destination: function(req, file, cb){
        var dirName = "./public"
        console.log(dirName)
            if(!fs.existsSync(dirName)){
                fs.mkdirSync(dirName)
            }
            cb(null, dirName)
        },
    filename : function(req, file, cb ){
        cb(null, Date.now() + '-'+file.originalname)
    }
})

var upload = multer({ storage : storage})

router.post('/upload',upload.single('files'), async(req, res) => {
    try{
        const newImage = new route({
            imageURL: req.file.filename
        });
        await newImage.save(); 
        res.json(newImage.imageUrl);
        console.log("Nom de stockage " , req.file.originalname)
    }catch(err){
        console.log('Something wen wrong', err);
    }
});

router.get('/getLatest', async(req,res) => {
    const getImage = await route.find()
    res.json(getImage)
})

module.exports = router