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
  initialState: { showMessageWindow: false, showProfileWindow: false },
  reducers: {
    showMessageWindowHandler(state) {
      state.showMessageWindow = true;
    },
    closeMessageWindowHandler(state) {
      state.showMessageWindow = false;
    },
    showProfileWindowHandler(state) {
      state.showProfileWindow = true;
    },
    closeProfileWindowHandler(state) {
      state.showProfileWindow = false;
    },
  },
});

const mailSlice = createSlice({
  name: "mail",
  initialState: {
    selectMessage: null,
  },
  reducers: {
    openMessage(state, action) {
      state.selectMessage = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    mail: mailSlice.reducer,
  },
});

export const authActions = authSlice.actions;
export const uiAction = uiSlice.actions;
export const mailAction = mailSlice.actions;

export default store;
