const Model = require('./schema.js')

//      functions for post routes:

// create posts
async function createPost(req, res) {
    const post = new Model({
        // userid: req.body.userid,
        username: req.body.username,
        image: req.body.image,
        caption: req.body.caption,
        timestamp: Date.now()
    })
    const savePost = await post.save()
    res.status(200).json(savePost)
}
// get posts
async function getPosts(req, res) {
    const post = await Model.find() 
    res.status(200).json(post)  
}
// get one post
async function getPost(req, res) {
    const postId = req.body.postid
    const post = await Model.findById(postId)
    res.status(200).json(post)
}
 // update post
async function editPost(req, res) {
    const postId = req.body.postId
    const newPost = req.body
    const options = {new: true}
    const post = await Model.findByIdAndUpdate(postId, newPost, options)
    
    res.status(200).json(post)
}
// delete post
async function deletePost(req, res) {
    const postId = req.body.postId
    const post = await Model.findByIdAndDelete(postId)
    res.status(200).send(`Post with id ${postId} was deleted.`)
}

// functions for comment routes

module.exports = {
    createPost,
    getPosts,
    getPost,
    editPost,
    deletePost
}