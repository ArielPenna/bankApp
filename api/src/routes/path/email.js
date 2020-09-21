const server = require("express").Router();
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const { User } = require("../../db.js");

//-------------------------------------
//         SEND EMAIL                 |
//-------------------------------------

let codToCreateUser = []; 

server.post('/sendmail', async (req, res) => {

    const { email } = req.body
    const encontrado = await User.findOne({
        where : { email }
    })

    if(!encontrado){
    //////// enctriptar codigo /////////
    //const salt = bcrypt.genSaltSync(10);
    
    const constCod = Math.floor(Math.random() * (99999 - 10000) + 1000)
    
    console.log(constCod)
    
    //const codeCript = bcrypt.hashSync(toString(constCod), salt)

    codToCreateUser.push(constCod)

    ////////////////////////////////////////    

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        auth: {
            user: "BankApp.team@gmail.com",
            pass: "HenryBank12"//process.env.PASS
        } 
    })     

    const mailOptions = {
        from: "BankApp <BankApp.team@gmail.com>",
        to: email,
        subject: "Validar Usuario en BankApp",
        html:  `<html>
                <head>
                    <body>
                        <h1>¡Hola futuro esclavo para continuar enviar el siguiente codigo! </h1>
                        <h2>Codigo: ${constCod} </h2>
                        <h2>Gracias por elegirnos como tu billetera personal </h2>   
                        <h2>Team BankApp </h2>   
                    </body>
                </head>
                </html>`
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) res.send(error.message)
        else res.send("¡Email enviado con éxito!")
    })
    } else res.send(false)
})

//-------------------------------------
//         SEARCH CODE                |
//-------------------------------------

server.post('/searchcod', (req, res) => {
    const { codigo } = req.body

    let codigoMatch;

    for(var i in codToCreateUser){
        //if(bcrypt.compare(toString(codigo), codToCreateUser[i])) codigoMatch = i
        //console.log(bcrypt.compareSync(toString(codigo), codToCreateUser[i]))
        if(parseInt(codigo) === codToCreateUser[i]) codigoMatch = i
    }

    if(codToCreateUser[codigoMatch]){
        codToCreateUser.splice(codigoMatch, 1)
        res.send('true')
    } else res.send('false')
})

module.exports = server;