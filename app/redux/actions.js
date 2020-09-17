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

export const register_user__post = (user)=>{
  return function(dispatch){
    instance.post('user/auth/register', user)
  }
}

export const login_user__post = (user) => {
  return function (dispatch) {
    instance.post("user/auth/login", user).then((res) => {
      console.log(res.data)
      dispatch({ type: cons.LOGIN_USER__POST, payload: res.data });
    });
  };
};

export const send_mail__post = (user) => {
  return function (dispatch) {
    instance.post("email/sendmail", user)
    .then(res =>{
      dispatch({type:cons.SEND_MAIL__POST, payload: res.data})
    })
  };
};

export const search_code = (code) => {
  return function (dispatch) {
    instance.post("email/searchcod", code)
    .then(res =>{
      dispatch({type: cons.SEARCH_CODE, payload: res.data})
    })
  };
};

export const logout__get = () => {
  return function (dispatch) {
    instance.get("user/auth/logout").then((res) => {
      dispatch({ type: cons.LOGOUT__GET, payload: undefined });
    });
  };
};

export const get_user__me = () => {
  return function (dispatch) {
    instance.get("user/auth/me").then((res) => {
      dispatch({ type: cons.GET_USER__ME, payload: res.data });
    });
  };
};

export const transactions_get = () => {
  return function (dispatch) {
    instance.get("transactions/get").then((res) => {
      dispatch({ type: cons.TRANSACTIONS_GET, payload: res.data });
    });
  };
};   


export const recharge_wallet = (balance) => {
  return function(dispatch) {
    instance.put("transactions/recarge/wallet", balance)
  }
}