const router = require('express').Router();
const userCtrl = require('../controllers/userCtrl');
const auth = require('../middleware/authentication');
// User routes
router.post('/signup', userCtrl.userSignUp);

router.post('/login',  userCtrl.userLogIn);

module.exports = router;