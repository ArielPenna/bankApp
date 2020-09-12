const server = require("express").Router();
const bcrypt = require("bcrypt");
const passport = require("passport");
const nodemailer = require("nodemailer");
const { User, Wallet } = require("../../db.js");
// import logo from '../../../../app/asstes/logo.png';

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
    res.json(req.user);
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

//-------------------------------------
//         VALIDAR USUARIO            |
//-------------------------------------
// server.post('/sendMail', (req, res) => {
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: "BankApp.team@gmail.com",
//             pass: "HenryBank12"
//         } 
//     }) 

//     const mailOptions = {
//         from: "BankApp <BankApp.team@gmail.com>",
//         to: req.body.email,
//         subject: "Validar Usuario en BankApp",
//         html:  `   <html>
//             <head>
//                 <body>
//                 <img src="logo" />
//                 <h1>¡Hola ${req.body.name}, para continuar enviar el siguiente codigo! </h1>
//                        <h2>Codigo: ${req.body.codigo} </h2>
//                 <h2>Gracias por elegirnos como tu billetera personal </h2>   
//                 <h2>Team BankApp </h2>   
//                 </body>
//     	       </head>
//        </html>`
//     }

//     transporter.sendMail(mailOptions, (error, info) => {
//         if(error) {
//            res.status(500).send(error.message)
//         } else {
//            console.log("¡Email enviado con éxito!")
//            res.status(200).json(req.body)
//         }
//     })
// })

module.exports = server;