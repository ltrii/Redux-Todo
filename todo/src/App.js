import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import mainReducer from './reducers';

import TodoMain from './components/TodoMain';

import './App.css';

const store = createStore(
  mainReducer
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
        <TodoMain todos={this.state.todos} />
        </Provider>
      </div>
    );
  }
}

export default App;
