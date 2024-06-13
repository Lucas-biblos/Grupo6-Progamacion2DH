const infoGeneral = require('../db/datos');
const { validationResult } = require("express-validator");

const productoController = {
    index: function(req, res) {
        res.render('product', { title: "Detalle de producto", productos: infoGeneral.productos, comentarios: infoGeneral.comentarios });
    },
   
    agregarproductos: function(req, res) {
        res.render('product-add', { title: "Agrega un Producto", usuario: infoGeneral.usuarios });
    },
    
    create: function(req, res) {
        let id = req.params.id;
        infoGeneral.usuarios.findByPk(id)
            .then(function(results) {
                return res.render('product-add', { title: "Add Product", usuarios: results });
            })
            .catch(function(error) {
                console.log(error);
            });
    },

    store: function(req, res) {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            infoGeneral.productos.create(req.body)
                .then((result) => {
                    return res.redirect("/product/id/" + result.id);
                })
                .catch((err) => {
                    console.log(err);
                });        
        } else {
            return res.render('product-add', { title: "register", errors: errors.mapped(), old: req.body });        
        }
    },

    formUpdate: function(req, res) {
        let form = req.body;

        let criterio = {
            include: [{ association: "User" }]
        };

        db.Producto.findByPk(form.id, criterio)
            .then(function(results) {
                return res.render('product-edit', { title: `Editar el producto ${results.nombreProd}`, productos: results });
            })
            .catch((err) => {
                console.log(err);
            });
    },

    update: function(req, res) {
        let form = req.body;
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            let filtrado = {
                where: { id: form.id }
            };

            if (req.session.user != undefined) {
                let id = req.session.user.id;
                if (form.idUsuario == id) {
                    db.Producto.update(form, filtrado)
                        .then((result) => {
                            return res.redirect("/product/id/" + form.id);
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                } else {
                    return res.redirect("/users/profile/id/" + id);
                }
            } else {
                return res.redirect("/users/login");
            }
        } else {
            let criterio = {
                include: [{ association: "usuario" }]
            };

            db.Producto.findByPk(form.id, criterio)
                .then(function(results) {
                    return res.render('product-edit', { title: "Edit Product", errors: errors.mapped(), old: req.body, productos: results });
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    },

    destroy: function(req, res) {
        let form = req.body;
        
        let filtrado = {
            where: { id: form.id }
        };

        if (req.session.user != undefined) {
            let id = req.session.user.id;
            if (form.idUsuario == id) {
                db.Producto.destroy(filtrado)
                    .then((result) => {
                        return res.redirect("/");
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } else {
                return res.redirect("/users/profile/" + id);
            }
        } else {
            return res.redirect("/users/login");
        }        
    }
};

module.exports = productoController;
