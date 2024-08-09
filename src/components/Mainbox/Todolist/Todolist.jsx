import React from "react";
import "./Todolist.css";
import List from "./List/List";
import { useSelector } from "react-redux";

const Todolist = () => {
  const todoTasks = useSelector((state) => state.todo.todo);

  return (
    <div className="todolist">
      {todoTasks?.length > 0 ? (
        todoTasks?.map((result) => <List key={result.id} taskInfo={result} />)
      ) : (
        <p>Todo list is empty</p>
      )}
    </div>
  );
};

export default Todolist;
