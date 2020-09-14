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

export const login_user__post = (user) => {
  return function (dispatch) {
    instance.post("user/auth/login", user).then((res) => {
      dispatch({ type: cons.LOGIN_USER__POST, payload: res.data });
    });
  };
};

export const send_mail__post = (user) => {
  return function (dispatch) {
    instance.post("email/sendmail", user);
  };
};

export const save_user = (user) => {
  return function (dispatch) {
    dispatch({ type: cons.SAVE_USER, payload: user });
  };
};

export const search_code = (code, user) => {
  return function (dispatch) {
    instance
      .post("email/searchcod", code)
      .then((res) => {
        //If the code is true Register the user
        if(res.data) instance.post('user/auth/register', res.data)
        else throw Error        

      })
      .then((res) => {
        if (res) dispatch({ type: cons.REGISTER_USER__POST, payload: res.data });
      })
      .catch((err) => console.log(err));
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
