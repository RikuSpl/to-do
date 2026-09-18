import { useState } from 'react'
import './components.css'

type TodoItem = {
    id: string
    title: string
}

export function Card() {


    const [inputValue, setInputValue] = useState("")
    const [todoItem, setTodoItem] = useState<TodoItem[]>([])
    
    function handleEvent(e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value);
    }

    function handleSubmitEvent(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        setTodoItem(currentTodo => [...currentTodo, { id: crypto.randomUUID(), title: inputValue },]) 
        
    }

    return  ( 

        <div className="card-container">
            <h1>Your To-do List</h1>
            <div className="card">
                <div className="item-add">
                    <form onSubmit = {handleSubmitEvent}>
                        <input id="todoInput"value={inputValue} onChange={handleEvent} placeholder='Add new todo item ...' maxLength={25} />
                        <button>Submit</button>
                    </form>
                    <div className="todo-list">
                        <p className="title">to-do list</p>
                        <ul>
                            {todoItem.length === 0 ? (
                                <li id="emptyList">Add a new todo into your list above!</li>
                            ) : (
                                todoItem.map(item => (
                                <li key={item.id}>
                                    <span className="item-name">{item.title}</span>
                                    <div className="item-buttons">
                                        <button className="button-done">Done</button>
                                        <button className="button-remove">Remove</button>
                                    </div>
                                </li>
                            ))
                            )}
                                                        
                        </ul>
                    </div>
                </div>
            </div>
        </div>
)
}