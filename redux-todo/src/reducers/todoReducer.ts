
import { Todo, TodoActionTypes, ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../actions/todoActions';

const initialState: Todo[] = [];

const todoReducer = (state = initialState, action: TodoActionTypes): Todo[] => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload);
        case TOGGLE_TODO:
            return state.map(todo =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            );
        default:
            return state;
    }
};

export default todoReducer;
