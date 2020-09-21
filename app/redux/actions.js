import * as cons from "./constants";
import axios from "axios";

const url = "http://localhost:9000/";

//Llamar en lugar de axios
//en baseURL ya esta cargada el localhost
//al llamarla hay que hacer Ej.: instance.post('user/register')
const instance = axios.create({
  withCredentials: true,
  baseURL: url,
});

//##############>>> ¡REGISTER! <<<##############//

///////>> SEND MAIL <<////////
export const send_mail__post = async (user, setSend, setLoading) => {
    const res = await instance.post("email/sendmail", user)
    !!setSend && setSend(res.data)
    setLoading(false)
};

///////>> SEARCH CODE <<////////
export const search_code = async (code, setVal, setValidation) => {
    const res = await instance.post("email/searchcod", code)
    setVal(res.data)
    setValidation(false)
};

//////>> LOCATION GET <<///////
export const location_get = (location, newUser, setNewUser, error, setError, setLoading) => {
  return ()=>{
    instance.post('api/location/get', location)
      .then(res => {
        console.log(res)
        
        ///////---> SET ADDRESS <------////

        if(res.data.length){
            setError({
                ...error,
                address: ''
            })
            setNewUser({
                ...newUser,
                address: location.number + ', ' + res.data[0].address
            })
        }   
        
        setLoading(false)
      })
      .catch(err => console.log(err))
  }  
}

///////>> REGISTER <<////////
export const register_user__post = async (user, setRegister, setLoading)=>{
    const res = await instance.post('user/auth/register', user)    
    setRegister(true)
    setLoading(false)
}

//##############>>> ¡LOGIN! <<<##############//

///////>> LOGIN <<////////
export const login_user__post = async (user, setAuth, setLoading) => {
  try{
    const res = await instance.post("user/auth/login", user)
    setAuth(res.data)
    setLoading(false)
  }
  catch(err){
    setAuth(false)
    setLoading(false)
  }  
};

///////>> GET USER <<////////
export const get_user__me = () => {
  return (dispatch) => {
    instance.get("user/auth/me").then((res) => {
      dispatch({ type: cons.GET_USER_ME, payload: res.data });
    });
  };
};

///////>> LOGOUT <<////////
export const logout = () => {
  return (dispatch) => {
    instance.get("user/auth/logout").then((res) => {
      dispatch({ type: cons.LOGOUT, payload: undefined });
    });
  };
};

//##############>>> ¡MONEY! <<<##############//

///////>> TRANSACTION <<////////
export const transactions_get = () => {
  return (dispatch) => {
    instance.get("transactions/get").then((res) => {
      dispatch({ type: cons.TRANSACTIONS_GET, payload: res.data });
    });
  };
};   

///////>> RECHARGE WALLET <<////////
export const recharge_wallet = (balance) => {
  return () => {
    instance.put("transactions/recarge/wallet", balance)
  }
}

//##############>>> ¡CONTACTS! <<<##############//

//////>> GET CONTACTS <<//////
export const get_friends = () => {
  return (dispatch) => {
    instance.get('friend/list')
      .then(res => {
        dispatch({type: cons.GET_FRIENDS, payload: res.data})
      })
  }
}

//////>> GET ONE CONTACT <<//////
export const get_one_friend = (idFriend) => {
  console.log(idFriend)
  return (dispatch) => {
    instance.get(`friend/${idFriend}`)
      .then(res => {
        dispatch({type: cons.GET_ONE_FRIEND, payload: res.data})
      })
  }
}

///////>> ADD FRIEND <<////////
export const add_friend = (friend) => {
  return () => {
    instance.post('friend/add' , friend)
  }
}

//////>> EDIT FRIEND <<///////
export const update_friend = (friend) => {
  return () => {
    instance.put('friend/edit', friend)
  }
}

//////>> DELETE FRIEND <<///////
export const delete_friend = (idFriend) => {
  return () => {
    instance.delete(`friend/delete/${idFriend}`)
  }
}

/////////>> EDIT USER <<//////////
export const edit_user = (user) => {
  return (dispatch) => {
    instance.put(`user/edit/${user}`)
      .then(res => {
        dispatch ({type: cons.EDIT_USER, payload:res.data})
      })
  }
}