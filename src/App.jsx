import React, { useCallback, useState } from 'react';
import TaskInput from './Components/TaskInput';
import TaskList from './Components/TaskList';
import { data } from 'autoprefixer';


const TodoApp = () => {
  const [todo,setTodo]=useState('')  
  const [todos,setTodos]=useState([{
    text:'Hello',
    id:Date.now(),
    completed:'false',
}])
const handleTodoList= useCallback(()=>{
  setTodos((previousTodo)=>[
    ...previousTodo,
    {
      text:todo,
      id:Date.now(),
    completed:'false',
    }
  ])
  setTodo("")
},[todo])
const handleOnDelete= useCallback((id)=>{
  setTodos(todos.filter((data)=>data.id !== id))  
},[todos])
 
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Todo App</h1>
        <TaskInput value={todo} onChangeProp={(e)=>setTodo(e.target.value)} onClickProp={handleTodoList} />
        <TaskList todos={todos} onDelete={handleOnDelete}  />
      </div>
    </div>
  );
};

export default TodoApp;
