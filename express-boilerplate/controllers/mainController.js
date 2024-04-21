const db = require('../db/datos');


const indexController = {
    index: function(req, res) {
        res.render('index', {productos: db.productos,comentarios: db.comentarios});
    },
    results:  function(req, res){
        res.render('search-results', {productos: db.productos,comentarios: db.comentarios} )
    },
    resultsLogueado:  function(req, res){
        res.render('search-resultsLogueado', {productos: db.productos,comentarios: db.comentarios} )
    }
}  




module.exports = indexController;