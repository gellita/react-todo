
import React, { useState } from 'react';
import './index.css';
import { observer } from 'mobx-react';
import todoStore from './store/todoStore';

const App = observer(() => {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputText.trim() !== '') {
            todoStore.addTodo(inputText);
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
                <ul className="list">
                    {todoStore.todos.map(todo => (
                        <div key={todo.id} className={`todo ${todo.completed ? 'completedItem' : ''}`}>
                            <li className="todo__item">{todo.text}</li>
                            <div className="container__buttons">
                                <button className="complete__button" onClick={() => todoStore.toggleTodo(todo.id)}>DON</button>
                                <button className="delete__button" onClick={() => todoStore.deleteTodo(todo.id)}>DEL</button>
                            </div>
                        </div>
                    ))}
                </ul>
            </div>
            <footer></footer>
        </div>
    );
});

export default App;
