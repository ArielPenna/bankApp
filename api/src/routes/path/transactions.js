const estaAutenticado = require("../../Suppliers/authenticateFunction")
const server = require("express").Router();
const { Op } = require("sequelize");
const { User, Transaction, Account } = require("../../db.js");

// GENERAR TRANSACCION
server.post("/to/:CVUfriend", estaAutenticado, async (req, res) => {
    const { CVUfriend } = req.params
    const { transaction } = req.body
    const { id } = req.user

    //-------------------------------------------
    //              DECLARACIONES               |
    //  CUENTA
    const userFromAccount = await Account.findOne({where: { userId: id }});
    const userToAccount = await Account.findOne({where: { cvu: CVUfriend }});
    console.log('---------------------------')
    console.log(userFromAccount && userFromAccount.dataValues)
    console.log(userToAccount && userToAccount.dataValues)
    //  USUARIO
    const userFrom = userFromAccount && await userFromAccount.getUser()
    const userTo = userToAccount && await userToAccount.getUser()
    console.log('---------------------------')
    console.log('userFrom ', userFrom && userFrom.dataValues)
    console.log('userTo ', userTo && userTo.dataValues)
    //  BILLETERA
    const userFromWallet = userFrom && await userFrom.getWallet()
    const userToWallet = userTo && await userTo.getWallet()
    console.log('---------------------------')
    console.log('walletFrom ', userFromWallet && userFromWallet.dataValues)
    console.log('walletTo ', userToWallet && userToWallet.dataValues)
    console.log('---------------------------') 

    //-------------------------------------------
    //                PARSEOS                   |
    const floatTransaction = parseFloat(transaction) // convierto el numero a decimal
    const floatBalance = parseFloat(userFromWallet.dataValues.balance)
    //-------------------------------------------

    let nuevoSaldo;

    if(!userFromAccount) 
        res.send('user from no existe')
    else if(!userToAccount) 
        res.send('user to no existe')
    else if(userFromAccount.dataValues.accountId === userToAccount.dataValues.accountId) 
        res.send('los usuarios son iguales')
    else if(!floatTransaction) 
        res.send('transaccion invalida')
    else if(!(floatTransaction > 100)) 
        res.send('la transaccion debe ser de un monto minimo de 100$')
    else if(!(floatBalance > floatTransaction)) 
        res.send('saldo insuficiente')

    else {    
        //-----------------------------------
        //     SI PASA TODOS LOS FILTROS
        //-----------------------------------   
        await Transaction.create({
                debit: userFromAccount.accountId, 
                deposit: userToAccount.accountId, 
                value: floatTransaction
            })
        nuevoSaldo = await userFromWallet.update({ // descuento el saldo de la transaccion
                balance:(parseFloat(userFromWallet.dataValues.balance) - floatTransaction)
            })
        await userToWallet.update({
            balance:(parseFloat(userFromWallet.dataValues.balance) + floatTransaction)
            })
        res.send(nuevoSaldo.dataValues)
    }
})


// AGREGAR DINERO A LA BILLETERA
server.put('/recarge/wallet', estaAutenticado, async (req, res) => {
    const { balance } = req.body;   // Me traigo el monto a agregar a la billetera
    const { id } = req.user;    // Me treigo el usuario logeado

    const user = await User.findByPk(id)    // Busco el usuario logeado
    const userAccount = (await user.getAccount()).dataValues // me traigo toda la data de la cuenta
    
    if(!user) res.send('el usuario no existe')
    
    else {
        Transaction.create({ deposit: userAccount.accountId, value: balance, transactions_type: 'recarga billetera' })
            .then(() => user.getWallet())
            .then(wallet => {
                wallet.update({
                    balance: balance + parseFloat(wallet.dataValues.balance)
                })
            .then((actualizo) => {
                res.send(actualizo 
                    ? `se agregaron ${balance}$ a tu billetera`
                    : 'no se actualizo')
            })
        })
    }
})

// TRAER TODAS LAS TRANSFERENCIAS DEL USUARIO
server.get('/get', estaAutenticado, async (req, res) => {
    const { id } = req.user;
    
    const user = await User.findByPk(id)    // Busco el usuario logeado
    const userAccount = (await user.getAccount()).dataValues // me traigo toda la data de la cuenta

    Transaction.findAll({
        where: {
            [Op.or]:[
                {debit: userAccount.accountId },
                {deposit: userAccount.accountId }
            ]
        }

    })
        .then(transactions=>res.send(transactions))
        console.log(transactions_type)
        .catch(err=>res.send(err))
})

module.exports = server;