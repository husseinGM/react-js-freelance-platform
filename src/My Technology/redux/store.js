import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./slices/projectSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        project: projectSlice
    },
})
export default store;