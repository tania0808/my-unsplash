const router = require('express').Router();
const photoCtrl = require('../controllers/photoCtrl');
const auth = require('../middleware/authentication');

// User routes
router.post('/', auth,  photoCtrl.addPhoto);
router.get('/', auth,  photoCtrl.getAllphotos);
router.delete('/', auth,  photoCtrl.deletePhoto);



module.exports = router;