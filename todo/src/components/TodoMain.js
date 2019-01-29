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

    componentDidMount() {
        const todoAll = JSON.parse(localStorage.getItem('todos'));
        if(todoAll !== null) {
            this.props.getTodos(todoAll);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.todos !== this.props.todos) {
          localStorage.setItem('todos', JSON.stringify(nextProps.todos));
        }
    }
    
    
completeTodo = todoID => {
        this.props.toggleTodo(todoID);
    }
    


  render() {
    console.log(this.props.todos);
    return (
      <div>
        <h1>Todo</h1>
        <TodoForm todos={this.props.todos} />
        <TodoMap todos={this.props.todos} />
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