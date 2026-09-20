import { useState } from 'react'
import './components.css'

type TodoItem = {
    id: string
    title: string
    completed: boolean
}

export function Card() {


    const [inputValue, setInputValue] = useState("")
    const [todoItem, setTodoItem] = useState<TodoItem[]>([])
    
    function handleEvent(e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value);
    }

    function handleSubmitEvent(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()

        if(todoItem.length >= 8) {
            return
        }

        setTodoItem(currentTodo => [...currentTodo, { id: crypto.randomUUID(), title: inputValue, completed: false },]) 
        
    }

    function handleDoneEvent(id: string) {

        setTodoItem(currentTodo => {
            return currentTodo.map(item => {
                if(item.id === id) {
                    if(item.completed == true) {
                        return {...item, completed: false}
                    } else {
                        return {...item, completed: true}
                    }

                }
            return item
        })
        })
    
    }
    
    function handleRemoveEvent(id: string) {
        
        setTodoItem(todoItem.filter(item => item.id !== id))

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
                                <li className="empty-list">Add a new todo into your list above!</li>
                            ) : (
                                    todoItem.map(item => (
                                    <li key={item.id}>
                                        {/* checks if item.completed is true and gives a css className accordingly*/}
                                        {item.completed === true ? <span className="item-name completed">{item.title}</span> : <span className="item-name">{item.title}</span>}

                                        <div className="item-buttons">
                                            <button className="button-done" onClick={() => handleDoneEvent(item.id)}>Done</button>
                                            <button className="button-remove" onClick={() => handleRemoveEvent(item.id)}>Remove</button>
                                        </div>
                                    </li>
                                ))
                                )
                            }

                            {todoItem.length >= 8 && (<li className="empty-list">You have reached the maximum number of todos</li>)}
                                                        
                        </ul>
                    </div>
                </div>
            </div>
        </div>
)
}