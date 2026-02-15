import {createEntityAdapter, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from '../../../../app/providers/store/Store.ts';
import {userApi} from "../../../user/api/userApi.ts";
import type {IAlbum} from "../types/Album.ts";

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
      .addMatcher(userApi.endpoints.getAlbumsByUserId.matchPending, (state) => {
        albumSlice.caseReducers.setLoading(state, {payload: true, type: ''})
      });
    builder
      .addMatcher(userApi.endpoints.getAlbumsByUserId.matchFulfilled,
        (state, action) => {
        albumSlice.caseReducers.setSuccess(state, {payload: false, type: ''})
          albumAdapter.setAll(state, action.payload);
      });
    builder
      .addMatcher(userApi.endpoints.getAlbumsByUserId.matchRejected,
        (state) => {
        albumSlice.caseReducers.setError(state, {payload: false, type: ''})
      });
  }
})

export default albumSlice.reducer;
