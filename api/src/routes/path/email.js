const server = require("express").Router();
const nodemailer = require("nodemailer");

//-------------------------------------
//         VALIDAR USUARIO            |
//-------------------------------------



const codToCreateUser = []; 

server.post('/sendmail', (req, res) => {

    const { email, name } = req.body

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        auth: {
            user: "BankApp.team@gmail.com",
            pass: process.env.PASS
        } 
    }) 

    const codig = {
        email: email,
        codigo: Math.floor(Math.random() * (99999 - 10000) + 1000)
    }

    const mailOptions = {
        from: "BankApp <BankApp.team@gmail.com>",
        to: email,
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

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
           res.status(500).send(error.message)
        } else {
           console.log("¡Email enviado con éxito!")
           res.status(200).json(req.body)
        }
    })
    console.log('cod:',codToCreateUser);
})

server.post('/searchcod', (req, res) => {
    const { codigo } = req.body

    res.send(searchCod(codigo) ? 'true' : 'false')
})

//-------------------------------------------------
//            BUSCAR CODIGO
function searchCod( codigo ){
    for( i = 0 ; i < codToCreateUser.length ; i++){
        if( codToCreateUser[i].codigo === codigo) return true
    }
    return false
}
//-------------------------------------------------

module.exports = server;