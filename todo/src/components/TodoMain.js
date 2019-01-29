import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addTodo, toggleTodo, removeTodos, getTodos } from '../actions';
import TodoForm from './TodoForm';
import TodoMap from './TodoMap';

class TodoMain extends Component {
    constructor() {
        super();
        this.state = {
            todo: '',
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
        <TodoForm todos={this.state.todos} />
        <TodoMap todos={this.props.todos} todoInput={this.todoInput} />
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