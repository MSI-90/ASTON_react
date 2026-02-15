import type {IPost} from "../types/Post.ts";
import {createEntityAdapter, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {postsApi} from "../../api/postsApi.ts";
import type {RootState} from "../../../../app/providers/store/Store.ts";
import {userApi} from "../../../user/api/userApi.ts";

const postAdapter = createEntityAdapter<IPost>();

export const postSelectors = postAdapter.getSelectors(
  (state: RootState) => state.post);

// первичное состояние, инициализация
const initialState = postAdapter.getInitialState({
  loading: false,
  error: false,
});

export const postSlice = createSlice({
  name: 'post',
  initialState: initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
      state.error = !state.loading;
    },
    setSuccess: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
      state.error = state.loading;
    },
    setError: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
      state.error = !state.loading;
    }
  },
  extraReducers: builder => {
    builder
      .addMatcher(
        postsApi.endpoints.getAllPosts.matchPending,
        (state) => {
          postSlice.caseReducers.setLoading(state, {payload: true, type: '' } );
        }
      );
    builder
      .addMatcher(
        postsApi.endpoints.getAllPosts.matchFulfilled,
        (state, action) => {
          postSlice.caseReducers.setSuccess(state, {payload: false, type: ''});
          postAdapter.setAll(state, action.payload);
        }
      );
    builder
      .addMatcher(postsApi.endpoints.getAllPosts.matchRejected,
        (state) => {
        postSlice.caseReducers.setError(state, {payload: false, type: ''} );
        }
      );

    builder
      .addMatcher(postsApi.endpoints.getPostById.matchPending,
        (state) => {
          postSlice.caseReducers.setLoading(state, {payload: true, type: '' } );
        }
      );
    builder
      .addMatcher(postsApi.endpoints.getPostById.matchFulfilled,
        (state, action) => {
          postSlice.caseReducers.setSuccess(state, {payload: false, type: ''});
          postAdapter.upsertOne(state, action.payload);
        }
      );
    builder
      .addMatcher(postsApi.endpoints.getPostById.matchRejected,
        (state) => {
          postSlice.caseReducers.setError(state, {payload: false, type: ''} );
        }
      );


    builder.addMatcher(userApi.endpoints.getPostsByUserId.matchFulfilled,
      (state, action) => {
        postSlice.caseReducers.setSuccess(state, {payload: false, type: ''});
      postAdapter.setAll(state, action.payload);
    })
  }
})

export default postSlice.reducer;