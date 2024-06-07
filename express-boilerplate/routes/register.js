const express = require("express");
const router = express.Router();
const registerController = require("../controllers/registerController");
const registerValidations = require("../middlewares/register-validator")



router.get('/', registerController.index);
router.post('/', registerValidations, registerController.store);


module.exports = router