import create from 'zustand';

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoStore {
    todos: Todo[];
    addTodo: (text: string) => void;
    deleteTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

const useTodoStore = create<TodoStore>((set) => ({
    todos: [],
    addTodo: (text: string) =>
        set((state) => ({
            todos: [
                ...state.todos,
                {
                    id: new Date().getTime(), // временно используем метку времени в качестве id
                    text,
                    completed: false,
                },
            ],
        })),
    deleteTodo: (id: number) =>
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
        })),
    toggleTodo: (id: number) =>
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ),
        })),
}));

export default useTodoStore;
