import React from 'react'

function TodoInput({handleAddTodos, setInputFieldValue, inputFieldValue}) {

    const updateInputField = (event) => {
        setInputFieldValue(event.target.value)
    }

    const addTodoAndReset = (todoItem) => {
        handleAddTodos(todoItem)
        setInputFieldValue("")
    }

  return (
    <header>
        <h1 className="font-lilita tracking-wider text-center max-md:text-5xl text-4xl pb-5">Todo List</h1>
        <form className="w-full flex justify-between gap-4">
            {/* setting the value of the input will set it and allow you to clear it using set state functions */}
            <input id="input-field" value = {inputFieldValue} onChange={updateInputField} className="flex-1 border-none focus:outline-none focus:outline-slate-500 px-4 py-2 rounded-md font-lilita max-md:p-4 text-lg text-slate-600" type="text" placeholder='Enter todo...' />
            <button disabled={inputFieldValue.length === 0 ? true : false} className="bg-slate-300 text-slate-600 hover:opacity-70 active:opacity-100 rounded-md px-6 py-2 duration-75" onClick={() => addTodoAndReset(inputFieldValue)}>Add</button>
        </form>
    </header>
  )
}

export default TodoInput