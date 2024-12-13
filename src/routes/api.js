const express = require('express');
const UserController = require('../controllers/UserController.js');


const router = express.Router();



//Registration 
router.post('/Registration',UserController.Registration);

//Login
router.post("/Login", UserController.Login);





module.exports = router;