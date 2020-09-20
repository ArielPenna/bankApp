const server = require("express").Router();
const axios = require("axios")

//----------------------------------------------//
//  Esta es la consulta a la api de RapidApi    //
//  devuelve un array de objetos de locacion    //
//----------------------------------------------//
server.post('/get', (req, res) => {
    const {street1, street2} = req.body
    
    if(!street1 || !street2) res.send('street1 o street2 son invalidos')

    else {
        axios({
            "method":"GET",
            "url":"https://trueway-places.p.rapidapi.com/FindPlaceByText",
            "headers":{
                    "content-type":"application/octet-stream",
                    "x-rapidapi-host":"trueway-places.p.rapidapi.com",
                    "x-rapidapi-key":"2a5bcee240msh195ae500c5af48bp187121jsna01de3486946",
                    "useQueryString":true
                },
            "params":{
                    "language":"es-ar",
                    "text": `${street1} y ${street2}`
                }
        })
            .then((location)=>{
                /* console.log(location.data.results) */ // aca estan todos los resultados
                if(!location) res.send('la direccion es inexistente')
                else res.send(location.data.results)
            })
            .catch((error)=>{
                res.send(error)
            })
    }

})

module.exports = server;