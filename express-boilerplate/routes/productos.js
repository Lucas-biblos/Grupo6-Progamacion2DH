const express = require("express");
const router = express.Router();
const productocontroller = require("../controllers/productoscontroller")

router.get('/', productocontroller.index)
router.get('/productoagregado', productocontroller.agregarproductos)

module.exports = router