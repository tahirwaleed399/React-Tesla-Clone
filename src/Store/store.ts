import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./carSlice";
export default configureStore({

    reducer:{
car : carReducer,

    }
});