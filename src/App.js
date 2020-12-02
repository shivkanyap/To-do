import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter'
import { Provider } from 'react-redux';
import store from './store/store'

function App() {
  return (
    <div>
      <Provider store={store}>
      <Counter/>
      </Provider>
      
    </div>
    
  );
}

export default App;
