const express = require("express");
const router = express.Router();
const productocontroller = require("../controllers/productoscontroller");
const { results } = require("../controllers/mainController");

router.get('/', productocontroller.index)

router.get('/productoagregado', productocontroller.agregarproductos)

module.exports = router