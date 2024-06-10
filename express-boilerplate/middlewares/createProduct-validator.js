const { body } = require("express-validator")
const db = require("../database/models")
const bcryptjs = require('bcryptjs');

const createProductValidation = [
    body("imagen")
        .notEmpty()
        .withMessage("Debes cargar una imagen")
        .bail(),
    body("nombre")
        .notEmpty()
        .withMessage("Debes completar este campo con un nombre")
        .bail()
        .isLength({ max: 20 }),
    body("descrpicion")
        .notEmpty()
        .withMessage("Debes poner una descripcion")
        .bail()
]

module.exports = createProductValidation