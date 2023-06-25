import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
  value: "light" | "dark";
}

const initialState: ThemeState = {
  value: "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.value = state.value === "dark" ? "light" : "dark";
    },
  },
});
export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
