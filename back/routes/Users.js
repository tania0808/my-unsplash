const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');


const router = require('express').Router();
const userCtrl = require('../controllers/userCtrl');

// User routes
router.post('/signup', userCtrl.userSignUp);

router.post('/login', userCtrl.userLogIn);

module.exports = router;










module.exports = router;