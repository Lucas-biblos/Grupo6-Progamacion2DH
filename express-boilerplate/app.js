const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
//Include your routes here


const app = express();
const usuariosRouter = require('./routes/usuarios');
const { productos } = require("./db/datos");
const productosRouter = require("./routes/productos")
const loginRouter = require("./routes/login")
const registerRouter = require("./routes/register")

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(session(
  { secret:'grupo6',
    resave: false,
    saveUninitialized: true }
));


app.use(function(req, res, next){
  if(req.session.user != undefined){
    res.locals.user = req.session.user;
    return next();
  } 
  return next();  
})


app.use(function(req, res, next){

  if(req.cookies.userId != undefined && req.session.user == undefined){
    let idDeLaCookie = req.cookies.userId;
    
    db.User.findByPk(idDeLaCookie)
    .then( user => {
     
      req.session.user = user; 
      res.locals.user = user; 
      return next();
    })
    .catch( e => {console.log(e)})
  } else {
    //Si no tengo cookie quiero que el programa continue
    return next();
  }

})

app.use("/", indexRouter);
app.use("/usuarios", usuariosRouter);
app.use("/productos", productosRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter)

// Use your routes here

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
