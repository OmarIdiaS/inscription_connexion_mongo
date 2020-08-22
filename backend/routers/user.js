const express = require("express")
const router = express.Router()
const route = require("../models/users")


router.get('/', async(req, res) => {
    try{
        const user = await route.find({})       
        res.json(user)
    }catch(err){
        res.status(500).json({ message : err.message })
    }
})

router.post("/", async(req, res) => {
    const user = new route({
        username: req.body.username, 
        email : req.body.email, 
        password: req.body.password, 
        admin: req.body.admin,
        imageURL : req.body.imageURL
    })

    try{
        const newUser = await user.save()
        res.status(201).json(newUser)
    }
    catch(err){
        res.status(400).json({message : err.message})
    }
})

router.delete("/:id", async(req, res) => {
    const user = await route.deleteOne({_id : req.params.id})
    res.json(user)
})

router.delete("/all", async(req,res) => {
    const user = await route.deleteMany({})
    res.json(user)
})

module.exports = router