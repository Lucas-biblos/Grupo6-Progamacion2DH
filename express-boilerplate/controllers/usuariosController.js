const infoGeneral = require('../db/datos');
const datos = infoGeneral.usuarios

const controller = {
    profile: function(req, res) {
        const userId = req.params.id
        let usuarioLogueado = datos[userId]
        res.render('profile', { usuario: usuarioLogueado });
    },
    profileEdit: function(req, res) {
       
        const userId = req.params.id
        let usuario = datos[userId]
       
        res.render('profile-edit', usuario);
    }
};



    

module.exports = controller;