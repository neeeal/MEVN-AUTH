require('dotenv').config

const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const path = require('path')

const app = express()
const PORT = 3500

// application.x-www-form-urlencoded
app.use(express.urlencoded({ extended: true}))

// application/json response
app.use(express.json())

// middleware for cookies
app.use(cookieParser())

// static files
app.use('/static', express.static(path.join(__dirname, 'public')))


app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)})