const estaAutenticado = require("../../Suppliers/authenticateFunction")
const services = require('../../Suppliers/services')
const capitalize = require('../../Suppliers/Capitalize')
const server = require("express").Router();
const { Op } = require("sequelize");
const { User, Transaction, Account } = require("../../db.js");

// GENERAR TRANSACCION
server.post("/to/:CVUfriend", estaAutenticado, async (req, res) => {
    const { id } = req.user
    const { CVUfriend } = req.params
    const { transaction } = req.body

    //-------------------------------------------
    //              DECLARACIONES               |
    //  CUENTA
    const userFromAccount = await Account.findOne({where: { userId: id }});
    const userToAccount = await Account.findOne({where: { cvu: CVUfriend }});

    //  USUARIO
    const userFrom = userFromAccount && await userFromAccount.getUser()
    const userTo = userToAccount && await userToAccount.getUser()

    //  BILLETERA
    const userFromWallet = userFrom && await userFrom.getWallet()
    const userToWallet = userTo && await userTo.getWallet()
    
    //-------------------------------------------
    //                PARSEOS                   |
    const floatTransaction = Number(transaction) // convierto el numero a decimal
    const floatBalance = Number(userFromWallet.dataValues.balance)
    //-------------------------------------------

    console.log(userTo)

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
        const userData = userTo.dataValues

        await Transaction.create({
            debit: userFromAccount.accountId, 
            deposit: userToAccount.accountId, 
            name: `${capitalize(userData.firstName)} ${capitalize(userData.lastName)}`,
            value: floatTransaction
        })

        nuevoSaldo = await userFromWallet.update({ // descuento el saldo de la transaccion
                balance:(Number(userFromWallet.dataValues.balance) - floatTransaction)
            })
        await userToWallet.update({
                balance:(Number(userToWallet.dataValues.balance) + floatTransaction)
            })
        

        res.send(nuevoSaldo.dataValues)
    }
})

// GET SERVICIOS
server.get('/get/services', async (req, res) => {
    res.send(services)
})

// PAGAR SERVICIO
server.put('/pay/service', estaAutenticado, async (req, res) => {
    const { balance, serviceId } = req.body; // me traigo el monto y el servicio al que le pago
    const { id } = req.user; // me traigo el id del usuario activo

    const user = await User.findByPk(id)    // Busco el usuario logeado
    const userAccount = (await user.getAccount()).dataValues // me traigo toda la data de la cuenta
    const userWallet = await user.getWallet() // me traigo toda la data de la billetera

    const exist = (services.filter((serv) => serv.id === serviceId))[0] // filtro para ver si existe el servicio


    if(!Number(serviceId)) res.send('debe especificar un servicio')
    else if(!exist) res.send('el servicio no existe')
    else if(!(Number(userWallet.dataValues.balance) > balance)) res.send('saldo insuficiente')
    else if(!(balance >= 100)) res.send('el monto minimo es de 100$')

    else {
        // genero la transaccion
        await Transaction.create(
            { 
                debit: userAccount.accountId, 
                deposit: exist.id,
                name: exist.name,
                value: balance, 
                transactions_type: 'transferencia bancaria'
            })
        // actualizo la billetera
        await userWallet.update({
            balance: Number(userWallet.dataValues.balance) - balance
        })

        res.send(`Transaccion exitosa, se le tranfirieron ${balance}$ a ${exist.name}.
                    Quedan ${userWallet.dataValues.balance}$ en su cuenta.`)
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
                    balance: Number(balance) + Number(wallet.dataValues.balance)
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
        .catch(err=>res.send(err))
})

module.exports = server;