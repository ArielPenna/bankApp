import * as cons from "./constants";

const initialState = {
  users: [],
  user: undefined,
  code: 0,
  saveUser: undefined,
  search: 0,
  transactions: {},
  fullBalance: {},
  
};



export default (state = initialState, action) => {
  switch (action.type) {
    case cons.REGISTER_USER__POST:
      return {
        ...state,
        users: action.payload,
      };
    case cons.GET_USER__ME:    
    case cons.LOGOUT__GET:
      return {
        ...state,
        user: action.payload,
      };
    case cons.SEND_MAIL__POST:
      return {
        ...state,
        code: action.payload,
      };
    case cons.SAVE_USER:
      return {
        ...state,
        saveUser: action.payload,
      };
    case cons.SEARCH_CODE:
      return {
        ...state,
        search: action.payload,
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
  }
  return state;
};


