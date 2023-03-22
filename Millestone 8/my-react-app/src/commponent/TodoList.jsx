import { useState } from "react"

export const TodoList = () => {
    const [todos,setTodos] = useState([]);




    return (
        <div>
            <h1>lkasdlkfjkl</h1>
            <h1>ToDo List</h1>
            <form onSubmit={AddTodo}>
                <input type="text" name="todolist" placeholder="Enter Todo List...." />
                <button type="submit">Add ToDo</button>
            </form>
        </div>
    )
}