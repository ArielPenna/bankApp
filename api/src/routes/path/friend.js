const estaAutenticado = require("../../Suppliers/authenticateFunction")
const server = require("express").Router();
const { User, Contact } = require("../../db.js");


//-----------------------------------------------------------------------------//
//                        AGREGAR AMIGOS                                       //
//-----------------------------------------------------------------------------//
server.post('/add', estaAutenticado, async (req, res) => {
    const { id } = req.user; // agrego si estoy autenticado
    const { email } = req.body;
    let { nickName } = req.body;
    
    const meObj = await User.findByPk(id)                       // Me almaceno todo mi usuario
    const friendObj = await User.findOne({ where: {email} })    // Almaceno todo el usuario de mi amigo
    const me = meObj.dataValues                                 // agarro solo mis valores
    const friend = friendObj && friendObj.dataValues            // si existe agarro sus valores


    //-----------------------------------------------------------------------------//
    //                              Filtros                                        //
    //-----------------------------------------------------------------------------//
    if(!friend)                     res.send('el amigo que queres agregar no existe')
    else if(me.id === friend.id)    res.send('no podes ser tu propio amigo')
    
    //----------------------------------//
    //      SI PASA LOS FILTROS         //
    //----------------------------------//
    else{
        // Si no existe nickName le pongo el nombre completo
        if(!nickName) nickName = `${friend.firstName} ${friend.lastName}`

        // Creo el contacto y le paso los valores que necesita
        Contact.create({
                friend: me.id,
                friended: friend.id,
                nickName
            })
            .then((create) => res.send(create))
            .catch(err => {
                if(err.name === 'SequelizeUniqueConstraintError') res.send('ya existe este amigo')
                else res.send(err)
            })
    }
})

//-----------------------------------------------------------------------------//
//                        BORRAR AMIGOS                                        //
//-----------------------------------------------------------------------------//
server.delete('/delete', estaAutenticado, (req, res) => {
    const { id } = req.user; // elimino si estoy autenticado
    const { idFriend } = req.body;

    Contact.destroy({ where: {friend: id, friended:idFriend} })
        .then(destroy => res.send(destroy ? 'se elimino' : 'no se elimino'))
        .catch(err => res.send(err))
})

//-----------------------------------------------------------------------------//
//                        EDITAR AMIGOS                                        //
//-----------------------------------------------------------------------------//
server.put('/edit', estaAutenticado, (req, res) => {
    const { id } = req.user;
    const { idFriend, nickName } = req.body;

    Contact.update({ nickName }, {
        where: {
            friend: id,
            friended: idFriend
        }
    })
        .then(edit => res.send(edit ? `el nickName se cambio a ${nickName}` : 'no se encontro'))
        .catch(err => res.send(err))
})

//-----------------------------------------------------------------------------//
//                        LISTAR AMIGOS                                        //
//-----------------------------------------------------------------------------//
server.get('/list', estaAutenticado, (req, res) => {
    const { id } = req.user; // muestro si estoy autenticado
    
    Contact.findAll({ where: { friend: id } })
        .then(friends => res.send(friends.length ? friends : [] /*No tiene amigos*/))
        .catch(err => res.send(err))    // error 
})

module.exports = server;