const dbDos = require('../db/datos');
const db = require("../database/models")
const product = db.Product
const op = db.sequelize.op;
const { Op } = require('sequelize');


const indexController = {
    index: function (req, res) {
        product.findAll({
            include: [
                {
                    association: 'user'
                },
                {
                    association: 'comments'
                }
            ],
            order: [['created_at', 'ASC']]
        }).then(function (productos) {
            res.render("index", { productos: productos });
        })
            .catch(function (error) {
                console.error("Error al obtener productos:", error);
                res.status(500).send("Error al obtener productos");
            });
    },
    results: function (req, res) {
        console.log(req.body)
        db.Product.findAll({
            include: [
                {
                    association: 'user'
                },
                {
                    association: 'comments'
                }
            ],
            where: {
                [Op.or]: [
                    {
                        producto: {
                            [Op.like]: `%${req.body.search || ""}%`
                        }
                    },
                    {
                        descripcion: {
                            [Op.like]: `%${req.body.search || ""}%`
                        }
                    }
                ]
            },
            order: [['created_at', 'ASC']]
        }).then(function (productos) {
            console.log(productos)
            //res.render("index", { productos: productos });
            res.render('search-results', { productos: productos, 
                esVacio: productos.length ==0 })
        })
            .catch(function (error) {
                console.error("Error al obtener productos:", error);
                res.status(500).send("Error al obtener productos");
            });
    },
    resultsLogueado: function (req, res) {
        res.render('search-resultsLogueado', { productos: dbDos.productos, comentarios: dbDos.comentarios })
    }
}




module.exports = indexController;