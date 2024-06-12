const { body } = require("express-validator")
const db = require("../database/models")
const bcryptjs = require('bcryptjs');

const createProductValidation = {
    creaciondeproducto:[
    body("imagen")
        .notEmpty()
        .withMessage("Debes cargar una imagen")
        .bail(),
    body("nombre")
        .notEmpty()
        .withMessage("Debes completar este campo con un nombre")
        .bail()
        .isLength({ max: 20 }),
    body("descripcion")
        .notEmpty()
        .withMessage("Debes poner una descripcion")
        .bail()
],
comentario: [
    body('comentario')
        .notEmpty()
        .withMessage('El comentario no puede no tener nada.')
        .bail()
        .isLength({ min: 8 })
        .withMessage('El comentario debe tener al menos 8 letras.')
]
};

module.exports = createProductValidation