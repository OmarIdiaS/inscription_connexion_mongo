var express = require("express")
var bodyParser = require("body-parser")
var cors = require('cors')
var mongoose = require("mongoose"); 
const port = 8080
var app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true, useUnifiedTopology: true})

app.get("/", function(req, res){
    res.send("saluut")
})

const user = require('./routers/user')
const userNonVerfies = require('./routers/userNonVerifies')

app.use('/users', user)
app.use('/usersNonVerifies', userNonVerfies)

app.listen(port , () => {
    console.log("port : ", {port})
} )