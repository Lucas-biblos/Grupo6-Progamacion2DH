const infoGeneral = require('../db/datos');

const productoController = {
    index: function(req, res) {
        res.render('product', {title: "Detalle de producto", productos: infoGeneral.productos});
    },
   
    create: function(req, res) {
        res.render('product-add', {title: "Agrega un Producto", usuario: infoGeneral.usuario});
    }
}




module.exports = productoController;