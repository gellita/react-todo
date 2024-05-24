

import React from 'react';
import { Todo } from '../actions/todoActions';

interface TodoItemProps {
    todo: Todo;
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onToggle }) => {
    const handleDelete = () => {
        onDelete(todo.id);
    };

    const handleToggle = () => {
        onToggle(todo.id);
    };

    return (
        <div className={`todo ${todo.completed ? 'completedItem' : ''}`}>
            <li className="todo__item">{todo.text}</li>
            <div className="container__buttons">
                <button className="complete__button" onClick={handleToggle}>DON</button>
                <button className="delete__button" onClick={handleDelete}>DEL</button>
            </div>
        </div>
    );
};

export default TodoItem;
