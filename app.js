const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const queries = require('./queries.js')
require('dotenv').config()

app.use(bodyParser.json())

const dbString = process.env.DATABASE_URL
mongoose.connect(dbString)
const database = mongoose.connection

database.on('error', (error) => {   //anytime there is an error, console log it
    console.log(error)
})

database.once('connected', () => {
    console.log('MongoDB Connected')
})

app.use(express.static(path.join(__dirname, '/public')))

app.get("/", (res, req) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

// route to create posts
app.post("/createpost", queries.createPost)

//route to get posts
app.get("/getposts", queries.getPosts)

//route to get one post
app.get("/getpost", queries.getPost)

// route to update a post
app.put("/editpost", queries.editPost)

// route to delete a post
app.delete("/deletePost", queries.deletePost)

app.listen(3000) 
console.log('Express is running and listening to port 3000')