const server = require("express").Router();
/* const bcrypt = require("bcryptjs"); */
const { User, Wallet } = require("../../db.js");

server.post("/:idFrom/:idTo", async (req, res) => {
    const { idFrom, idTo } = req.params
    const { transaction } = req.body
    console.log(idFrom)
    console.log(idTo)
    console.log('antes del find')

    let from = await User.findByPk(idFrom)
    let to = await User.findByPk(idTo)
    if(to && from && transaction){
        let fromWallet = await from.getWallet()
        let toWallet = await to.getWallet()
        console.log('fromWallet ', fromWallet.dataValues)
        console.log('toWallet ',toWallet.dataValues)
        await fromWallet.update({ balance: (fromWallet.dataValues.balance - transaction) })
        await toWallet.update({ balance: (toWallet.dataValues.balance + transaction) })
        res.send('transaccion realizada con exito')
    }
    res.send('chau')
})

module.exports = server;