import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

import TodoMain from './components/TodoMain';

import './App.css';

const store = createStore(
  rootReducer
)

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: [],
    }
  }
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
