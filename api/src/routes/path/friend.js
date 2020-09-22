const estaAutenticado = require("../../Suppliers/authenticateFunction")
const server = require("express").Router();
const { User, Contact, Account } = require("../../db.js");


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
    if(!friend)                     res.status(404).send('el amigo que queres agregar no existe')
    else if(me.id === friend.id)    res.status(404).send('no podes ser tu propio amigo')
    
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
                nickName,
                email
            })
            .then((create) => res.status(202).send(create))
            .catch(err => {
                if(err.name === 'SequelizeUniqueConstraintError') 
                    res.status(400).send('ya existe este amigo')
                else res.status(400).send(err)
            })
    }
})

//-----------------------------------------------------------------------------//
//                        BORRAR AMIGOS                                        //
//-----------------------------------------------------------------------------//
server.delete('/delete/:idFriend', estaAutenticado, (req, res) => {
    const { id } = req.user; // elimino si estoy autenticado
    const { idFriend } = req.params;

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
server.get('/list', estaAutenticado, async (req, res) => {
    const { id } = req.user; // muestro si estoy autenticado
    
    const contacts = await Contact.findAll({ where: { friend: id } })
    if(!contacts) res.send('no tenes amigos')
    else res.send(contacts)
})

//-----------------------------------------------------------------------------//
//                         TRAER AMIGO                                         //
//-----------------------------------------------------------------------------//
server.get('/:idFriend', estaAutenticado, async (req, res) => {
    const { idFriend } = req.params;

    const friend = await User.findByPk(idFriend, {
                include: [{model: Account, attributes: ['cvu']}],
                attributes: { exclude: ['password', 'access', 'createdAt', 'updatedAt'] }
            }
        )

    if(!friend) res.send('el amigo no existe')
    else res.send(friend)
})


module.exports = server;