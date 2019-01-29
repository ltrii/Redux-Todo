import React from 'react';
import Todo from './Todo';
import { addTodo, toggleTodo, removeTodos, getTodos } from '../actions';



function TodoMap(props) {
  return (
    <div>
      {props.todos.map((todo, i)=> <Todo key={i} onClick={toggleTodo(todo.key)} todo={todo} style={{textDecorationLine: todo.completed ? 'line-through' : 'none'}} /> )}
    </div>
  )
}

export default TodoMap;