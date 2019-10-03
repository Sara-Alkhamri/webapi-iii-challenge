const express = 'express';

const router = express.Router();

const User = require('./userDb');
const Post = require('../posts/postDb')

router.post('/', (req, res) => {
    User.insert(user)
    .then(user => {
        res.status(201).json(user);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: 'Error Adding User'})
    })
});

router.post('/:id/posts', (req, res) => {

});

router.get('/', (req, res) => {

});

router.get('/:id', (req, res) => {

});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {

};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;
