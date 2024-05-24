import { makeObservable, observable, action } from 'mobx';

class TodoStore {
    todos = [];

    constructor() {
        makeObservable(this, {
            todos: observable,
            addTodo: action,
            deleteTodo: action,
            toggleTodo: action,
        });
    }

    addTodo = (text) => {
        this.todos.push({
            id: new Date().getTime(),
            text,
            completed: false,
        });
    };

    deleteTodo = (id) => {
        this.todos = this.todos.filter((todo) => todo.id !== id);
    };

    toggleTodo = (id) => {
        this.todos = this.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
    };
}

const todoStore = new TodoStore();
export default todoStore;
