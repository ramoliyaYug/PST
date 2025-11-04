import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo } from './store/todoSlice'

const Todo = () => {
  // Access todos from Redux store
  const todos = useSelector((state) => state.myTodo.todos)
  
  // Create dispatch function
  const dispatch = useDispatch()

  // Local state for input field
  const [newTodo, setNewTodo] = useState('')

  // Handle adding a new todo
  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo))
      setNewTodo('') // clear input
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Todo Component</h2>

      {/* Input field to type a new todo */}
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      {/* List of all todos */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button
              onClick={() => dispatch(removeTodo(index))}
              style={{ marginLeft: '10px' }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
