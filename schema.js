const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    // commentid: {
    //     require: true  // this isn't needed id will be generated !
    //     type: Number
    // },
    username: {
        require: true,
        type: String
    },
    content: {
        require: true,
        type: String
    },
    timestamp: {
        require: true,
        type: String
    }
})

const postsSchema = new mongoose.Schema({
    // userid: {            // we'll create a user table using postgressql and will plug it in later??
    //     required: true, 
    //     type: String
    // },
    username: {
        required: true, 
        type: String
    },
    image: {
        required: true, 
        type: String
    },
    caption: {
        required: false, 
        type: String
    },
    likes: {
        required: false,
        type: [String]  //changed to an array of strings to hold userid instead of Number since user id will be generated by user table in sql, which may include letters 
    },
    comments: {
        require: false,
        type: [commentSchema] 
    },
    timestamp: {
        required: true, 
        type: Number
    }   
})

module.exports = mongoose.model('Posts', postsSchema)
