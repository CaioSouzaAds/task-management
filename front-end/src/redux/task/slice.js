import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: {
    id: "",
    name: "",
    status: "",
    image: "",
  },
  totalTaskPending: 0,
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    findTask: (state, action) => {
      state.totalTaskPending = action.payload.totalTaskPending;
    },
  },
});

export const { findTask } = taskSlice.actions;

export default taskSlice.reducer;
