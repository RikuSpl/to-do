import { useEffect, useState } from 'react'
import './components.css'
import { InputField } from './InputField'
import { ListItem } from './ListItem'

type TodoItem = {
    id: string
    title: string
    completed: boolean
}

export function Card() {

    const [todoItem, setTodoItem] = useState<TodoItem[]>(() => {
        const localValue = localStorage.getItem("ITEMS")
        if(localValue == null) {
            return []
        }
        return JSON.parse(localValue)
    })

    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(todoItem))
    },[todoItem] )
    


    return  ( 

        <div className="card-container">
            <h1>Your To-do List</h1>
            <div className="card">
                <div className="item-add">

                    <InputField todoItem={todoItem} setTodoItem={setTodoItem}/>

                    <div className="todo-list">
                        <p className="title">to-do list</p>
                        <ul>
                           
                            <ListItem todoItem={todoItem} setTodoItem={setTodoItem} />

                        </ul>
                    </div>
                </div>
            </div>
        </div>
)
}