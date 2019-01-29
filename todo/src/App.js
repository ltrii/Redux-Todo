import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import TodoMain from './components/TodoMain';

import './App.css';

const store = createStore(
  
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
        <TodoMain />
        </Provider>
      </div>
    );
  }
}

export default App;
