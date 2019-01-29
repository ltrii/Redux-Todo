import React from 'react';
import Todo from './Todo';
import {connect} from 'react-redux';
import { addTodo, toggleTodo, removeTodos, getTodos } from '../actions';



function TodoMap(props) {
  return (
    <div>
      {props.todos.map((todo, i)=> <Todo key={todo.id} onClick={toggleTodo(todo.key)} todo={todo} style={{textDecorationLine: todo.completed ? 'line-through' : 'none'}} /> )}
    </div>
  )
}

const mapStateToProps = (state) => {
    console.log(state)
    return ({todos: state.todos})
}

export default connect(mapStateToProps)(TodoMap);