const estaAutenticado = require("../../Suppliers/authenticateFunction")
const server = require("express").Router();
const bcrypt = require("bcrypt");
const passport = require("passport");
const { User, Wallet, Account, Location } = require("../../db.js");

const characters = "abcdefghijkmnpqrtuvwxyzABCDEFGHJKMNPQRTUVWXYZ1234567890";

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
        .then(async (user) => {
            do {
                let code = '' // genero un codigo VVV
                for (i=0; i<10; i++) code += characters.charAt(Math.floor(Math.random() * characters.length));
                // lo busco para asegurarme de que no se repita
                const existe = await Account.findByPk(code)
                // si no existe lo creo
                if(!existe){
                    Account.create({  // creacion de cuenta bancaria
                        accountId: code,
                        userId: user.dataValues.id 
                    })
                    return user // pasamanos de usuario
                }
                // si si existe itero
            } while(true)
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
    console.log("/login",req.user);
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
    console.log("/me",req.user);
    User.findByPk(req.user.id,
        {include: [
            { model: Wallet },
            { model: Account }
        ]})
        .then(user => res.send(user))
        .catch(err => res.send(err))
});


module.exports = server;
