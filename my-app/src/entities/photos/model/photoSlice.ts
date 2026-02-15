import {createEntityAdapter, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IPhoto} from "./types/Photos.ts";
import type {RootState} from '../../../app/providers/store/Store.ts';
import {albumApi} from "../../album/api/albumsApi.ts";

const photoAdapter = createEntityAdapter<IPhoto>();

export const photoSelector = photoAdapter.getSelectors(
  (state: RootState) => state.photo);

const initialState = photoAdapter.getInitialState({
  currentAlbumId: 0,
  loading: false,
  error: false,
})

export const photoSlice = createSlice({
  name: 'photo',
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
    },
    setCurrentAlbumId: (state, action: PayloadAction<number>) => {
      state.currentAlbumId = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(albumApi.endpoints.getPhotosByAlbumId.matchPending,
        (state) => {
        photoSlice.caseReducers.setLoading(state, {payload: true, type: ''});
      });
    builder
      .addMatcher(albumApi.endpoints.getPhotosByAlbumId.matchFulfilled,
        (state, action) => {
        photoSlice.caseReducers.setSuccess(state, {payload: false, type: ''});
        photoAdapter.setAll(state, action.payload);
      });
    builder
      .addMatcher(albumApi.endpoints.getPhotosByAlbumId.matchRejected,
        (state) => {
        photoSlice.caseReducers.setError(state, {payload: false, type: ''});
      })
  }
});

export const { setCurrentAlbumId } = photoSlice.actions;

export default photoSlice.reducer;