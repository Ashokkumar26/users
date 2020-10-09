const express = require('express');
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express();
require('dotenv/config')

//Body-Parser
app.use(express.json())

//Middleware
app.use(morgan('dev'))


//Router
const personRouter = require('./personRoute')
app.use('/person', personRouter)


// DB server creation
mongoose.set('useNewUrlParser', true)
mongoose.set('useUnifiedTopology', true)
mongoose.connect(process.env.DB_CONNECTION, (error) => {
    if (error) {
        console.log("db not connected")
    }
    else {
        console.log("db connected successfully")
    }
})

//LocalHost
app.listen(2000, () => {
    console.log('server started on 2000')
})