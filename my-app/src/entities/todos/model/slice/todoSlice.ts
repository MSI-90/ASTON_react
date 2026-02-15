import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import type {ITodos} from "../types/Todos.ts";
import type {RootState} from "../../../../app/providers/store/Store.ts";
import {userApi} from "../../../user/api/userApi.ts";

const todosAdapter = createEntityAdapter<ITodos>();

export const todoSelector = todosAdapter.getSelectors(
  (state:RootState) => state.todo);

const initialState = todosAdapter.getInitialState({
  loading: false,
  error: false,
})

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(userApi.endpoints.getTodosByUserId.matchPending,
        (state) => {
        state.loading = true;
        state.error = false;
      });
    builder
      .addMatcher(userApi.endpoints.getTodosByUserId.matchFulfilled,
        (state, action) => {
        state.loading = false;
        state.error = false;
        todosAdapter.setAll(state, action.payload);
    });
    builder
      .addMatcher(userApi.endpoints.getTodosByUserId.matchRejected,
        (state) => {
        state.loading = false;
        state.error = true;
      })
  }
})

export default todoSlice.reducer;