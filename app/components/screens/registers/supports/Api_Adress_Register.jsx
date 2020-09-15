import axios from 'axios'

export default (street, number, newUser, setNewUser, error, setError) => {
    axios({
        "method":"GET",
        "url":"https://trueway-places.p.rapidapi.com/FindPlaceByText",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"trueway-places.p.rapidapi.com",
        "x-rapidapi-key":"2a5bcee240msh195ae500c5af48bp187121jsna01de3486946",
        "useQueryString":true
        },"params":{
        "language":"es-ar",
        "text":street
        }
        })
        .then((res)=>{
            console.log(res)
            if(res.data.results.length){
                setError({
                    ...error,
                    address: ''
                })
                setNewUser({
                    ...newUser,
                    address: number + ',' + res.data.results[0].address
                })
            }            
        })
        .catch((error)=>{
            console.log(error)
        })
}

