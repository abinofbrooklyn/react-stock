import React from 'react';
import { connect } from 'react-redux';
import { addStock, deleteStock } from "../actions/stocks";
import DisplayedStock  from "./DisplayedStock";

class StockApp extends React.Component { 
  state = {
    stockSymbol: ""
  };
  
  handleChange = (e) => {
    this.setState({ stockSymbol: e.target.value });
  };
  
  handleClick = (e) => {
    this.props.dispatch(addStock(this.state.stockSymbol));
    this.setState({ stockSymbol: "" });
  }
  
  handleDelete = (stock) => {
    this.props.dispatch(deleteStock(stock.symbol));
  }
  
  render(){
    return (
      <div>
        <h3>Stock App</h3>
        <input value={this.state.stockSymbol} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Add Stock</button>
        <ul>
          { this.props.stocks.map( stock => {
            return <DisplayedStock stock={stock} onDelete={this.handleDelete} />;
          })}
        </ul>
      </div>
    ); 
  }
}

function mapStateToProps(storeState, componentProps) {
  return { 
    stocks: storeState.stocks 
  };
}

export default connect(mapStateToProps)(StockApp);