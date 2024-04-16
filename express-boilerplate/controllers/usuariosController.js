const infoGeneral = require('../db/datos');
const datos = infoGeneral.usuarios

const controller = {
    login: function(req, res) {
    
        const userId = 1
        let usuarioEncontrado = datos[userId]

        

        
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
       
        const userId = 1

        const nuevoUsuario = datos[userId]

        
        datos.push(nuevoUsuario);

        
        res.render('register', { usuario: nuevoUsuario });
    },
    
};



    

module.exports = controller;