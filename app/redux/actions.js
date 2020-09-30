import * as cons from "./constants";
import axios from "axios";
import { set } from "react-native-reanimated";

const url = "https://bankappme.tk/api/";

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
  try{
    const res = await instance.post('user/auth/register', user)    
    setRegister(true)
    setLoading(false)
  }
  catch(err){
    console.log(err)
  }
    
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
    console.log(err)
    setAuth(false)
    setLoading(false)
  }  
};

///////>> GET USER <<////////
export const get_user__me = () => {
  return (dispatch) => {
      instance.get("user/auth/me").then((res) => {
        console.log(res.data)
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
      console.log(res.data)
    });
  };
};   

//////>> SEND MONEY <</////
export const send_money = async (CVUfriend, transaction, setChange) => {
  try{
    await instance.post(`transactions/to/${CVUfriend}`, transaction)
    setChange(true)
  }
  catch(err){
    console.log(err)
  }
}

///////>> PAY SERVICE <<////////
export const pay_service = async (balance, setChange) => {
  try {
    const res = await instance.put('transactions/pay/service', balance)
    setChange(true)
  }
  catch(err){
    console.log(err)
  }
}

///////>> SERVICE <<////////
export const get_service = () =>{
  return (dispatch) =>{
    instance.get('transactions/get/services')
    .then(res =>{
      dispatch({type: cons.GET_SERVICE, payload: res.data})
    })
  }
}

///////>> RECHARGE WALLET <<////////
export const recharge_wallet = async (balance, setChange) => {
  try{
    await instance.put("transactions/recarge/wallet", balance)
    setChange(true)
  }
  catch(err){
    console.log(err)
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
export const add_friend = async (friend, setFriend) => {
  try{
    const amigo = await instance.post('friend/add' , friend)
    console.log(amigo)
    setFriend(true)
  } catch(err){
    setFriend(false)
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
export const edit_user = async (user, id, setChange) => {
  try{
    await instance.put(`user/edit/${id}`, user)
    setChange(true)
  }
  catch(err){
    console.log(err)
  }
}
