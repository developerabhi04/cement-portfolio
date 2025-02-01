import axios from "axios";
import { server } from "../../server";
import { deleteUserFailure, deleteUserRequest, deleteUserSuccess, fetchUsersFailure, fetchUsersRequest, fetchUsersSuccess, submitFormFailure, submitFormRequest, submitFormSuccess } from "../reducer/FormReducer";
import toast from "react-hot-toast";



// submit the form
export const submitForm = (formData) => async (dispatch) => {
    dispatch(submitFormRequest());
    try {
        const { data } = await axios.post(`${server}/user/submit`, formData, {
            headers: { "Content-Type": "application/json" },
        });

        if (data.success) {
            dispatch(submitFormSuccess(data.message));
        } else {
            dispatch(submitFormFailure(data.message));
        }
    } catch (error) {
        console.error("Error submitting form:", error);
        dispatch(
            submitFormFailure(
                error.response?.data?.message || "Something went wrong."
            )
        );
    }
};



// Get All user 
export const getAllUsers = () => async (dispatch) => {
    dispatch(fetchUsersRequest());
    try {
        const { data } = await axios.get(`${server}/user/form`, { withCredentials: true });
        dispatch(fetchUsersSuccess(data.users));
    } catch (error) {
        dispatch(fetchUsersFailure(error.message || "Failed to fetch users."));
    }
};


// Delete User one by one
export const deleteUser = (id) => async (dispatch) => {
    dispatch(deleteUserRequest());
    try {
        await axios.delete(`${server}/user/admin/user/${id}`);
        dispatch(deleteUserSuccess(id));
        toast.success("User deleted successfully!", {
            style: {
                backgroundColor: "#FF5733",
                color: "white",
                fontWeight: "bold",
                borderRadius: "8px",
                padding: "10px 20px",
            },
        });
    } catch (error) {
        dispatch(deleteUserFailure(error.message || "Failed to delete user."));
        toast.error("Failed to delete user.", {
            style: {
                backgroundColor: "#FF3333",
                color: "white",
                fontWeight: "bold",
                borderRadius: "8px",
                padding: "10px 20px",
            },
        });
    }
};

