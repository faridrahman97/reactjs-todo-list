import React from "react"
import TodoCard from "./components/TodoCard"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
// These are functional components, the function name is always capitalized and is the same as the filename
// This is our biggest functional component, all the magic happens here

//sometimes in react we use state vs variables. whenever you're using a variable that the user is going to interact with, then we have to set it as state
  const [todos, setTodos] = React.useState([])
  const [inputFieldValue, setInputFieldValue] = React.useState("")

  // we use useeffect to listen to different events that manipulate state and so that you can use it to change, it will render on the first render and then never again if you leave it blank, it will run after a refres

  React.useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if(localTodos) {
      setTodos(JSON.parse(localTodos))
    } else {
      return
    }
  }, [])

    // when state changes, the dom is repainted and changed. Whenever you change the state, the dom is updated to represent the new stateful variable
  const handleAddTodos= (newTodo) => {
    let newTodoList = [...todos, newTodo]
    localStorage.setItem('todos', JSON.stringify(newTodoList))
    setTodos(newTodoList)
  }

  const handleDeleteTodo = (givenIndex) => {
    //we are checking to see if the givenIndex is not equal to the todoIndex in the array, if it isn't then it can stay in the arry
    let newTodoList = todos.filter((todo, todoIndex) => todoIndex !== givenIndex)
    localStorage.setItem('todos', JSON.stringify(newTodoList))
    setTodos(newTodoList)
  }

  const handleEditTodo = (givenIndex) => {
    setInputFieldValue(todos[givenIndex])
    handleDeleteTodo(givenIndex)
  }

  return (
    <>
        <TodoInput handleAddTodos={handleAddTodos} setInputFieldValue={setInputFieldValue} inputFieldValue={inputFieldValue}/>
        <main>
          <TodoList setInputFieldValue={setInputFieldValue} todos={todos} handleDeleteTodo = {handleDeleteTodo} handleEditTodo={handleEditTodo}/>
        </main>
    </>
  )
}

export default App
