import * as cons from './constants'

const initialState = {
    users: [],
    user: undefined
}

export default (state = initialState, action)=>{
    switch(action.type){
        case cons.REGISTER_USER__POST:
            return {
                ...state,
                users: action.payload
            }
        case cons.LOGIN_USER__POST:
            return {
                ...state,
                user: action.payload
            }
    }

    return state
}

