import * as cons from './constants'

const initialState = {
    users: []
}

export default (state = initialState, action)=>{
    switch(action.type){
        case cons.REGISTER_USER__POST:
            return {
                ...state,
                users: action.payload
            }
    }
    return state
}