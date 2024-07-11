import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "Auth",
  initialState: {
    isLoggedIn: !!localStorage.getItem("token"),
  },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

const uiSlice = createSlice({
  name: "Ui",
  initialState: { showMessageWindow: false },
  reducers: {
    showMessageWindowHandler(state) {
      state.showMessageWindow = true;
    },
    closeMessageWindowHandler(state) {
      state.showMessageWindow = false;
    },
  },
});

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export const authActions = authSlice.actions;
export const uiAction = uiSlice.actions;

export default store;
