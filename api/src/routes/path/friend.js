const server = require("express").Router();
const { User } = require("../../db.js");


// AGREGAR AMIGO
server.post('/add/:id', (req, res) => {
    const { id } = req.params;
    const { idFriend } = req.body;
    
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
    .then( (me) => {
        me.removeFriend(idFriend).then(
            success => res.send(success ? 'Se elimino tu Amigo' : 'No se elimino')
        )
    }).catch(err => res.send('No se pudo eliminar tu Amigo'))
})

//  TRAER AMIGOS
server.get('/list/:id', (req, res) => {
    const { id } = req.params;

    User.findOne({
        include: {
            model: User,
            as: 'friend',
            through : {where:  { friended: parseInt(id)},}
        }
    })
    .then(friends => res.send(friends.friend.length !== 0 ? friends.friend : 'No tenes Amigos'
    )).catch(err => res.send(err))    // error 

})

module.exports = server;