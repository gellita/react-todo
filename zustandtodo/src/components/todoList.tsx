
import useTodoStore from '../store/todoStore';
import TodoItem from './todoItem';
import React from "react";

const TodoList: React.FC = () => {
    const todos = useTodoStore((state) => state.todos);
    const deleteTodo = useTodoStore((state) => state.deleteTodo);
    const toggleTodo = useTodoStore((state) => state.toggleTodo);

    return (
        <ul className="list">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onDelete={() => deleteTodo(todo.id)} onToggle={() => toggleTodo(todo.id)} />
            ))}
        </ul>
    );
};

export default TodoList;
