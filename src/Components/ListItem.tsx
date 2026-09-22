

type TodoItem = {
    id: string
    title: string
    completed: boolean
}

type TodoItemProps = {
    todoItem: TodoItem[]
    setTodoItem: React.Dispatch<React.SetStateAction<TodoItem[]>>
}

export function ListItem({ todoItem, setTodoItem }: TodoItemProps) {



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


    return (
        <>
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
        
    </>
    )
}