import { ADD_STOCK, DELETE_STOCK } from "../actions/actionTypes";

const stocksReducer = (state=[], action) => {
  
  switch (action.type) {
    case ADD_STOCK:
      return [ ...state, { symbol: action.stockSymbol, price: action.stockPrice } ];
    case DELETE_STOCK:
      return state.filter( stock => stock.symbol !== action.stockSymbol );
    default:
      return state;
  }  
}

export default stocksReducer;