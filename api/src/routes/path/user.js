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

server.delete("/delete/:id", (req, res) =>{
    const { id } = req.params

    User.destroy(Number(id))
    .then(user => res.send("Usuario eliminado"))
    .catch(err=> res.send(err))
})



module.exports = server;