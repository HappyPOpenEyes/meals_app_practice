import { configureStore } from "@reduxjs/toolkit";

import favourtieReducer from "./favourite";

export const store = configureStore({
  reducer: {
    favouriteMeals: favourtieReducer,
  },
});
