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

    const extra_url = 'user/register'

    return function (dispatch) {
        instance.post(extra_url, user).then((res) => {
          dispatch({ type: cons.REGISTER_USER__POST, payload: res.data });
        });
      };
}