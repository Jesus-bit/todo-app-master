import React from 'react'

export default function TodoItem({todo, toggleTodo, deleteTodo}) {
    const {id, task, completed} = todo;

    const handlerTodoClick = () => {
        toggleTodo(id);
    }
    const handlerDeleteTodo = () => {
        deleteTodo(id)
    }
    return (
        <li className={`todo-item ${completed && 'task-completed'}`}>    
            <input type="checkbox" checked={completed} onChange={handlerTodoClick} />
            <p className={completed && 'task-completed'}>
                {task}
            </p>
            <button onClick={handlerDeleteTodo}><span class="iconify" data-icon="ant-design:delete-filled"  data-rotate="180deg" data-flip="horizontal,vertical"></span></button>
        </li>
    )
}
