import React from "react"
import TodoCard from "./components/TodoCard"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
// These are functional components, the function name is always capitalized and is the same as the filename
// This is our biggest functional component, all the magic happens here

//sometimes in react we use state vs variables. whenever you're using a variable that the user is going to interact with, then we have to set it as state
  const [todos, setTodos] = React.useState(['Go to the gym',
    'Make dinner',
    'Eat more fruits and veg'])

  const addTodo = (form) => {
    console.log(todos)
    setTodos(prevTodos => {
        return [...prevTodos, form.value]
    })
  }
  return (
    <>
        <TodoInput onClick={addTodo}/>
        <TodoList todos={todos}/>
    </>
  )
}

export default App
