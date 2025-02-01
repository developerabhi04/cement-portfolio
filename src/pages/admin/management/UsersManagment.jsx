import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AdminLayout from "../AdminLayout";
import Table from "../constants/Table";
import { IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { deleteUser, getAllUsers } from "../../../redux/actions/formAction";


const UserManagement = () => {
    const dispatch = useDispatch();

    // Access users and loading state from Redux store
    const { users, loading } = useSelector((state) => state.form);

    useEffect(() => {
        // Fetch users on component mount
        // console.log("Users Data:", users);
        dispatch(getAllUsers());
    }, [dispatch]);

    // Delete user handler
    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    };

    const columns = [
        {
            field: "serial",
            headerName: "S.No",
            headerClassName: "table-header",
            width: 70,
            renderCell: (params) => {
                const index = users.findIndex((user) => user._id === params.row._id);
                return <span>{index + 1}</span>;
            },
        },
        { field: "_id", headerName: "ID", headerClassName: "table-header", width: 70, hide: true },
        { field: "name", headerName: "Name", headerClassName: "table-header", width: 250 },
        { field: "contactNumber", headerName: "Contact Number", headerClassName: "table-header", width: 150 },
        { field: "alternateNumber", headerName: "Alternate Number", headerClassName: "table-header", width: 150 },
        { field: "cementName", headerName: "Cement Name", headerClassName: "table-header", width: 180 },
        { field: "quantity", headerName: "Quantity", headerClassName: "table-header", width: 100 },
        { field: "city", headerName: "City", headerClassName: "table-header", width: 200 },
        { field: "state", headerName: "State", headerClassName: "table-header", width: 200 },
        { field: "pinCode", headerName: "Pin Code", headerClassName: "table-header", width: 120 },
        {
            field: "delete",
            headerName: "Delete",
            headerClassName: "table-header",
            width: 100,
            renderCell: (params) => (
                <IconButton onClick={() => handleDelete(params.row._id)} aria-label="delete">
                    <Delete style={{ color: "red" }} />
                </IconButton>
            ),
        },
    ];

    return (
        <AdminLayout>
            <Table
                heading={"All Users Data"}
                columns={columns}
                rows={users}
                loading={loading}
                getRowId={(row) => row._id} // Map _id as id for DataGrid
            />
        </AdminLayout>
    );
};

export default UserManagement;
