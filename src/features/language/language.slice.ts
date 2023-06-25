import { createSlice } from "@reduxjs/toolkit";

export interface LanguageState {
  value: "en" | "fr";
}

const initialState: LanguageState = {
  value: "en",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
