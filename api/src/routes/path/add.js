const server = require("express").Router();
const { User, Wallet } = require("../../db.js");

server.put('/money/:idWallet', (req, res) => {
    const { balance } = req.body
    const { idWallet } = req.params

    Wallet.findOne({
        where: { id: Number(idWallet) }
    }).then(wallet => {
        wallet.update({
            balance: balance + parseFloat(wallet.dataValues.balance)
        }).then((actualizo) => {
            res.send(actualizo ?
                'se actualizo la billetera' :
                'no se actualizo un carajo')
        })
    })
})

server.post('/friend/:id', (req, res) => {

    const { id } = req.params;
    const { idFriend } = req.body;
    
    User.findByPk(parseInt(id))
    .then( (me) => {
        me.addFriend(idFriend).then(
            success => res.send(success ? 'Se agrego tu Amigo' : 'No se agrego')
        )
    }).catch(err => res.send('No se pudo agregar tu Amigo'))
})

module.exports = server;