const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const routes = require("./routes/index.js");
const session = require("express-session");

//-----------MODELS---------------//
const { User } = require("./db")
//------AUTHENTICATE--------------//
const cookieParser = require("cookie-parser");
const passport = require("passport");
const bcrypt = require("bcrypt")
const LocalStrategy = require("passport-local").Strategy
const nodemailer = require('nodemailer');
//-------------------------------------------//

const server = express();
server.name = "API";

//-----------------------------------------------
//            LOCAL STRATEGY                    |
//-----------------------------------------------
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
    },(req, email, password, done) => {
        User.findOne({ email })
            .then(user => {
                if(!user) 
                    return done(null, false, { message: `usuario ${email} no encontrado` })
                else if (!bcrypt.compareSync(password, user.password))
                    return done(null, false, { message: 'la contraseña es incorrecta' })
                else return done(null, user.dataValues)
            })
    })
)

//-------------------------------------
//        SERIALIZAR USUARIO          |
//-------------------------------------
passport.serializeUser((user, done) => {
    return done(null, user.id)
})

  //-------------------------------------
  //        DESERIALIZAR USUARIO        |
  //-------------------------------------
passport.deserializeUser((id, done) => {
    User.findByPk(id)
        .then((user) => {
        return done(null, user.get())
    })
        .catch(err => done(err, false))
})


//-------------------------------//
//------------CORS---------------//
//-------------------------------//
server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:19006"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "HEAD, GET, POST, PATH, OPTIONS, PUT, DELETE");
    next();
});

//-------------------------------//
//---------MIDDLEWARES-----------//
//-------------------------------//
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(morgan("dev"));
server.use(cookieParser());
server.use(
    session({
        secret: "secreto",
        resave: false,
        saveUninitialized: false,
    })
);

//-----------------------------------------------
//           INICIALIZAR PASSPORT Y SESSION     |
//-----------------------------------------------
server.use(passport.initialize());
server.use(passport.session());


//-------------------------------//
//------MIDDLEWARES RUTAS--------//
//-------------------------------//
server.use("/", routes);


// Error catching endware.
server.use((err, req, res, next) => {
    // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    /* console.error(err); */
    res.status(status).send(message);
});


module.exports = server;