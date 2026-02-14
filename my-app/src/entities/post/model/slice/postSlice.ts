import type {IPost} from "../../Post.ts";
import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
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
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(
        postsApi.endpoints.getAllPosts.matchPending,
        (state) => {
          state.loading = true;
          state.error = false;
        }
      );
    builder
      .addMatcher(
        postsApi.endpoints.getAllPosts.matchFulfilled,
        (state, action) => {
          state.loading = false;
          state.error = false;
          postAdapter.setAll(state, action.payload);
        }
      );
    builder
      .addMatcher(postsApi.endpoints.getAllPosts.matchRejected,
        (state) => {
          state.loading = false;
          state.error = true;
        }
      );

    builder
      .addMatcher(postsApi.endpoints.getPostById.matchPending,
        (state) => {
          state.loading = true;
          state.error = false;
        }
      );
    builder
      .addMatcher(postsApi.endpoints.getPostById.matchFulfilled,
        (state, action) => {
          state.loading = false;
          state.error = false;
          postAdapter.upsertOne(state, action.payload);
        }
      );
    builder
      .addMatcher(postsApi.endpoints.getPostById.matchRejected,
        (state) => {
          state.loading = false;
          state.error = true;
        }
      );

    builder.addMatcher(userApi.endpoints.getPostsByUserId.matchFulfilled,
      (state, action) => {
        state.loading = false;
        state.error = false;
      postAdapter.setAll(state, action.payload);
    })
  }
})

export default postSlice.reducer;