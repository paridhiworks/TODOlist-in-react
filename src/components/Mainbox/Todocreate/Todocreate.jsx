import React, { useState } from "react";
import "./Todocreate.css";
import { HiPencilSquare } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../features/todo/todoSlice";

const Todocreate = () => {
  const dispatch = useDispatch();
  const [todotext, setTodotext] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todotext !== "") {
      dispatch(addTodo(todotext));
      setTodotext("");
    }
  };

  return (
    <section className="Todocreate">
      <HiPencilSquare size={40} className="pencil_icon" />
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Add a todo"
          value={todotext}
          onChange={(e) => setTodotext(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Todocreate;
