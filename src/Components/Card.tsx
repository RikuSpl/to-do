import './components.css'

export function Card() {
    return  ( 

        <div className="card-container">
            <h1>Your To-do List</h1>
            <div className="card">
                <div className="item-add">
                    <form>
                        <input type="text" placeholder='Add new todo item ...'/>
                        <button>Submit</button>
                    </form>
                    <div className="todo-list">
                        <p className="title">to-do list</p>
                        <ul>
                            <li>
                                <span className="item-name">test</span>
                                <div className="item-buttons">
                                    <button className="button-done">Done</button>
                                    <button className="button-remove">Remove</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
)
}