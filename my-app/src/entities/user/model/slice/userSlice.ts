import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import type {IUser} from "../../User.ts";
import type {RootState} from '../../../../app/providers/store/Store.ts';
import {userApi} from "../../api/userApi.ts";

const userAdapter = createEntityAdapter<IUser>();

export const userSelector = userAdapter.getSelectors(
  (state:RootState) => state.user);

const initialState = userAdapter.getInitialState({
  currentUser: {} as IUser,
  loading: false,
  error: false,
})

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(userApi.endpoints.getUserById.matchFulfilled,
        (state, action) => {
        state.loading = false;
        state.error = false;
        state.currentUser = action.payload;
        userAdapter.upsertOne(state, action.payload);
      })
  }
})

export default userSlice.reducer;