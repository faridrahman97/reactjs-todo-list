import React from 'react'

function TodoInput({onClick}) {
    const [inputFieldValue, setInputFieldValue] = React.useState("")

    const updateInputField = (event) => {
        console.log(event.target.value)
    }
  return (
    <header>
        <h1 className="font-lilita tracking-wider text-center max-md:text-5xl text-4xl pb-5">Todo List</h1>
        <div className="w-full flex justify-between gap-4">
            <input onChange={updateInputField} className="flex-1 border-none focus:outline-none focus:outline-slate-500 px-4 py-2 rounded-md font-lilita max-md:p-4 text-lg text-slate-600" type="text" placeholder='Enter todo...' />
            <button className="bg-slate-300 text-slate-600 hover:opacity-70 active:opacity-100 rounded-md px-6 py-2 duration-75" onClick={onClick}>Add</button>
        </div>
    </header>
  )
}

export default TodoInput