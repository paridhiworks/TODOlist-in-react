import React from "react";
import "./Mainbox.css";
import Todocreate from "./Todocreate/Todocreate";
import Todolist from "./Todolist/Todolist";

const Mainbox = () => {
  return (
    <div className="Mainbox">
      <h2 className="h2">TODO List</h2>
      <Todocreate />
      <Todolist />
    </div>
  );
};

export default Mainbox;
