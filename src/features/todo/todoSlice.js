import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  todo: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTask = {
        id: nanoid(),
        lastUpdatedAt: new Date(),
        taskName: action.payload,
      };

      state.todo.push(newTask);
    },
    deleteTodo: (state, action) => {
      const updateTodolist = state.todo.filter(
        (res) => res?.id !== action.payload
      );
      state.todo = updateTodolist;
    },

    editTodo: (state, action) => {
      const updateTodolist = state.todo.map((res) =>
        res?.id !== action.payload.editId
          ? res
          : {
              ...res,
              lastUpdatedAt: new Date(),
              taskName: action.payload.editTask,
            }
      );
      state.todo = updateTodolist;
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
