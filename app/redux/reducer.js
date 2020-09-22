import * as cons from "./constants";

///////>> STATE <</////
const initialState = {
  user: undefined,
  transactions: {},
  fullBalance: {},
  contacts:[],
  oneFriend: {}
};

///////>> SUPPORTS <<////////
const getBalance = (payload, user) => {

    var debit = 0;
    var credit = 0;  

    console.log(user)

    for (var i in payload) {
      console.log(payload[i])
      if (payload[i].debit === user?.account.accountId) {
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


export default (state = initialState, action) => {
  switch (action.type) {
//--------------------------------------------------------------//
    /////>> LOGIN <</////
    case cons.GET_USER_ME:    
    case cons.LOGOUT:
      return {
        ...state,
        user: action.payload,
      };
//--------------------------------------------------------------//    
    /////>> MONEY <</////
    case cons.TRANSACTIONS_GET:
      const balance = getBalance(action.payload, state.user)
      return {
        ...state,
        transactions: action.payload,
        fullBalance: balance,
      };    
//--------------------------------------------------------------//
    /////>> CONTACTS <</////
    case cons.GET_FRIENDS:
      return {
        ...state, 
        contacts: action.payload
      }
    case cons.GET_ONE_FRIEND:
      return {
        ...state,
        oneFriend: action.payload
      }
  }
  return state;
};


