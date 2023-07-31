import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "./test-redux/slice";

export const store = configureStore({
    reducer: {
        user: UserReducer
    }
})