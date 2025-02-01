import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    success: false,
    message: "",
    error: null,
    users: [], // Added default empty users array for fetch and delete actions
};

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        submitFormRequest: (state) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        },
        submitFormSuccess: (state, action) => {
            state.loading = false;
            state.success = true;
            state.message = action.payload;
        },
        submitFormFailure: (state, action) => {
            state.loading = false;
            state.success = false;
            state.error = action.payload;
        },

        fetchUsersRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchUsersSuccess: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        fetchUsersFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        deleteUserRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        deleteUserSuccess: (state, action) => {
            state.loading = false;
            state.users = state.users.filter((user) => user._id !== action.payload); // Use _id for comparison
        },
        deleteUserFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { submitFormRequest, submitFormSuccess, submitFormFailure, fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure, deleteUserRequest, deleteUserSuccess, deleteUserFailure } = formSlice.actions;

export default formSlice.reducer;
