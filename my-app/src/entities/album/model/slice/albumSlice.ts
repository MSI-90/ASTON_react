import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import type {RootState} from '../../../../app/providers/store/Store.ts';
import {userApi} from "../../../user/api/userApi.ts";
import type {IAlbum} from "../../Album.ts";

const albumAdapter = createEntityAdapter<IAlbum>();

export const albumSelector = albumAdapter.getSelectors(
  (state: RootState) => state.album);

const initialState = albumAdapter.getInitialState({
  loading: false,
  error: false,
})

export const albumSlice = createSlice({
  name: 'userAlbum',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(userApi.endpoints.getAlbumsByUserId.matchPending, (state) => {
        state.loading = true;
        state.error = false;
      });
    builder
      .addMatcher(userApi.endpoints.getAlbumsByUserId.matchFulfilled,
        (state, action) => {
          state.loading = false;
          state.error = false;
          albumAdapter.setAll(state, action.payload);
        })
    builder
      .addMatcher(userApi.endpoints.getAlbumsByUserId.matchRejected,
        (state) => {
          state.loading = false;
          state.error = true;
        })
  }
})

export default albumSlice.reducer;
