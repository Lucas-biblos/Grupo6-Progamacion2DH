const infoGeneral = require('../db/datos');
const product = infoGeneral.product;
let comment = infoGeneral.comment;
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
            .then(function(results){
                return res.render('product-add', {title:"Add Product", usuarios: results});
            })
            .catch(function(error){
                console.log(error);
            });
    },

    store: function(req, res) {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            infoGeneral.productos.create(req.body)
            .then((result) => {
                return res.redirect("/product/id/" + result.id)
            }).catch((err) => {
              return console.log(err);
            });        
        } 
        else {

            return res.render('product-add', {title: "register", errors: errors.mapped(), old: req.body });        
        }
    },

    edit: (req, res) => {
        if (req.session.user == undefined) {
            res.redirect('/users/login');
        } else {
            let id = req.params.id;
            product.findByPk(id)
                .then((result) => {
                    let product = {
                        id: result.dataValues.id,
                        img: result.dataValues.img,
                        nombre: result.dataValues.nombre,
                        descripcion: result.dataValues.descripcion,
                        anio: result.dataValues.anio,
                        updatedAt: new Date(),
                        userId: result.dataValues.userId
                    };
                    console.log(result.img);
                    return res.render('product-edit', {
                        listaAutos: product,
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    },

    updateProd: (req, res) => {
        let info = req.body;
        let imgProductEdit = req.file.filename;
        let idEdit = req.params.id;
        console.log(imgProductEdit);
        let producto = {
            img: imgProductEdit,
            nombre: info.nombre,
            descripcion: info.descripcion,
            anio: info.anio,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        let filter = {
            where: {
                id: idEdit
            }
        };

        product.update(producto, filter)
            .then(result => res.redirect("/products/id/" + idEdit))
            .catch(err => res.send(err));
    },
    
    delete: (req, res) => {
        let idDelete = req.params.id;
        product.destroy({
            where: {
                id: idDelete
            }
        })
        .then(result => res.redirect('/'))
        .catch(err => console.log(err));
    },

    comments: (req, res) => {
        if (req.session.user == undefined) {
            res.redirect('/users/login');
        } else {
            let info = req.body;
            let userId = req.session.user.id;
            let prodId = req.params.id;
            let comentario = {
                comentarios: info.comentarios,
                productId: prodId,
                userId: userId,
                createdAt: new Date()
            };

            comment.create(comentario)
                .then(result => res.redirect('/products/id/' + prodId))
                .catch(err => console.log("Este es el error" + err));
        }
    }
}

module.exports = productoController;
