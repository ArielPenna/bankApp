const server = require("express").Router();
const nodemailer = require("nodemailer");
import logo from '../../../../app/asstes/logo.png';

//-------------------------------------
//         VALIDAR USUARIO            |
//-------------------------------------


server.post('/sendMail', (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "BankApp.team@gmail.com",
            pass: "HenryBank12"
        } 
    }) 

    const mailOptions = {
        from: "BankApp <BankApp.team@gmail.com>",
        to: req.body.email,
        subject: "Validar Usuario en BankApp",
        html:  `   <html>
            <head>
                <body>
                <img src="logo" />
                <h1>¡Hola ${req.body.name}, para continuar enviar el siguiente codigo! </h1>
                        <h2>Codigo: ${req.body.codigo} </h2>
                <h2>Gracias por elegirnos como tu billetera personal </h2>   
                <h2>Team BankApp </h2>   
                </body>
    	        </head>
        </html>`
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            res.status(500).send(error.message)
        } else {
            console.log("¡Email enviado con éxito!")
            res.status(200).json(req.body)
        }
    })
})