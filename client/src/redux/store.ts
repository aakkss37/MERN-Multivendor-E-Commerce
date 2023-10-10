import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user"

const Store = configureStore({
    reducer: {
        user: userReducer,
    }
})

// Define the type of the root state:
export type RootState = ReturnType<typeof Store.getState>;
export default Store;