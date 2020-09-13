const server = require("express").Router();
const bcrypt = require("bcrypt");
const passport = require("passport");
/* const LocalStrategy = require("passport-local").Strategy; */
const { User, Wallet } = require("../../db.js");

//----------------------------------------------------------
//-------------------------USUARIO--------------------------
//----------------------------------------------------------

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

//-------------------------------
//       DELETE USER BY ID      |
//-------------------------------
server.delete("/delete/:id", (req, res) =>{
    const { id } = req.params

    User.destroy({
        where: {id: Number(id)}
    })
    .then(user => { 
        if (user === 1) {res.status(200).json({ message: "User deleted successfully" })}
        else {res.status(404).json({ message: "User not found" })}
    }).catch(err=> res.send(err))
})

//-------------------------------
//     GET WALLET BY USERID     |
//-------------------------------
server.get("/:id/wallet", (req, res) => {

    const { id } = req.params   //todo lo que viaja llega como string

    Wallet.findOne({
        where: { userId: Number(id)}        //busca por userId
    })   
    .then(wallet => res.send(wallet))   // envia wallet de ese user
    .catch(err => res.send(err))    // error 
})

module.exports = server;