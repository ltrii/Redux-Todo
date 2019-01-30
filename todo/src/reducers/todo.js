import { ADD_TODO, TOGGLE_TODO, REMOVE_TODOS, GET_TODOS } from '../actions';

const iniTodo = [
    {
        todo: 'Be cool',
        id: 0,
        completed: false
    },
]

const mainReducer = (state = iniTodo, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload]
        case TOGGLE_TODO:
            return state.map(todo => {
                    return todo
                })
        case REMOVE_TODOS:
            return (
                state.filter(todo => !todo.completed)
            )
        case GET_TODOS: 
            
            return (
                action.payload
            )
            
        default:
            return state;
    }
}

export default mainReducer;
