const router = require('express').Router();
const photoCtrl = require('../controllers/photoCtrl');
const auth = require('../middleware/authentication');

// User routes
router.post('/', auth,  photoCtrl.addPhoto);


module.exports = router;