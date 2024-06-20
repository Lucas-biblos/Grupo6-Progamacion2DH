const db = require('../database/models')
const op = db.sequelize.op;
const { validationResult } = require("express-validator");
const { comentarios } = require('../db/datos');
const { comentario } = require('../middlewares/createProduct-validator');

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
        res.render('product-add', { title: "Agrega un Producto", usuario: db.usuarios });
    },
    
    create: function(req, res) {
        let errors = validationResult(req);

        let data = req.body

        let product = {
            imagen: data.imagen,
            producto: data.producto,
            descripcion: data.descripcion,
            usuario_id: req.session.user.id
        }

        if (errors.isEmpty()==false){        
            
            return res.render('product-add', { title: "register", errors: errors.mapped(), old: req.body });        
        }

        db.Product.create(product)
            .then((productCreado) => {
             
                return res.redirect(`/usuarios/profile/${req.session.user.id}`);
            })
            .catch(error => {
                console.log(error);
            })
    },

    formUpdate: function(req, res) {
        let form = req.body;

        let criterio = {
            include: [{ association: "user" }]
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
                    db.product.update(form, filtrado)
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
    },
    view: function (req, res) {
        let id = req.params.id;
        let asociaciones = {
            include: [
              {association: "user"},
              {association: "comments", 
                include: [{association: 'user'} 
                ]}
            ]
        };
        db.Product.findByPk(id, asociaciones)
        .then((producto) => {
            let currentproduct = producto.dataValues
            let currentcomentarios = currentproduct.comments.map(comentario=>comentario.dataValues)
            console.log(currentcomentarios)
            console.log (currentproduct)
            return res.render("product", {productos: currentproduct, comentarios: currentcomentarios});
        })
        .catch((err) => {
            console.log(err);
        });
    },
    viewProductEdit: function (req, res) {
        let id = req.params.id;
        db.Product.findByPk(id)
        .then((producto) => {
            let currentproduct = producto.dataValues
            console.log (currentproduct)
            return res.render("product-add", {productos: currentproduct});
        })
        .catch((err) => {
            console.log(err);
        });
    }
};

module.exports = productoController;
