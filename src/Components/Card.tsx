import { useState } from 'react'
import './components.css'
import { Item } from './Item'

export function Card() {

    const [inputValue, setInputValue] = useState("")
    function handleEvent(e) {
        return setInputValue(e.target.value);
    }


    return  ( 

        <div className="card-container">
            <h1>Your To-do List</h1>
            <div className="card">
                <div className="item-add">
                    <form>
                        <input value={inputValue} onChange={handleEvent} placeholder='Add new todo item ...'/>
                        <button>Submit</button>
                    </form>
                    <div className="todo-list">
                        <p className="title">to-do list</p>
                        <ul>
                            <Item />
                            <Item />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
)
}