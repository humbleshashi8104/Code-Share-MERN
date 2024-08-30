const cors = require('cors')
const express = require('express')
const app = express()
const env = require('dotenv').config()
const connectDb = require('./config/dbconnection')
const errorHandler = require("./middleware/errorhandler");

app.use(cors())
connectDb()
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
