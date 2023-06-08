import React, { useState } from 'react'
import { TodosPreview } from './todos-preview';

export function TodoList({ todos, checklist, onDeleteTodo, onAddTodo, onEditTodo, onClose}) {
    const [isAdding, setIsAdding] = useState(false);
    const handleFocus = (ev) => ev.target.select();
    const [todoTitle, setTodoTitle] = useState('');

    function handleChange(ev) {
        setTodoTitle(ev.target.value)
    }

    function onSubmitAdding(ev) {
        ev.preventDefault()
        onAddTodo(checklist._id, todoTitle)
        setIsAdding(false)
    }

    function handleKeyPress(ev) {
        if (ev.key === 'Enter') {
            onSubmitAdding(ev)
        }
    }

    function toggleAdding() {
        setIsAdding(!isAdding);
    }

    if (!todos) return <div></div>
    return (
        <div>
            <ul className='todos-list clean-list'>
                {todos && todos.map((todo) => (
                    <li key={todo._id}><TodosPreview todo={todo} checklist={checklist} onDeleteTodo={onDeleteTodo} onEditTodo={onEditTodo} onClose={onClose}/>
                    </li>
                ))}
            </ul>
            {isAdding &&
                <form onSubmit={onSubmitAdding}>
                    <textarea
                        rows="2"
                        value={todoTitle}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onKeyPress={handleKeyPress}
                    ></textarea>
                    <div className='textarea-btns flex'>
                        <button className='btn save'>add</button>
                        <button className='x-btn' onClick={onClose}>Cancel</button>
                    </div>
                </form>}
            {!isAdding &&
                <button onClick={toggleAdding}>
                    <button className='checklist-add-btn'>Add an item</button>
                </button>
            }
        </div>
    )
}
