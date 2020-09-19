const server = require("express").Router();
const { User } = require("../../db.js");


// AGREGAR AMIGO
server.post('/add/:id', async (req, res) => {
    const { id } = req.params;
    const { email } = req.body;
    const idFriend = await User.findOne({
        where: { email }
    })

    User.findByPk(parseInt(id))
    .then( (me) => {
        console.log(me)
        me.addFriend(idFriend).then(
            success => res.send(success ? 'Se agrego tu Amigo' : 'No se agrego')
        )
    }).catch(err => res.send('No se pudo agregar tu Amigo'))
})

// BORRAR AMIGO
server.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    const { idFriend } = req.body;

    User.findByPk(parseInt(id))
    .then( me => me.removeFriend(idFriend))
    .then(remove => res.send(remove
        ? "Se elimino el amigo"
        : "No se elimino"
    )).catch(err => res.send(err))

})

//  TRAER AMIGOS
server.get('/list/:id', (req, res) => {
    const { id } = req.params;

    User.findByPk(parseInt(id))
    .then( me => me.getFriend())
    .then( friends =>res.send(friends
        ? friends
        : "Aun no tenes amigos"
    )).catch(err => res.send(err))

})

module.exports = server;