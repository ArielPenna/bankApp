const server = require("express").Router();
/* const bcrypt = require("bcryptjs"); */
const { User, Wallet } = require("../../db.js");

server.post("/:idFrom/:idTo", (req, res) => {
    const { idFrom, idTo } = req.params
    const { transaction } = req.body


    User.findByPk(idFrom).then(
        from => from.getWallet().then(
            (wallet)=>{
                console.log('wallet from ',wallet)
                wallet.update({
                    balance:(parseFloat(wallet.dataValues.balance) - parseFloat(transaction))
                })
                    .then(up => console.log(up.dataValues))
                    .catch(err => res.send('ocurrio un error en el update de la wallet'))
            }
        ).catch(err => res.send('ocurrio un error en la Wallet de from'))
    ).catch(err => res.send('ocurrio un error en from'))

    User.findByPk(idTo).then(
        to => to.getWallet().then(
            (wallet)=>{
                console.log('wallet to ',wallet.dataValues)
                wallet.update({
                    balance:(parseFloat(wallet.dataValues.balance) + parseFloat(transaction))
                })
                    .then(up => res.send(up.dataValues))
                    .catch(err => res.send('ocurrio un error en el update de la wallet de to'))
            }
        ).catch(err => res.send('ocurrio un error en la Wallet de to'))
    ).catch(err => res.send('ocurrio un error en to'))
})

module.exports = server;