import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: null,
  totalTaskPending: 0,
  listTasks: [],
  loading: false,
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    findTask: (state, action) => {
      return {
        ...state,
        totalTaskPending: action.payload.totalTaskPending,
      };
    },
    fetchTasks: (state) => {
      state.loading = true;
    },
    fetchTasksSuccess: (state, action) => {
      state.listTasks = action.payload;
      state.loading = false;
    },
    fetchTasksFailure: (state, action) => {
      console.log("CAIU NA FAILURE");
      console.log(action.payload);
      state.loading = false;
    },
  },
});

export const { findTask, fetchTasks, fetchTasksSuccess, fetchTasksFailure } =
  taskSlice.actions;

export default taskSlice.reducer;
