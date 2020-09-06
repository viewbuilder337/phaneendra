const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new  Schema({
    email : String,
    password: String,
    project_type:String,
    Project_name:String,
    project_member:String
})

module.exports = mongoose.model('user',userSchema , 'users')