const infoGeneral = require('../db/datos');

const productoController = {
    index: function(req, res) {
        res.render('product', {title: "Detalle de producto", productos: infoGeneral.productos, comentarios: infoGeneral.comentarios});
    },
   
    agregarproductos: function(req, res) {
        res.render('product-add', {title: "Agrega un Producto", usuario: infoGeneral.usuarios});
    }
}




module.exports = productoController;