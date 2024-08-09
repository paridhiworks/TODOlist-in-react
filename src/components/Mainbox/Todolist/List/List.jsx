import React, { useState } from "react";
import "./List.css";
import { HiPencil } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../../../../features/todo/todoSlice";

const List = ({ taskInfo }) => {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(taskInfo?.taskName);

  const onEditHandler = () => {
    setIsEditing(true);
    setEditedText(taskInfo?.taskName);
  };

  const onSaveHandler = () => {
    dispatch(
      editTodo({
        editId: taskInfo?.id,
        editTask: editedText,
      })
    );
    setIsEditing(false);
  };

  return (
    <div className="list">
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <h3>{taskInfo?.taskName}</h3>
      )}
      <p>{moment(taskInfo?.createdAt).format("MMMM Do YYYY, h:mm:ss a")}</p>

      <div className="tool_icons">
        {isEditing ? (
          <IoCheckmarkDoneCircle
            size={25}
            className="rlist_icon"
            onClick={onSaveHandler}
          />
        ) : (
          <HiPencil size={25} className="elist_icon" onClick={onEditHandler} />
        )}

        <MdDelete
          size={27}
          className="dlist_icon"
          onClick={() => dispatch(deleteTodo(taskInfo?.id))}
        />
      </div>
    </div>
  );
};

export default List;
