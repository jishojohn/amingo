const express = require('express')
const Post = require('../models/Post')

const router = express.Router();

/**
 * Post route for register a new user
 * 
 * @name POST /users/regiser
 * 
 * @param {string} message - password
 * @param {string} email - password of the user

 */

    router.post('/posting', (req, res) =>{
        const newPost = new Post({
   
        message: req.body.message,
        email: req.body.email
        
    })

    newPost
        .save()
        .then(post=> {
            res.json(post)
        })
        .catch(err=> {
            res.json(err)
        })
});

 

router.get('/',(req,res)=>{
    Post.find()
    .then(posts=>res.json(posts))
    .catch(err=>res.json(err));
});


module.exports = router;