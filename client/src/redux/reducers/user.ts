import { createSlice } from "@reduxjs/toolkit";
import { User } from "../interface/user";

const initialState: User = {
    isUserLoading: false,
    isAuthenticated: false,
    userDetail: {
        _id: "",
        addresses: [],
        avatar: {
            public_id: "",
            url: "",
        },
        createdAt: "",
        email: "",
        name: "",
        role: "", 
    }
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loadUser: (state) => {
      state.isUserLoading = true;
    },
    loadUserSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.isUserLoading = false;
      state.userDetail = action.payload;
    },
    loadUserFail: (state) => {
      state.isAuthenticated = false;
      state.isUserLoading = false;
    }
  }
});

export const { loadUser, loadUserSuccess, loadUserFail } = userSlice.actions;
export default userSlice.reducer;  // Note the default export