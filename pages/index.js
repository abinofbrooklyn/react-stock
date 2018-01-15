import React from 'react';
import { Provider } from 'react-redux';
import StockApp from '../components/StockApp';
import store from '../store'

export default () => <Provider store={store}>
  <StockApp/>
</Provider>

