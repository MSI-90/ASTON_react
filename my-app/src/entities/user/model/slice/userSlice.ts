import {createEntityAdapter, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IUser} from "../../User.ts";
import type {RootState} from '../../../../app/providers/store/Store.ts';
import {userApi} from "../../api/userApi.ts";

const userAdapter = createEntityAdapter<IUser>();

export const userSelector = userAdapter.getSelectors(
  (state:RootState) => state.user);

const initialState = userAdapter.getInitialState({
  currentUser: {} as IUser,
  currentUserId: 0,
  loading: false,
  error: false,
})

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setSuccess: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
      state.error = state.loading;
    },
    setCurrentUser: (state, action: PayloadAction<IUser>) => {
      state.currentUser = action.payload;
    },
    setCurrentUserId: (state, action: PayloadAction<number>) => {
      state.currentUserId = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(userApi.endpoints.getUserById.matchFulfilled,
        (state, action) => {
        userSlice.caseReducers.setSuccess(state, {payload: false, type:''});
        userSlice.caseReducers.setCurrentUser(state, {payload: action.payload, type:''});
        userAdapter.upsertOne(state, action.payload);
      })
  }
})

export const {setCurrentUserId} = userSlice.actions;

export default userSlice.reducer;