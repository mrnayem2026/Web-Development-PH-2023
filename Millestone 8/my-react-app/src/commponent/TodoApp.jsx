import React, { useState } from 'react';   // Import React and useState hook

function TodoApp() {
  const [todos, setTodos] = useState([]);  // Initialize state variable using useState hook

  const handleAddTodo = (event) => {        // Define function to handle adding a todo
    event.preventDefault();                // Prevent page from refreshing on form submission
    const newTodo = event.target.todo.value; // Get the value of the todo input field
    setTodos([...todos, newTodo]);          // Add the new todo to the existing list of todos
    event.target.todo.value = '';           // Clear the input field after adding the todo
  };

  const handleDeleteTodo = (index) => {     // Define function to handle deleting a todo
    const newTodos = [...todos];            // Create a copy of the existing list of todos
    newTodos.splice(index, 1);              // Remove the todo at the specified index
    setTodos(newTodos);                     // Update the list of todos
  };

  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={handleAddTodo}>       
        <input type="text" name="todo" />
        <button type="submit">Add Todo</button>
      </form>
      <ul>                                  
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button> 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;                      // Export the TodoApp component
