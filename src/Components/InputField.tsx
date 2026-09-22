import { useState } from "react"

type TodoItem = {
  id: string
  title: string
  completed: boolean
}

type TodoListProps = {
  todoItem: TodoItem[]
  setTodoItem: React.Dispatch<React.SetStateAction<TodoItem[]>>
}

export function InputField({ todoItem, setTodoItem }: TodoListProps) {

    const [inputValue, setInputValue] = useState("")

    function handleEvent(e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value);
    }

    function handleSubmitEvent(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()

        if(todoItem.length >= 8) {
            return
        }

        setTodoItem(currentTodo => [...currentTodo, { id: crypto.randomUUID(), title: inputValue, completed: false },]) 
        
        setInputValue("")

    }

    return (
        <form onSubmit = {handleSubmitEvent}>
            <input id="todoInput" value={inputValue} onChange={handleEvent} placeholder='Add new todo item ...' maxLength={25} />
            <button>Submit</button>
        </form>
    )



}