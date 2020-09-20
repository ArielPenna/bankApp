import * as cons from "./constants";

///////>> SUPPORTS <<////////
const getBalance = (payload) => {

    var debit = 0;
    var credit = 0;  

    for (var i in payload) {
      if (payload[i].debit) {
        debit += parseFloat(payload[i].value)
      } else {
        credit += parseFloat(payload[i].value)
      }
    }
    
    return {
      debit: debit,
      credit: credit,
      total: credit-debit,
    }
}

///////>> STATE <</////
const initialState = {
  register: false,
  user: undefined,
  sendEmail: [],
  code: false,
  transactions: {},
  fullBalance: {},
  contacts:[]
};

export default (state = initialState, action) => {
  switch (action.type) {
//--------------------------------------------------------------//
    ////>> REGISTER <</////
    case cons.SEND_MAIL:
      return {
        ...state,
        sendEmail: action.payload,
      };
    case cons.SEARCH_CODE:
      return {
        ...state,
        code: action.payload,
      };
    case cons.SUCCESSFUL_REGISTER:
      return {
        ...state,
        register: action.payload
      }
//--------------------------------------------------------------//
    /////>> LOGIN <</////
    case cons.LOGIN:
    case cons.GET_USER_ME:    
    case cons.LOGOUT:
      return {
        ...state,
        user: action.payload,
      };
//--------------------------------------------------------------//    
    /////>> MONEY <</////
    case cons.TRANSACTIONS_GET:
      const balance = getBalance(action.payload)
      return {
        ...state,
        transactions: action.payload,
        fullBalance: balance,
      };    
//--------------------------------------------------------------//
    /////>> CONTACTS <</////
    case cons.GET_FRIENDS:
    case cons.ADD_FRIEND:
    case cons.UPDATE_FRIEND:
    case cons.DELETE_FRIEND:
      return {
        ...state, 
        contacts:action.payload
      }
  }
  return state;
};


