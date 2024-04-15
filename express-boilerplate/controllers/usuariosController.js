const infoGeneral = require('../db/datos');
const datos = infoGeneral.usuarios

const controller = {
    login: function(req, res) {
        const usuario = req.query.usuario; // Obtiene el usuario del formulario
        const contraseña = req.query.contraseña; // Obtiene la contraseña del formulario

        let usuarioEncontrado = null;

        // Recorre la lista de usuarios para encontrar la coincidencia
        for (let i = 0; i < datos.length; i++) {
            const user = datos[i];
            if (user.usuario === usuario && user.password === contraseña) {
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
    profile: function(req, res) {
        const userId = req.params.id; // Obtener el id del usuario desde la URL
        let usuarioLogueado;
        for (let i = 0; i < datos.length; i++) {
            if (datos[i].id === userId) {
                usuarioLogueado = datos[i];
                break;
            }
        }

        res.render('profile', { usuario: usuarioLogueado });
    },
    profileEdit: function(req, res) {
        // Obtener el ID del usuario desde la URL
        const userId = req.params.id;
    
        // Obtener los datos del formulario
        const email = req.query.email;
        const usuario = req.query.usuario;
        const contraseña = req.query.contraseña;
        const fechaNacimiento = req.query.fechaNacimiento;
        const numeroDocumento = req.query.numeroDocumento;
        const fotoPerfil = req.query.fotoPerfil;
    
        // Actualizar los datos del usuario en la base de datos (datos.js)
        for (let i = 0; i < datos.length; i++) {
            if (datos[i].id === userId) {
                datos[i].email = email;
                datos[i].usuario = usuario;
                datos[i].contraseña = contraseña;
                datos[i].fecha = fechaNacimiento;
                datos[i].dni = numeroDocumento;
                datos[i].foto = fotoPerfil;
                break;
            }
        }
    
        // Renderizar la vista del perfil con los datos actualizados
        res.render('profile', { usuario: datos[userId] });
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
        res.render('register', { usuario: nuevoUsuario });
    },

};



    

module.exports = controller;