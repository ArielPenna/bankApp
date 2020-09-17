const server = require("express").Router();
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
//-------------------------------------
//         VALIDAR USUARIO            |
//-------------------------------------


// enctriptar codigo
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(codig, salt);

let codToCreateUser = []; 

server.post('/sendmail', (req, res) => {

    const { userObj, name } = req.body

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        auth: {
            user: "BankApp.team@gmail.com",
            pass: "HenryBank12"//process.env.PASS
        } 
    }) 

    const codig = {
        userObj: userObj, hash,
        codigo: Math.floor(Math.random() * (99999 - 10000) + 1000)
    }

    const mailOptions = {
        from: "BankApp <BankApp.team@gmail.com>",
        to: userObj.email,
        subject: "Validar Usuario en BankApp",
        html:  `   <html>
            <head>
                <body>

                    <h1>¡Hola ${name}, para continuar enviar el siguiente codigo! </h1>
                    <h2>Codigo: ${codig.codigo} </h2>
                    <h2>Gracias por elegirnos como tu billetera personal </h2>   
                    <h2>Team BankApp </h2>   
                </body>
    	    </head>
       </html>`
    }
    
    codToCreateUser.push(codig)

    console.log('cod:',codToCreateUser);

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            res.status(500).send(error.message)
        } else {
            console.log("¡Email enviado con éxito!")
            res.status(200).json(req.body)
        }
    })
})

server.post('/searchcod', (req, res) => {
    const { codigo } = req.body

    let codigoMatch;
    for(var i in codToCreateUser){
        if(codToCreateUser[i].codigo === codigo){
            codigoMatch = codToCreateUser[i]
            codigoMatch.index = i
        }
    }

    if(codigoMatch){
        codToCreateUser.splice(codigoMatch.index, 1)
        res.send(codigoMatch.userObj)
    } else res.send('false')
})

module.exports = server;