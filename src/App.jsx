import React, { useCallback, useState } from 'react';
import TaskInput from './Components/TaskInput';
import TaskList from './Components/TaskList';

const TodoApp = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([{
    text: 'Hello',
    id: Date.now(),
    completed: false, 
  }]);

  const handleTodoList = useCallback(() => {
    setTodos((previousTodo) => [
      ...previousTodo,
      {
        text: todo,
        id: Date.now(),
        completed: false, 
      },
    ]);
    setTodo("");
  }, [todo]);

  const handleOnDelete = useCallback((id) => {
    const filterItem=todos.filter((data) => data.id !== id)
    setTodos(filterItem)
  }, [todos]);

  const handleOnToggle = useCallback((id) => {
    // Log the clicked todo data
    const todoItem = todos.find((data) => data.id === id);
    console.log('Todo Clicked=>', todoItem);
    
    // Toggle completed status
    setTodos((prevTodos) =>
      prevTodos.map((todo) => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, [todos]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Todo App</h1>
        <TaskInput value={todo} onChangeProp={(e) => setTodo(e.target.value)} onClickProp={handleTodoList} />
          <div className='flex item-cener justify-center '> 
              <button className={`${filterItem=='All'? 'bg-green-700':'bg-green-400'} m-2 p-2 text-white rounded-md`}>All</button>
              <button className={`${filterItem=='Completed'? 'bg-green-700':'bg-green-400'} m-2 p-2 text-white rounded-md`}>Completed</button>
              <button className={`${filterItem=='unCompleted'? 'bg-green-700':'bg-green-400'} m-2 p-2 text-white rounded-md`}>unCompleted</button>
          </div>
        <TaskList todos={todos} onDelete={handleOnDelete} toggleTodo={handleOnToggle} />
      </div>
    </div>
  );
};

export default TodoApp;
