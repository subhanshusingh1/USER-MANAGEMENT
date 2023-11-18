const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const bodyparser = require('body-parser')
const router = require('./server/router/router')
const connectDB = require('./server/database/connection')
const notFound = require('./server/middleware/not-found')

// LOG REQUEST
app.use(morgan('tiny'))

// PARSE REQUEST TO PARSER BODY
app.use(bodyparser.urlencoded({extended:true}))

// ROUTES
app.use('/api/v1/users', router)
app.use(notFound)

// PORT 
const port = process.env.PORT || 8080

// MONGO DB AND SERVER CONNECTION AND VALIDATION
const start = async () => {
     try {
        await connectDB()
        app.listen(port, () => {
            console.log(`server is running on localhost:${port}`)
        })
     } catch(error) {
        res.status(500).send({msg:error})
     }
}

start()


