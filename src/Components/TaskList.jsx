import React from 'react'

const TaskList = ({todos,onDelete,toggleTodo}) => {
  return (
    <div>
        <ul className="space-y-4">
       {todos.map((todo)=>{
        return(
         <li className="flex justify-between items-center px-4 py-3 border rounded-md" key={todo.id}>
           <span className={`cursor-pointer text-lg ${todo.completed ? 'line-through' : ''}`}  onClick={()=>toggleTodo(todo.id)}>{todo.text}</span>
           <button className="text-red-500 hover:text-red-600 text-lg" onClick={()=>onDelete(todo.id)}>Delete</button>
         </li>
        )
    })} 
    </ul>
    </div>
  )
}

export default TaskList


