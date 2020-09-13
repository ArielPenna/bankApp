import * as cons from './constants'
import axios from 'axios'

const url = "http://localhost:9000/";

//Llamar en lugar de axios
//en baseURL ya esta cargada el localhost
//al llamarla hay que hacer Ej.: instance.post('user/register')
const instance = axios.create({
    withCredentials: true,
    baseURL: url,
  });

export const register_user__post = (user) => {

    const extra_url = 'user/auth/register'

    return function (dispatch) {
        instance.post(extra_url, user).then((res) => {
          dispatch({ type: cons.REGISTER_USER__POST, payload: res.data });
        });
      };
}

export const login_user__post = (user) => {
  
  return function (dispatch) {
    instance.post ('user/auth/login', user).then((res)=>{
      dispatch({type: cons.LOGIN_USER__POST, payload: res.data});
    }); 
  };
}

export const send_mail__post = (user) => {
  return function (dispatch) {
    instance.post('email/sendmail', user)
  }
}

export const save_user = (user) => {
  return function (dispatch) {
   dispatch({type: cons.SAVE_USER, payload: user})
  }
}

export const search_code = (code) => {
  return function (dispatch){
    instance.post('email/searchcod', code).then((res) =>{
    dispatch({type: cons.SEARCH_CODE, payload: res.data})
  })
 }
}