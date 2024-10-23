import React, { useEffect } from "react";

const TaskInput = ({ onChangeProp, onClickProp,value }) => {
  // useEffect(()=>{
  //   // console.log('on click function changed');
  // },[onClickProp])
  return (
    <div className="flex mb-6">
      <input
        type="text"
        placeholder="Add new task"
        className="w-full px-4 py-3 border rounded-l-md focus:outline-none text-base"
        onChange={onChangeProp}
        value={value}
      />
      <button
        onClick={onClickProp}
        className="bg-blue-500 text-white px-6 py-3 rounded-r-md text-base hover:bg-blue-600 focus:outline-none"
      >
        Add
      </button>
    </div>
  );
};

export default TaskInput;
