import { ADD_STOCK } from "../actions/actionTypes";

const apiMiddleware = ({ dispatch, getState }) => next => action => {
  if (action.type !== ADD_STOCK) {
    return next(action)
  } 
  const API_KEY = "F080D7PBWUWT4LP0";
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${action.stockSymbol}&apikey=${API_KEY}`;
  
  fetch(url).then( response => response.json()).then( json => {
      const lastDate = json["Meta Data"]["3. Last Refreshed"];
      const lastClosingPrice = json["Time Series (Daily)"][lastDate]["4. close"];

      return next({ ...action, stockPrice: lastClosingPrice});
    });
};

export default apiMiddleware; 