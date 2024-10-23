import React from 'react'

const TaskList = ({todos}) => {
  return (
    <div>
        <ul className="space-y-4">
       {todos.map((text)=>{
        return(
         <li className="flex justify-between items-center px-4 py-3 border rounded-md" key={text.id}>
           <span className="text-gray-700 text-lg">{text.text}</span>
           <button className="text-red-500 hover:text-red-600 text-lg">Delete</button>
         </li>
        )
    })}
    </ul>
    </div>
  )
}

export default TaskList


