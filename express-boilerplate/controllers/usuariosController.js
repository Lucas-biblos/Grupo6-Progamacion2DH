const infoGeneral = require('../db/datos');
const datos = infoGeneral.usuarios

const controller = {
    login: function(req, res) {
    

        let usuarioEncontrado = datos[1]

        

        
            res.render('login', { usuario: usuarioEncontrado });
        
    },
    profile: function(req, res) {
        const userId = req.params.id
        let usuarioLogueado = datos[userId]
        res.render('profile', { usuario: usuarioLogueado });
    },
    profileEdit: function(req, res) {
       
        const userId = req.params.id
        let usuario = datos[userId]
       
        res.render('profile-edit', usuario);
    },

    register: function(req, res) {
       
        const nuevoUsuario = datos[1]

        
        datos.push(nuevoUsuario);

        
        res.render('register', { usuario: nuevoUsuario });
    },

};



    

module.exports = controller;