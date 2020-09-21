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
export const send_mail__post = (user) => {
  return (dispatch) => {
    instance.post("email/sendmail", user)
    .then(res =>{
      dispatch({type:cons.SEND_MAIL, payload: res.data})
    })
  };
};

///////>> SEARCH CODE <<////////
export const search_code = (code) => {
  return (dispatch) => {
    instance.post("email/searchcod", code)
    .then(res => {
      console.log(res.data)
      dispatch({type: cons.SEARCH_CODE, payload: res.data})
    })
  };
};

//////>> LOCATION GET <<///////
export const location_get = (location, newUser, setNewUser, error, setError) => {
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
    })
    .catch(err => console.log(err))
  }  
}

///////>> REGISTER <<////////
export const register_user__post = (user)=>{
  return (dispatch) => {
    instance.post('user/auth/register', user)
      .then(res => {
        dispatch({type: cons.SUCCESSFUL_REGISTER, payload: true})
      })
  }
}

//##############>>> ¡LOGIN! <<<##############//

///////>> LOGIN <<////////
export const login_user__post = (user) => {
  return (dispatch) => {
    instance.post("user/auth/login", user)
      .then(res => {
        console.log(res)
        dispatch({type: cons.LOGIN, payload: true})
      })
  };
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
