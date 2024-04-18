const db = require('../db/datos');


const indexController = {
    index: function(req, res) {
        res.render('index', {productos: db.productos,comentarios: db.comentarios});
    }
}  




module.exports = indexController;