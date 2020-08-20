const express = require("express")
const router = express.Router()
const route = require("../models/userNonVerifies")
const multer = require("multer")
var   fs  = require("fs")



var storage = multer.diskStorage({
    destination: function(req, file, cb){
        var dirName = "../client/src/uploads"
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


router.get('/', async(req, res) => {
    try{
        const user = await route.find({})       
        res.json(user)
    }catch(err){
        res.status(500).json({ message : err.message })
    }
})

router.delete("/:id", async(req, res) => {
        const user = await route.deleteOne({_id : req.params.id})
        res.json(user)
})

router.post("/", upload.single('files'), async(req, res) => {
    
    const valeurBody = JSON.parse(req.body.state)
    const user = new route({
        imageURL: req.file.filename,
        pseudo: valeurBody.pseudo, 
        email : valeurBody.email, 
        mdp: valeurBody.mdp, 
        admin: req.body.admin,
       
    })

    try{
        const newUser = await user.save()
        res.status(201).json(newUser)
    }
    catch(err){
        res.status(400).json({message : err.message})
    }
})

module.exports = router