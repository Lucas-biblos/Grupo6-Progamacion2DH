const express = require('express')
const router = express.Router()
const usuariosController = require('../controllers/usuariosController')
const registerValidations = require("../middlewares/register-validator")


router.get('/profile/:id', usuariosController.profile)
router.get('/profile/edit/:id', usuariosController.profileEdit)
router.post('/profile/edit/:id', registerValidations, usuariosController.profileStore)





module.exports = router