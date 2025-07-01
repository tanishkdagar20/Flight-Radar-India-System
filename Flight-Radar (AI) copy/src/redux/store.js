import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "./slices/flightSlice";
import detailReducer from "./slices/detailSlice";

// Create and export the Redux store
export default configureStore({
  reducer: {
    flight: flightReducer,
    detail: detailReducer,
  },
});
