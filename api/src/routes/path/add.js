const server = require("express").Router();
const { User } = require("../../db.js");


// AGREGAR AMIGO
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