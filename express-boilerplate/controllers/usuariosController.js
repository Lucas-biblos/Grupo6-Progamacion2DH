const infoGeneral = require('../db/datos');
const datos = info.usuarios

const controller = {
    login: function(req, res) {
        const usuario = req.query.usuario; // Obtiene el usuario del formulario
        const contraseña = req.query.contraseña; // Obtiene la contraseña del formulario

        let usuarioEncontrado = null;

        // Recorre la lista de usuarios para encontrar la coincidencia
        for (let i = 0; i < datos.length; i++) {
            const user = datos[i];
            if (user.email === usuario && user.password === contraseña) {
                usuarioEncontrado = user;
                break; // Sale del bucle cuando encuentra la coincidencia
            }
        }

        if (usuarioEncontrado) {
            // Si las credenciales son válidas, renderiza la vista de perfil con los datos del usuario
            res.render('profile', { usuario: usuarioEncontrado });
        } else {
            // Si las credenciales son inválidas, renderiza la vista de login con un mensaje de error
            res.render('error', { error: 'Credenciales incorrectas. Por favor, intenta nuevamente.' });
        }
    },
    profile: function(req, res){
        const id = req.params.id
        res.render('profile')
    },
    profileEdit: function(req, res){
        const id = req.params.id
        res.render('profileEdit')
    },
    register: function(req, res) {
        const email = req.query.email; // Obtiene el email del formulario
        const usuario = req.query.usuario; // Obtiene el usuario del formulario
        const contraseña = req.query.contraseña; // Obtiene la contraseña del formulario
        const fechaNacimiento = req.query.fechaNacimiento; // Obtiene la fecha de nacimiento del formulario
        const numeroDocumento = req.query.numeroDocumento; // Obtiene el número de documento del formulario
        const fotoPerfil = req.query.fotoPerfil; // Obtiene la foto de perfil del formulario

        // Crea un nuevo usuario con los datos del formulario
        const nuevoUsuario = {
            email: email,
            usuario: usuario,
            contraseña: contraseña,
            fechaNacimiento: fechaNacimiento,
            numeroDocumento: numeroDocumento,
            fotoPerfil: fotoPerfil
        };

        // Agrega el nuevo usuario a la lista de usuarios en la base de datos
        datos.push(nuevoUsuario);

        // Renderiza la vista de perfil con los datos del nuevo usuario
        res.render('profile', { usuario: nuevoUsuario });
    },

};

module.exports = usuariosController;

    
;

module.exports = controller;