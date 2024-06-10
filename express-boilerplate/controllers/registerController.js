const bcrypt = require('bcryptjs');
const db = require('../database/models');
const { validationResult } = require("express-validator");
const op = db.Sequelize.Op;



let registerController = {
    index: function(req, res){
        res.send("Hola")
    }
};
module.exports = registerController;