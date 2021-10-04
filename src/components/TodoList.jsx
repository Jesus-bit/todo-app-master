import React from 'react'
import TodoItem from './TodoItem'

export function TodoList({Todos, toggleTodo, deleteTodo}) {
    return (
        <ul className="todo-list">
            

            {Todos.map( Todo =>
                    <TodoItem key={Todo.id} todo={Todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
            )}
        </ul>
    )
}
