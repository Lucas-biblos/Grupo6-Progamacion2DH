const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const loginValidations = require("../middlewares/login-validator")


router.get('/', loginController.index);
router.post('/', loginValidations,  loginController.login);
router.post('/logout', loginValidations, loginController.logout);


module.exports = router;

