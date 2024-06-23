const express = require('express');
const router = express.Router();
const { addUser, getUser } = require('../controllers/userController');

// @route   POST api/users
// @desc    Add a user
// @access  Public
router.post('/users', addUser);

// @route   GET api/users/:id
// @desc    Get a user by ID
// @access  Public
router.get('/users/:id', getUser);

module.exports = router;
