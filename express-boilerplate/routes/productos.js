const express = require("express");
const router = express.Router();
const { results } = require("../controllers/mainController");
const productoController = require("../controllers/productoscontroller");
const createProductValidation = require('../middlewares/createProduct-validator')

router.get('/', productoController.index)

router.get('/productoagregado', productoController.agregarproductos)
router.post('/', createProductValidation, productoController.agregarproductos)
router.get('/create', productoController.create);
router.post('/delete/:id', productoController.destroy);
router.get("/edit/:id", productoController.update);
router.post("/update/:id", productoController.formUpdate);
//revisar las rutas y los metodos .post y .get usados

module.exports = router
