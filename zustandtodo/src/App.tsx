
import React, { useState } from 'react';
import './index.css';
import useTodoStore from './store/todoStore';
import TodoList from './components/todoList';

const App: React.FC = () => {
    const [inputText, setInputText] = useState('');
    const addTodo = useTodoStore((state) => state.addTodo);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (inputText.trim() !== '') {
            addTodo(inputText);
            setInputText('');
        }
    };

    return (
        <div>
            <header>
                <p className="header__text">TO DO</p>
                <p>{new Date().toLocaleDateString()}</p>
            </header>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Create new TODO..."
                    className="input"
                    value={inputText}
                    onChange={handleInputChange}
                />
                <button className="button__add" type="submit">ADD</button>
            </form>
            <div className="container">
                <TodoList />
            </div>
            <footer></footer>
        </div>
    );
};

export default App;
