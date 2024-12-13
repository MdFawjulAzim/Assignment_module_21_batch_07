const express = require('express');
const UserController = require('../controllers/UserController.js');


const router = express.Router();



//User
router.post('/Registration',UserController.Registration);





module.exports = router;