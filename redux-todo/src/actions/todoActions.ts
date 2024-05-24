
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export interface AddTodoAction {
    type: typeof ADD_TODO;
    payload: Todo;
}

export interface DeleteTodoAction {
    type: typeof DELETE_TODO;
    payload: number; // id
}

export interface ToggleTodoAction {
    type: typeof TOGGLE_TODO;
    payload: number; // id
}

export type TodoActionTypes = AddTodoAction | DeleteTodoAction | ToggleTodoAction;

export const addTodo = (text: string): AddTodoAction => ({
    type: ADD_TODO,
    payload: {
        id: new Date().getTime(),
        text,
        completed: false,
    },
});

export const deleteTodo = (id: number): DeleteTodoAction => ({
    type: DELETE_TODO,
    payload: id,
});

export const toggleTodo = (id: number): ToggleTodoAction => ({
    type: TOGGLE_TODO,
    payload: id,
});
