const server = require("express").Router();
const bcrypt = require("bcrypt");
const passport = require("passport");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
/* const LocalStrategy = require("passport-local").Strategy; */
const { User, Wallet, Account, Location } = require("../../db.js");

//----------------------------------------------------------
//-------------------------USUARIO--------------------------
//----------------------------------------------------------

//-------------------------------
//        GET TODOS USERS       |
//-------------------------------
server.get("/all", (req, res) => {
    User.findAll()
        .then((users) => res.send(users))
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

//-------------------------------
//      DELETE USER BY ID       |
//-------------------------------
server.delete("/delete/:id", (req, res) =>{
    const { id } = req.params

    if(!Number(id)) res.send('id invalido')
    else User.destroy({ where: { id } }) // busca y destrulle el usuario pasado por id
    .then(del => res.send(del 
        ? 'usuario eliminado' 
        : 'no se encontro el usuario'))
    .catch(err=> res.send(err))
})

//-------------------------------
//        PUT USER BY ID        |
//-------------------------------
server.put("/edit/:id", (req, res) => {
    const { id } = req.params;
    const editValues = req.body;

    if(!Number(id)) res.send('id invalido')
    else User.update( editValues, { where: { id } } ) // busca y edita un usuario por id
        .then(up => res.send( up[0]
                ? 'se actualizo'
                : 'usuario no encontrado'
            ))
        .catch(err => res.send(err))
})

//-------------------------------
//     GET WALLET BY USERID     |
//-------------------------------
server.get("/:id/wallet", (req, res) => {
    const { id } = req.params   //todo lo que viaja llega como string

    Wallet.findOne({
        where: { userId: Number(id)}        //busca por userId
    })   
    .then(wallet => res.send(wallet
            ? wallet
            : 'la billetera no existe'
        ))   // envia wallet de ese user
    .catch(err => res.send(err))    // error 
})

//-------------------------------
//     GET ACCOUNT BY USERID    |
//-------------------------------
server.get("/:id/account", (req, res) => {
    const { id } = req.params   //todo lo que viaja llega como string

    Account.findOne({
        where: { userId: Number(id)} //busca por userId
    })   
        .then(account => res.send(account
                ? account
                : 'la cuenta no existe'
            ))  // envia wallet de ese user
        .catch(err => res.send(err))    // error 
})

//-------------------------------
//     GET LOCATION BY USERID   |
//-------------------------------
server.get("/:id/location", (req, res) => {
    const { id } = req.params   //todo lo que viaja llega como string

    Location.findOne({
        where: { userId: Number(id)} //busca por userId
    })   
        .then(location => res.send(location
                ? location
                : 'la locacion no existe'
            ))  // envia wallet de ese user
        .catch(err => res.send(err))    // error 
})


//---------------------------------------------
//        BUSCA USER POR NOMBRE Y EMAIL       |
//---------------------------------------------
//http://localhost:9000/user/search/?query={valor a buscar}
server.get("/search", (req, res) => {
    User.findAll({
            where: {
                [Op.or]: [
                    {email: {[Op.like]: `%${req.query.query.toLowerCase()}%` }},
                    {firstName: {[Op.like]: `%${req.query.query.toLowerCase()}%` }},
                    {lastName: {[Op.like]: `%${req.query.query.toLowerCase()}%` }}
                ]
            }
        })
        .then(usuarioEncontrado => {
            if(usuarioEncontrado.length)res.send(usuarioEncontrado);
            else res.send('Usuario no Encontrado');
        })
        .catch(err => res.send(err));
});


module.exports = server;