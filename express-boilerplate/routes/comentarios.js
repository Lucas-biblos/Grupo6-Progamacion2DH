const express = require("express");
const router = express.Router();
const { results } = require("../controllers/mainController");
const createProductValidation = require('../middlewares/createProduct-validator');
const comentariosController = require("../controllers/comentariosController");

//router.get('/', productoController.index)

//router.get('/productoagregado', productoController.agregarproductos)
router.post('/create/:productId',createProductValidation.comentario, comentariosController.create);
//router.post('/delete/:id', productoController.destroy)
//router.post('/:id', createProductValidation.creaciondeproducto, productoController.agregarproductos)
//router.get ("/:id", productoController.view)
//router.get ("/:id/edit", productoController.viewProductEdit)


module.exports = router