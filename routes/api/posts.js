const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../../models/User');
const Post = require('../../models/Post');
// @route   GET api/posts
// @desc    Get posts
// @access  Public

router.get('/',(req,res) => {
  Post.find()
      .sort({date:-1})
      .then(posts => res.json(posts))
      .catch(err => res.status(404).json({error: "There are no posts"}));
})

