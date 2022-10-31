import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../pages/Search/FilterSlice";

export default configureStore({
  reducer: {
    car: carReducer,
  },
});
