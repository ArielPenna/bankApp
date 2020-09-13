const server = require("express").Router();
/* const bcrypt = require("bcryptjs"); */
const { User } = require("../../db.js");

server.post("/:idFrom/:idTo", (req, res) => {
    const { idFrom, idTo } = req.params
    const { transaction } = req.body

    const floatTransaction = parseFloat(transaction) // convierto el numero a decimal

    let nuevoSaldo;

    if(!Number(idFrom))         res.send('usuario from invalido')
    else if(!Number(idTo))      res.send('usuario to invalido')
    else if(idFrom === idTo)    res.send('los usuarios son iguales')
    else if(!floatTransaction)  res.send('transaccion invalida')
    
    //-----------------------------------
    //     SI PASA TODOS LOS FILTROS
    //-----------------------------------
    else {
        //  usuario FROM
        User.findByPk(idFrom) // id del usuario que va a pagar
        .then(from => from.getWallet()) // cuando lo encuentro busco su billetera
        .then(async (wallet)=> {
            nuevoSaldo = await wallet.update({ // descuento el saldo de la transaccion
                balance:(parseFloat(wallet.dataValues.balance) - floatTransaction)
            })})

        //  usuario TO
        .then(() => User.findByPk(idTo)) // busco el usuario a acreditar
        .then(to => to.getWallet()) // cuando lo encuentro busco su billetera
        .then(wallet => wallet.update({ // acredito el saldo de la transaccion
            balance:(parseFloat(wallet.dataValues.balance) + floatTransaction)
            }))
            
        .then(() => res.send(nuevoSaldo.dataValues)) // envio el saldo actual del usuario

        // ----------- ERRORES ----------------//
        .catch(err => {
            if(err.name === 'SequelizeValidationError') res.send('Saldo insuficiente')
            res.send(err)
        })}
})

module.exports = server;