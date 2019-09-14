const User = require('../models/User')
const Post=require('../models/Post')
const express=require('express')
const router = express.Router();

/**
 * Post route for register a new user
 *  @name POST /users/regiser
 * @param {string} email - email of the user
 * @param {string} password - password of the user
 * @param {name} name - name of the user
 */
router.post('/posting', (req, res) => {
    console.log(req.body.email);
        User
        .findOne({email:req.body.email})
        .then(user=>{
            if(user)
            {
                console.log(user);
                const newPost = new Post({ 
                 email:  req.body.email,     
                message: req.body.message
                })
                newPost
                .save()
                .then(post => {
                 res.json(post)
                })
                .catch(err => {
                    res.json(err)
                })
            }
            else 
            {

                
            }
        })
});
router.get('/', (req, res) => {
    Post.find()
        .then(posts => res.json(posts))
        .catch(err => res.json(err));
});


module.exports = router;