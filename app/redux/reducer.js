import * as cons from "./constants";

const initialState = {
  user: undefined,
  sendEmail: [],
  code: false,
  transactions: {},
  fullBalance: {},
  contacts:[]
};



export default (state = initialState, action) => {
  switch (action.type) {
    case cons.GET_USER__ME:    
    case cons.LOGOUT__GET:
      return {
        ...state,
        user: action.payload,
      };
    case cons.SEND_MAIL__POST:
      return {
        ...state,
        sendEmail: action.payload,
      };
    case cons.SEARCH_CODE:
      return {
        ...state,
        code: action.payload,
      };
    case cons.TRANSACTIONS_GET:
      var debit = 0;
      var credit = 0;      
      for (var i in action.payload) {
        if (action.payload[i].debit) {
          debit += parseFloat(action.payload[i].value)
        } else {
          credit += parseFloat(action.payload[i].value)
        }
      }
      var obj = {
        debit: debit,
        credit: credit,
        total: credit-debit,
      }
      return {
        ...state,
        transactions: action.payload,
        fullBalance: obj,
      };    
      case cons.ADD_FRIEND:
      return {...state, contacts:action.payload}
  }
  return state;
};


