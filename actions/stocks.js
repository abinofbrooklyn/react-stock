import { ADD_STOCK, DELETE_STOCK } from "./actionTypes";

export function addStock(stockSymbol) {
  return {
    type: ADD_STOCK,
    stockSymbol
  }
} 

export function deleteStock(stockSymbol) {
  return {
    type: DELETE_STOCK,
    stockSymbol
  }
}