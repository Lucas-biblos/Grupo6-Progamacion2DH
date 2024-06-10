const express = require("express");
const router = express.Router();
const productocontroller = require("../controllers/productoscontroller");
const { results } = require("../controllers/mainController");
const productoController = require("../controllers/productoscontroller");
const createProductValidation = require('../middlewares/createProduct-validator')

router.get('/', productocontroller.index)

router.get('/productoagregado', productocontroller.agregarproductos)
router.post('/', createProductValidation, productoController.agregarproductos)

module.exports = router