import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./reducer/FormReducer"


const store = configureStore({
    reducer: {
        form: formReducer,
    },
});

export default store;
