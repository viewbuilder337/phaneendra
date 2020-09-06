const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()

const mongoose = require('mongoose')
const User = require('../modals/user')
const Project = require('../modals/projects')

const db = "mongodb://127.0.0.1:27017/viewbuilder"


router.get('/', ( req , res )=>{
res.send('From API Route')
})
mongoose.connect(db,  { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    if (err)
        console.error(err);
    else
        console.log("Connected to the mongodb"); 
});






router.post('/login', (req, res) => {
    let userData = req.body
    User.findOne({email: userData.email}, (err, user) => {
      if (err) {
        console.log(err)    
      } else {
        if (!user) {
          res.status(401).send('Invalid Email')
        } else 
        if ( user.password !== userData.password) {
          res.status(401).send('Invalid Password')
        } else {
          let payload = {subject: user._id}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
        }
      }
    })
  })

router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((err, registeredUser) => {
      if (err) {
        console.log(err)      
      } else {
        let payload = {subject: registeredUser._id}
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token})
      }
    })
  })
  
router.post('/projects',(req,res) =>{
  let projectsData = req.body
  let project = new Project(projectsData)
  project.save((err , projectsData) => {
    if(err){
      console.log(err)
    }else{
      res.status(200).send(project)
    }
  })
})




router.get('/projects',function(req ,res){
  Project.find({}).exec(function(err , projects){
    if(err){
    console.log("waste")
    }
    else{
      res.json(projects);
    }
    
  });
});

router.delete("projects/:id", function(req, res, next) {
  Post.findByIdAndRemove(req.params.id, req.body, function(err, post) {
   if (err) return next(err);
   res.json(post);
  });
 });


module.exports = router
