import * as cons from './constants'
import axios from 'axios'

const url = "http://localhost:9000/";

export const register_user__post = (user) => {
    console.log(user)
    const extra_url = url + 'user/register'
    return function(dispatch){
        return fetch(extra_url, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        }).then(res => {
            console.log(res)
            dispatch({type: cons.REGISTER_USER__POST, payload: res})
        }).catch(err => console.error(err))
    }
}

/*export const register_user__post = (user) => {
    console.log(user)
    const extra_url = url + 'user/register'
    return function (dispatch) {
        axios.post(extra_url, user).then((res) => {
          dispatch({ type: cons.REGISTER_USER__POST, payload: res.data });
        });
      };
}*/