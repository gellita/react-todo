
import React, { useState } from 'react';
import './index.css';
import TodoList from './components/TodoList';
import { useDispatch } from 'react-redux';
import { addTodo } from './actions/todoActions';

const App: React.FC = () => {
    const dispatch = useDispatch();
    const [inputText, setInputText] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (inputText.trim() !== '') {
            dispatch(addTodo(inputText));
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
