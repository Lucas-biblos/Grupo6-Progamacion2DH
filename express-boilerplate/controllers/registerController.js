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
       console.log("validationErrors : ", validationErrors)
            
       if(!validationErrors.isEmpty()){
           return res.render("register",{
               errors: validationErrors.mapped(),
               oldData:req.body
           })
       }
       const user = {
           name: req.body.name,
           email: req.body.email,
           usuario : req.body.usuario,
           fecha: req.body.fecha,
           DNI: req.body.dni,
           foto: req.body.fecha,
           password: bcrypt.hashSync(req.body.password, 10),
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
