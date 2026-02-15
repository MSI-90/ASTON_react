import {createEntityAdapter, createSlice, type PayloadAction} from "@reduxjs/toolkit";
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
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
      state.error = !state.loading;
    },
    setSuccess: (state, action: PayloadAction<boolean>) => {
      state.loading = state.error = action.payload;
    },
    setError: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
      state.error = !state.loading;
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(commentApi.endpoints.getAllComments.matchPending,
        (state) => {
        commentSlice.caseReducers.setLoading(state, {payload: true, type: ''});
      });
    builder
      .addMatcher(commentApi.endpoints.getAllComments.matchFulfilled,
        (state, action) => {
        commentSlice.caseReducers.setSuccess(state, {payload: false, type: ''});
        commentAdapter.setAll(state, action.payload);
      })
    builder
      .addMatcher(commentApi.endpoints.getAllComments.matchRejected,
        (state) => {
        commentSlice.caseReducers.setError(state, {payload: false, type: ''});
      })
  }
})

export default commentSlice.reducer;