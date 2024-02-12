import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./pages/ThemeSlice";

/* export default configureStore({
  reducer: {
    themes: themeReducer
  }
}) */

export const store = configureStore({
  reducer: {
    themes: themeReducer,
  }
})