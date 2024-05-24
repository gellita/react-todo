

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { Todo } from '../actions/todoActions';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
    const todos = useSelector((state: RootState) => state);
    const dispatch = useDispatch();

    const handleDelete = (id: number) => {
        dispatch({ type: 'DELETE_TODO', payload: id });
    };

    const handleToggle = (id: number) => {
        dispatch({ type: 'TOGGLE_TODO', payload: id });
    };

    return (
        <ul className="list">
            {todos.map((todo: Todo) => (
                <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} onToggle={handleToggle} />
            ))}
        </ul>
    );
};

export default TodoList;
