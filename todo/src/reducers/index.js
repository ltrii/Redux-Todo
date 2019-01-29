import { ADD_TODO, TOGGLE_TODO, REMOVE_TODOS, GET_TODOS } from '../actions';
import { bindActionCreators } from 'redux';

const initialState = {
    todos: [
        'Eat some food',
    ]
}

function mainReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return 
                state.concat(action.payload);

        case TOGGLE_TODO:
            return 
                state.map(todo => {
                    return todo
                })
        case REMOVE_TODOS:
            return 
                state.filter(todo => !todo.completed)
            
        case GET_TODOS: 
            return action.payload
            
        default:
            return state;
    }
}

export default mainReducer;