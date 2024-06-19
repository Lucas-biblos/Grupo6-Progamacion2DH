const { body } = require("express-validator")
const db= require("../database/models")
const bcryptjs = require('bcryptjs');

const loginValidations = [
    body("email")
        .notEmpty()
        .withMessage("Debes completar tu Email")
        .bail()
        .isEmail()
        .withMessage("Debes escribir un formato de correo valido")
        .custom(function(value, {req}){
            console.log(req, value)
            return db.User.findOne({
                where: {email:value}
            })
            .then(function(userToLogin){
                console.log(userToLogin, "usuario")
                if(!userToLogin){
                    throw new Error("No existe un usuario con ese email")
                }
            })
        }
    ),
    body("contraseña")
        .notEmpty()
        .withMessage("Debes Introducir un password")
        .custom(function(value, {req}){
            return db.User.findOne({
                where: {email:req.body.email}
            })
            .then(function(user){
                if(user){
                    const password = user.password;
                    console.log(value, "=>" ,password)
                    const passwordOk= bcryptjs.compareSync(value,password);
                   // const passwordOk = value==password ;
                    if(!passwordOk){
                        throw new Error("Contraseña incorrecta")
                    }                    
                }
            })
        })
        

]

module.exports = loginValidations;