import React from 'react';

class DisplayedStock extends React.Component {
    handleDelete = () => {
      this.props.onDelete(this.props.stock);
    }
    
    render() {
      const { stock } = this.props;
      
      return (
        <li key={stock.symbol}>
          {stock.symbol} {stock.price} <button onClick={this.handleDelete}>X</button>
        </li>
      ); 
    }
}

export default DisplayedStock;