const server = require("express").Router();
const { Op } = require("sequelize");
const { User, Transaction } = require("../../db.js");

server.post("/:idFrom/:idTo", (req, res) => {
    const { idFrom, idTo } = req.params
    const { transaction } = req.body

    const floatTransaction = parseFloat(transaction) // convierto el numero a decimal

    let nuevoSaldo;

    if(!Number(idFrom))                 res.send('usuario from invalido')
    else if(!Number(idTo))              res.send('usuario to invalido')
    else if(idFrom === idTo)            res.send('los usuarios son iguales')
    else if(!floatTransaction)          res.send('transaccion invalida')
    else if(floatTransaction < 100)     res.send('la transaccion debe ser de un monto minimo de 100$')
    
    //-----------------------------------
    //     SI PASA TODOS LOS FILTROS
    //-----------------------------------
    else {
        Transaction.create({debit:idFrom, deposit: idTo, value: floatTransaction})
            //  usuario FROM
            .then(() => User.findByPk(idFrom)) // id del usuario que va a pagar
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
                else if(err === 'NotFound') res.send('usuario no encontrado')
                else {
                    res.send(err)
                }
            })}
})

// AGREGAR DINERO A LA BILLETERA
/* server.put('/recarge/wallet', (req, res) => {
    const { balance } = req.body
    const { id } = req.user


    Wallet.findOne({
        where: { id: Number(idWallet) }
    }).then(wallet => {
        wallet.update({
            balance: balance + parseFloat(wallet.dataValues.balance)
        }).then((actualizo) => {
            res.send(actualizo ?
                'se actualizo la billetera' :
                'no se actualizo')
        })
    })
}) */

// TRAER TODAS LAS TRANSFERENCIAS DEL USUARIO
server.get('/get', (req, res) => {
    const { id } = req.user;

    Transaction.findAll({
        where: {
            [Op.or]:[
                {debit: id },
                {deposit: id }
            ]
        }
    })
        .then(transactions=>res.send(transactions))
        .catch(err=>res.send(err))
})

module.exports = server;