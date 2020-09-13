const server = require("express").Router();
const bcrypt = require("bcrypt");
const passport = require("passport");
const { User, Wallet } = require("../../db.js");


//-------------------------------------
//           CREAR USUARIO            |
//-------------------------------------
server.post('/register', (req, res) => {
    const { //me traigo todos los valores del usuario
        firstName,
        lastName,
        email,
        documentType,
        documentNumber,
        birth,
        phoneNumber,
        address,
        password,
        access,
        //--VVVVVVV---------Wallet
        type,
        balance,
        currency
    } = req.body;
    // enctriptar contraseña
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    User.create({
        firstName, 
        lastName,
        email,
        documentType,
        documentNumber,
        birth,
        phoneNumber,
        password: hash,
        address,
        access
    })
        .then(user => {
            Wallet.create({
                type,
                balance,
                currency,
                userId: user.getDataValue('id')
            }).catch(err => res.send(err))
            res.send(user)
        })
        .catch(err => {
            if (err.parent && err.parent.code === "23505") 
                return res.send('el usuario ya existe')
            if (err.name === 'SequelizeValidationError') 
                return res.send('el usuario tiene que ser mayor de 16')
            return res.send(err)
        })
})

//-------------------------------------
//           RUTA LOGIN               |
//-------------------------------------
server.post('/login', passport.authenticate("local"), (req, res) => {
    res.send(req.user.id);
})

//-------------------------------------
//           RUTA LOGOUT               |
//-------------------------------------
server.get("/logout", estaAutenticado, (req, res) => {
    req.logout();
    res.send("se deslogueo");
});

//-------------------------------------
//       RUTA GET USER LOGUEADO       |
//-------------------------------------
server.get("/me", estaAutenticado, function (req, res) {
    User.findByPk(req.user.id,
        {include: [
            { model: Wallet }
        ]})
        .then(user => res.send(user))
        .catch(err => res.send(err))
});


//-------------------------------------
//      FUNCION AUTENTICAR USUARIO    |
//-------------------------------------
function estaAutenticado(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(401).send("no esta autenticado");
    }
}



module.exports = server;