import React from 'react'

export default function TodoCard({children, handleDeleteTodo, handleEditTodo, id}) {
  return (
    <li className="bg-slate-600 px-2 py-3 rounded-lg flex justify-between items-center max-md:text-lg max-md:px-4 text-md">
      {children}
      <div className="flex gap-3 text-lg">
        <i className="fa-solid fa-pen-to-square cursor-pointer hover:text-blue-200" onClick={() => handleEditTodo(id)}></i>
        <i className="fa-solid fa-trash-can cursor-pointer hover:text-red-200" onClick={() => handleDeleteTodo(id)}></i>
      </div>
    </li>
  )
}