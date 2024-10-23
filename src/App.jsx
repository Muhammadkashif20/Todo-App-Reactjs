import React, { useState } from 'react';
import TaskInput from './Components/TaskInput';
import TaskList from './Components/TaskList';

const TodoApp = () => {
  const [todo,setTodo]=useState('')
  const [todos,setTodos]=useState([{
    text:'Hello',
    id:Date.now(),
}])
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Todo App</h1>
        <TaskInput value={todo} onChangeProp={(e)=>console.log(e.target.value)}/>
        <TaskList todos={todos} />
      </div>
    </div>
  );
};

export default TodoApp;
