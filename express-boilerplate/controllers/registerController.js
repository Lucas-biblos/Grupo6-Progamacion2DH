const bcrypt = require('bcryptjs');
const db = require('../database/models');
const { validationResult } = require("express-validator");
const op = db.Sequelize.Op;


let registerController = {
   index: function (req, res) {
       //Mostrar el formulario de registro
       return res.render('register');
   },
   store: function (req, res) {
       const validationErrors = validationResult(req);
            
       if(!validationErrors.isEmpty()){
           return res.render("register",{
               errors: validationErrors.mapped(),
               oldData:req.body
           })
       }
       console.log(req.body)
       const user = {
           email: req.body.email,
           usuario : req.body.usuario,
           fecha: req.body.fecha,
           DNI: req.body.dni,
           foto: req.body.foto,
           password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
       };
       //creamos el usuario
       db.User
           .create(user)
           .then(function (user) {
               return res.redirect("/login");
           })
           .catch(function (err) {
               console.log("Error al guardar el usuario", err);
           });
   },


};
module.exports = registerController;
