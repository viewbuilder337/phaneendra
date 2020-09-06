const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new  Schema({
    project_type:String,
    project_name:String,
    members:String
})

module.exports = mongoose.model('project',userSchema , 'projects')