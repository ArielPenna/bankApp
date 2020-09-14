const estaAutenticado = require("../../Suppliers/authenticateFunction")
const server = require("express").Router();
const bcrypt = require("bcrypt");
const passport = require("passport");
const { User, Wallet, Account, Location } = require("../../db.js");


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
        password,
        access,
        //--VVVVVVV---------Wallet
        type,
        balance,
        currency,
        //--VVVVVVV---------Location
        address,
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
            Account.create({  // creacion de cuenta bancaria
                userId: user.dataValues.id 
            })
            return user // pasamanos de usuario
        })
        .then(user => {
            Wallet.create({ // creacion de billetera
                type,
                balance,
                currency,
                userId: user.dataValues.id
            })
            return user // pasamanos de usuario
        })
        .then(user => res.send(user))
        .catch(err => {
            if (err.name === "SequelizeUniqueConstraintError") 
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
    res.send(req.user);
})

//-------------------------------------
//           RUTA LOGOUT               |
//-------------------------------------
server.post("/logout", estaAutenticado, (req, res) => {
    req.logout();
    res.send("se deslogueo");
});

//-------------------------------------
//       RUTA GET USER LOGUEADO       |
//-------------------------------------
server.get("/me", estaAutenticado, function (req, res) {
    User.findByPk(req.user.id,
        {include: [
            { model: Wallet },
            { model: Account }
        ]})
        .then(user => res.send(user))
        .catch(err => res.send(err))
});


module.exports = server;