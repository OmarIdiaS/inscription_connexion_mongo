var express = require("express")
var bodyParser = require("body-parser")
var cors = require('cors')
var mongoose = require("mongoose"); 
const passport = require("passport")
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser")
const bcrypt = require("bcryptjs")
const session = require("express-session")
const User = require('./models/users')

const port = 8080
var app = express()



app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true, useUnifiedTopology: true})

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true, 
})
);

app.use(
    session({
        secret: "secretcode", 
        resave: true, 
        saveUninitialized: true,
    })
)

app.use(cookieParser("secretcode"))
app.use(passport.initialize())
app.use(passport.session())
require("./passportConfig")(passport); 

app.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.send("No User Exists");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send("Successfully Authenticated");
          console.log("Information utilisateur " , req.user);
        });
      }
    })(req, res, next);
  });
  

app.post("/register", (req,res) => {
    User.findOne({username: req.body.username}, async(err, doc) => {
        if (err) throw err; 
        if (doc) res.send("User Already Exists")
        if (!doc){
            const hashedPassword = await bcrypt.hash(req.body.password, 10);

            const newUser = new User({
                username: req.body.username,
                password: hashedPassword,
            });
            await newUser.save();
            res.send("User Created")
        }
    })
})

app.get("/user", (req,res) => {
    res.send(req.user)
})

app.get("/", function(req, res){
    res.send("saluut")
})

const user = require('./routers/user')
const userNonVerfies = require('./routers/userNonVerifies')
const imageTest = require('./routers/imageTest');


app.use('/users', user)
app.use('/usersNonVerifies', userNonVerfies)
app.use('/image', imageTest)

app.listen(port , () => {
    console.log("port : ", {port})
} )