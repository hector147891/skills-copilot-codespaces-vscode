// Create Web Server using Express
// Create a new file called comments.js. This file will contain the code to handle the comments API.

// Import the Express module
const express = require('express');

// Create a new Router
const router = express.Router();

// Import the Comment model
const Comment = require('../models/Comment');

// GET /comments
// This route will return all the comments
router.get('/', async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.status(400).json(error);
  }
});

// POST /comments
// This route will create a new comment
router.post('/', async (req, res) => {
  try {
    const comment = new Comment(req.body);
    const result = await comment.save();
    res.json(result);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Export the router
module.exports = router;