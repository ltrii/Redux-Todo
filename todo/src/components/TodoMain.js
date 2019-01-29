import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addTodo, toggleTodo, removeTodos, getTodos } from '../actions';

class TodoMain extends Component {
    constructor() {
        super();
        this.state = {
            body: ''
        }
    }
    
completeTodo = todoKey => {
        this.props.toggleTodo(todoKey);
    }

todoInput = ev => {
    this.setState({ [ev.target.name]: ev.target.value })
}
    


  render() {
    return (
      <div>
        <h1>Todo</h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
      todos: state.todos
    };
  };
  
  export default connect(mapStateToProps, {
    addTodo,
    toggleTodo,
    removeTodos,
    getTodos
  })(TodoMain);