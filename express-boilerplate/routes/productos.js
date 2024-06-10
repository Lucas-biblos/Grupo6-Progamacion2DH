const express = require("express");
const router = express.Router();
const productocontroller = require("../controllers/productosController");
const { results } = require("../controllers/mainController");
const productoController = require("../controllers/productosController");
const createProductValidation = require('../middlewares/createProduct-validator')

router.get('/', productocontroller.index)

router.get('/productoagregado', productocontroller.agregarproductos)
router.post('/', createProductValidation, productoController.agregarproductos)



router.post('/delete/:id', productoController.delete);
router.get("/editMovie/:id", productoController.edit)
router.post("/update/:id", productoController.updateProd)

module.exports = router
