import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import type {IComment} from "../../Comment.ts";
import type {RootState} from "../../../../app/providers/store/Store.ts";
import {commentApi} from "../../api/commentApi.ts";


const commentAdapter = createEntityAdapter<IComment>();

export const commentSelectors = commentAdapter.getSelectors(
  (state:RootState)=> state.comment);

const initialState = commentAdapter.getInitialState({
  loading: false,
  error: false,
});

export const commentSlice = createSlice({
  name: 'comment',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(commentApi.endpoints.getAllComments.matchPending,
        (state) => {
        state.loading = true;
        state.error = false;
      });
    builder
      .addMatcher(commentApi.endpoints.getAllComments.matchFulfilled,
        (state, action) => {
        state.loading = false;
        state.error = false;
        commentAdapter.setAll(state, action.payload);
      })
    builder
      .addMatcher(commentApi.endpoints.getAllComments.matchRejected,
        (state) => {
        state.loading = false;
        state.error = true;
      })
  }
})

export default commentSlice.reducer;