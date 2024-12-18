const express = require('express');
const UserController = require('../controllers/UserController.js');

const AuthVerification = require('../middlewares/AuthVerification.js');

const router = express.Router();



//Registration 
router.post('/Registration',UserController.Registration);

//Login
router.post('/Login', UserController.Login);


//SingleReadProfile
router.get('/SingleReadProfile',AuthVerification,UserController.SingleReadProfile);

//AllUserReadProfile
router.get('/AllUserReadProfile',UserController.AllUserReadProfile);

//SingleProfileUpdate
router.post('/SingleProfileUpdate',AuthVerification,UserController.SingleProfileUpdate);


//SingleUserDelete
router.get('/SingleUserDelete',AuthVerification,UserController.SingleUserDelete);



module.exports = router;