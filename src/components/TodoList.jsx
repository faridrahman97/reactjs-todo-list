import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList({todos, handleDeleteTodo, handleEditTodo}) {
  let todoItems = todos.map((todo, todoIndex) => {
    return (
      <TodoCard id={todoIndex} key={todoIndex} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo}>
              <div>{todo}</div>
      </TodoCard>
    )
  })

  // the index gives it a way to pass in key so that we don't have the key unique issue
  return (
    <ul className={`flex flex-col gap-4 bg-slate-300 px-2 py-4 my-3 rounded-lg max-md:p-4 ${todos.length === 0 ? "hidden" : "block"}`}>
      {todoItems}
    </ul>
  )
}
