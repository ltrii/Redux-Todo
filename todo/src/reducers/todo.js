import { ADD_TODO, TOGGLE_TODO, REMOVE_TODOS, GET_TODOS } from '../actions';
import { bindActionCreators } from 'redux';

const iniTodo = [
    {
        todo: 'Be cool',
        id: 0,
        completed: false
    },
]

export default (todos = iniTodo, action) => {
    switch (action.type) {
        case ADD_TODO:
            return (
              [...todos, action.payload]
            )
        case TOGGLE_TODO:
            return (
                console.log("toggle"),
                todos.map(todo => {
                    return todo
                }))
        case REMOVE_TODOS:
            return (
                todos.filter(todo => !todo.completed)
            )
        case GET_TODOS: 
            return action.payload;
            
        default:
            return todos;
    }
}
