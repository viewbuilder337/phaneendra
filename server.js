const express = require('express')
const bodyparser = require('body-parser')

const cors = require('cors')

const PORT = 3000 
const api = require('./src/routes/api')
const app = express()
app.use(cors())

app.use(bodyparser.json())

app.use('/api', api)
app.get('/', function( req , res ){
    res.send('Hello From Server')
})
app.listen(PORT , function(){
    console.log('Server running in ' + PORT)
})
