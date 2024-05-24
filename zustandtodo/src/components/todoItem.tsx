import { Todo } from '../store/todoStore';

interface TodoItemProps {
    todo: Todo;
    onDelete: () => void;
    onToggle: () => void;
}


const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onToggle }) => {
    return (
        <div className={`todo ${todo.completed ? 'completedItem' : ''}`}>
            <li className="todo__item">{todo.text}</li>
            <div className="container__buttons">
                <button className="complete__button" onClick={onToggle}>DON</button>
                <button className="delete__button" onClick={onDelete}>DEL</button>
            </div>
        </div>
    );
};

export default TodoItem;
