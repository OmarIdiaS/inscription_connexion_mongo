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
        pseudo: req.body.pseudo, 
        email : req.body.email, 
        mdp: req.body.mdp, 
        admin: req.body.admin
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

module.exports = router