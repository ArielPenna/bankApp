const server = require("express").Router();
const bcrypt = require("bcrypt");
const passport = require("passport");
/* const LocalStrategy = require("passport-local").Strategy; */
const { User, Wallet } = require("../../db.js");

//----------------------------------------------------------
//-------------------------USUARIO--------------------------
//----------------------------------------------------------


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
    console.log(req.user.id)
    res.send(req.user);
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

server.get("/all", (req, res) => {
    User.findAll()
        .then((users) => res.send(users))
        .catch((err) => res.send(err));
});

server.get("/search", (req, res) => {
    User.findAll({
            where: {
                // [Op.or]: [
                email: {
                    [Sequelize.Op.iLike]: `%${req.params.id}%`
                }
            }
        })
        .then(usuarioEncontrado => {
            res.json(usuarioEncontrado);
        })
        .catch((err) => res.send(err));
});

//-------------------------------
//        GET USER BY ID        |
//-------------------------------
server.get("/get/:id", (req, res) => {

    const { id } = req.params   //todo lo que viaja llega como string

    User.findByPk(Number(id))   //busca por id
        .then(user => res.send(user))   // usuario que llega lo envia
        .catch(err => res.send(err))    // error que llega lo envia
})

server.delete("/delete/:id", (req, res) =>{
    const { id } = req.params

    User.destroy(Number(id))
    .then(user => res.send("Usuario eliminado"))
    .catch(err=> res.send(err))
})



module.exports = server;