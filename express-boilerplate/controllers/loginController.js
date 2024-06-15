const db = require("../database/models");
const { validationResult } = require("express-validator");
console.log(validationResult)
console.log("express-validator: ",require("express-validator"));
const op = db.Sequelize.Op;

let loginController = {
    index: function(req, res){
        return res.render('login');
    },
    login: function(req, res){ 
        const validationErrors = validationResult(req);
        console.log("validationErrors : ", validationErrors)      
        if(!validationErrors.isEmpty()){
            return res.render("login",{
                errors: validationErrors.mapped(),
                oldData:req.body
            })
        } 
        db.User.findOne({
            where: [{email: req.body.email}]
        })
        .then( function ( user ) {
            req.session.user = user;          
            if(req.body.rememberme != undefined){
                res.cookie('userId', user.id, { maxAge: 1000 * 60 * 100})
            }
            return res.redirect('/');            
        })
        .catch( function(e) {
            console.log(e)
        })
    },
    logout: function(req,res){
        req.session.destroy();
        res.clearCookie('userId');
        return res.redirect('/')
    }
    
}

module.exports = loginController;