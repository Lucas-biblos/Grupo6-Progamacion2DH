const express = require("express");
const router = express.Router();
const { results } = require("../controllers/mainController");
const productoController = require("../controllers/productoscontroller");
const createProductValidation = require('../middlewares/createProduct-validator')

router.get('/', productoController.index)

router.get('/productoagregado', productoController.agregarproductos)
router.post('/', createProductValidation, productoController.agregarproductos)
router.get('/create', productoController.create);
router.post('/delete/:id', productoController.delete);
router.get("/edit/:id", productoController.edit);
router.post("/update/:id", productoController.updateProd);
router.post('/delete/:id', productoController.delete)

module.exports = router
