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
            return {

            };
        case TOGGLE_TODO:
            return {

            };
        case REMOVE_TODOS:
            return {

            }
        case GET_TODOS: 
            return {
                
            }
    }
}

export default mainReducer;