const {body} = requiere("express-validator");
const bcrypt = require('bcryptjs');
const db = require('../database/models');

const registerValidations = [
    body("email")
        .notEmpty()
        .withMessage("Debes completar tu email")
        .bail()
        .isEmail()
        .withMessage("Debes escribir un correo valido")
        .custom(function(value, {req}){
            console.log("value: ", value);
            return db.User.findOne({
                where: {email: value}
            })
            .then(function(userToDataBase){
                if(userToDataBase){
                    throw new Error("El usuario ya existe")
                }
            })
        }),
    body("password")
        .notEmpty()
        .withMessage("Debes completar tu contraseña")
        .bail()
        .isLengt({min: 5}),
    body("retypePassword")
        .notEmpty()
        .withMessage("Debes completar tu contraeña otra vez")
        .custom(function(value, {req}){
            console.log("value: ", value);
            if (value !== req.body.password) {
                throw new Error("Las contraseñas no coinciden");
            }
            return true;
        })

        


]



module.exports = registerValidations ;