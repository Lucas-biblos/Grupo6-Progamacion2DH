const db = require('../database/models')
const op = db.sequelize.op;
const { validationResult } = require("express-validator");

const productoController = {
    index: function(req, res) {
        let id = req.params.id;
        let asociaciones = {
            include: [
              {association: "user"},
              {association: "comments", 
                include: [{association: 'user'} 
                ]}
            ]
        }

        let condition = false;

        db.Product.findByPk(id, asociaciones)
        .then(function(results){

            if (req.session.user != undefined && req.session.user.id == results.usuario.id) {
                condition = true;
            }
            //revisar la linea 26, creo que estan mal los nombres
            return res.render('product', {title:"Product", productos: results, comentarios: results.comments, condition: condition});
        })
        .catch(function(error){
            console.log(error);
        });
    },

    agregarproductos: function(req, res) {
        res.render('product-add', { title: "Agrega un Producto", usuario: db.User });
    },
    
    create: function(req, res) {
        if (req.session.user != undefined) {
            return res.render('product-add', { title: "Add Product" });
        } else {
            return res.redirect("/login");
        }
    },
    

    store: function(req, res) {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            db.Product.create(req.body)
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
            include: [{ association: "user" }]
        };

        db.Product.findByPk(form.id, criterio)
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
                    db.product.update(form, filtrado)
                        .then((result) => {
                            return res.redirect("/product/id/" + form.id);
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                } else {
                    return res.redirect("/profile/id/" + id);
                }
            } else {
                return res.redirect("/login");
            }
        } else {
            let criterio = {
                include: [{ association: "user" }]
            };

            db.Product.findByPk(form.id, criterio)
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
                db.Product.destroy(filtrado)
                    .then((result) => {
                        return res.redirect("/");
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } else {
                return res.redirect("/profile/" + id);
            }
        } else {
            return res.redirect("/login");
        }        
    }
};

module.exports = productoController;
