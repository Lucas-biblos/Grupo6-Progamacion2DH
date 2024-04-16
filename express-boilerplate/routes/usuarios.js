const express = require('express')

const router = express.Router()

const usuariosController = require('../controllers/usuariosController')

router.get('/login', usuariosController.login)

router.get('/register', usuariosController.register)

router.get('/profile/:id', usuariosController.profile)

router.get('/profile/edit/:id', usuariosController.profileEdit)



module.exports = router