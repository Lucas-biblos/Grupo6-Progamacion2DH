const dbDos = require('../db/datos');
const db = require("../database/models")
const product = db.Product



const indexController = {
    index: function(req, res) {
        product.findAll({
            include: [
                {
                    association: 'user'
                },
                {
                    association: 'comments'
                }
            ],
            order: [['created_at', 'DESC']]
        }).then(function(productos) {
            console.log(productos)
            res.render("index", { productos: productos });
        })
        .catch(function(error) {
            console.error("Error al obtener productos:", error);
            res.status(500).send("Error al obtener productos");
        });
    },
    results:  function(req, res){
        res.render('search-results', {productos: dbDos.productos,comentarios: dbDos.comentarios} )
    },
    resultsLogueado:  function(req, res){
        res.render('search-resultsLogueado', {productos: dbDos.productos,comentarios: dbDos.comentarios} )
    }
}  




module.exports = indexController;