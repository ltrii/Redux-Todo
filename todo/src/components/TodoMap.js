import React from 'react';
import Todo from './Todo';
import {connect} from 'react-redux';
import { toggleTodo } from '../actions';



function TodoMap(props) {
  return (
    <div>
      {props.todos.map((todo, i)=> <Todo key={todo.id} todo={todo} style={{textDecorationLine: todo.completed ? 'line-through' : 'none'}} /> )}
    </div>
  )
}

const mapStateToProps = (state) => {
    console.log(state)
    return ({todos: state.todos})
}

export default connect(mapStateToProps, {toggleTodo})(TodoMap);