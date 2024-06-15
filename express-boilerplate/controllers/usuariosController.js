const db = require("../database/models");
const { validationResult } = require("express-validator");
const bcrypt = require('bcryptjs'); // Asegúrate de requerir bcrypt para el hash de contraseñas
const op = db.Sequelize.Op;

const controller = {
    profile: function(req, res) {
        const userId = req.params.id; // Se agregó la definición de userId
        db.User.findByPk(userId, {
            include: [
                {
                    model: db.Product ,
                    required: true ,
                    association: 'products',
                    order: [['created_at', 'DESC']]
                },
                {
                    model: db.Comment ,
                    required: true ,
                    association: 'comments',
                    order: [['created_at', 'DESC']]
                }
            ]
        })
        .then(function(user) {
            console.log(user.dataValues)
            const cantidadProductos = user.dataValues.products.length;
            const cantidadComentarios = user.dataValues.comments.length; // Corregido el typo de 'lenght' a 'length'
            console.log("hola")
            const currentProducts = user.dataValues.products.map(function(product) {return product.dataValues} )
            console.log(currentProducts)
            res.render('profile', {
                usuario: user.dataValues,
                cantidadProductos: cantidadProductos,
                cantidadComentarios: cantidadComentarios,
                productos: currentProducts
            });
        })
        .catch(function(e) {
            console.log(e);
            res.status(500).send('Error al cargar el perfil');
        });
    },
    register: function(req, res, next) {
        if (req.session.user != undefined) {
            return res.redirect("/users/profile/" + req.session.user.id); 
        } else {
            return res.render('register', { title: "Register" });
        }
    },
    profileEdit: function(req, res) {
        const userId = req.params.id;
        db.User.findByPk(userId)
        .then(function(user) {
            res.render('profile-edit', { usuario: user });
        })
        .catch(function(e) {
            console.log(e);
            res.status(500).send('Error al cargar la edición del perfil');
        });
    },
    profileStore: function(req, res) {
        const userId = req.params.id;
        const validationErrors = validationResult(req); // Se agregó la definición de validationErrors

        if (!validationErrors.isEmpty()) {
            return res.render("profile-edit", {
                errors: validationErrors.mapped(),
                oldData: req.body
            });
        }

        const user = {
            email: req.body.email,
            usuario: req.body.usuario,
            fecha: req.body.fecha,
            DNI: req.body.dni,
            foto: req.body.foto, // Corregido a foto en lugar de fecha
            password: bcrypt.hashSync(req.body.password, 10)
        };

        db.User.update(user, {
            where: {
                id: userId
            }
        })
        .then(function() {
            return res.redirect(`/usuarios/profile/${userId}`); 
        })
        .catch(function(err) {
            console.log("Error al guardar el usuario", err);
            res.status(500).send('Error al guardar el usuario');
        });
    }
};

module.exports = controller;

