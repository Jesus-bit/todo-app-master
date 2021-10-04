import React, {useEffect, useState, useRef} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './styles/Todo.scss';
import { TodoList } from './components/TodoList';

const KEYLocalStorage = 'todoApp.todos';

export function App(params) {
    const [Todos, setTodos] = useState([]);
    const TodoRef = useRef();
    useEffect(() => {
        const todosStorage = JSON.parse(localStorage.getItem(KEYLocalStorage))
        if (todosStorage) {
            setTodos(todosStorage);
        }
    }, [])
    useEffect(() => {
        localStorage.setItem(KEYLocalStorage, JSON.stringify(Todos));
    }, [Todos])

    const toggleTodo = (id) => {
        const newTodos = [...Todos]
        const Todo = newTodos.find(todo => todo.id === id);
        Todo.completed = !Todo.completed;
        setTodos(newTodos);
    }
    const deleteTodo = (id) => {
        const newTodos = [...Todos];
        const Todo = newTodos.find(todo =>  todo.id === id);
        const index = Todos.indexOf(Todo);
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }
    const handlerClearAll = () =>{
        const newTodos = Todos.filter(todo => !todo.completed)
        setTodos(newTodos)
    }
    const handlerTodoAdd = () => {
        const task = TodoRef.current.value;
        if (task === '') return;

        setTodos(prevTodos => {
            return [...prevTodos, {id: uuidv4(), task, completed: false}]
        })

        TodoRef.current.value = null;
    }
    return(
        <div className="App">
            <h1>#Todo</h1>
            <p>Te quedan {Todos.filter(todo => !todo.completed).length} tareas por terminar</p>
            {Todos.length === 0 && <p>Crea una tarea</p>}
            <TodoList   Todos={Todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
            <input className="input-new-task" ref={TodoRef} type="text" placeholder="neva tarea"/>
            <button className="button-add" onClick={handlerTodoAdd}>+</button>
            <button className="button-clear" onClick={handlerClearAll}>
                <span class="iconify" data-icon="ant-design:delete-filled"  data-rotate="180deg" data-flip="horizontal,vertical">
                </span>
            </button>
        </div>
    )
}