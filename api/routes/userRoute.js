const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// we will provide controolers to the routes
router.get('/user',userController.getUsers);
router.post('/user',userController.createUsers);

module.exports = router;


