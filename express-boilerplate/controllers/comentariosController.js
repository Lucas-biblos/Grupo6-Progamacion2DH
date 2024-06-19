const db = require('../database/models')
const op = db.sequelize.op;
const { validationResult } = require("express-validator");
const { comentarios } = require('../db/datos');
const { comentario } = require('../middlewares/createProduct-validator');

const comentariosController = {
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
    
    create: function(req, res) {
        let id = req.params.productId;
        let userId = req.session.user.id;
        //db.Product.findByPk(id)
        const comentario = {texto_comentario: req.body.comentario, id_producto: id,
        usuario_id: userId}
        db.Comment.create(comentario)
        
            .then(function(results) {
                 return res.redirect (`/productos/${id}`)})
             .catch(function(error) {
                 console.log(error);
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
   
};

module.exports = comentariosController;
