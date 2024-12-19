import { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import Table from "./constants/Table";
import { IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import axios from "axios";  // Make sure axios is installed
import { server } from "../../main";
import toast from "react-hot-toast";

const UserManagement = () => {
    const [rows, setRows] = useState([]);

    // Fetch users data on component mount
    useEffect(() => {

        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${server}/user/form`, { withCredentials: true });  // Make sure this endpoint is correct
                setRows(response.data.users.map((user) => ({
                    ...user,
                    id: user._id,
                    name: user.name,
                    contactNumber: user.contactNumber,
                    alternateNumber: user.alternateNumber,
                    cementName: user.cementName,
                    quantity: user.quantity,
                    city: user.city,
                    state: user.state,
                    pinCode: user.pinCode,
                })));
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);  // Only run once on mount

    // Handle delete of user
    const handleDelete = async (id) => {
        try {
            await axios.delete(`${server}/user/admin/user/${id}`);  // Make sure this endpoint is correct
            setRows((prevRows) => prevRows.filter((row) => row.id !== id));  // Update local state

            toast.success("User deleted successfully!", {
                style: {
                    backgroundColor: "#FF5733", // Fiery red-orange color
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "8px", // Rounded corners
                    padding: "10px 20px",
                },
                transition: "bounce", // Add a bounce animation
            });

        } catch (error) {
            console.error("Error deleting user:", error);

            toast.error("Failed to delete user.", {
                style: {
                    backgroundColor: "#FF3333", // Hot red color
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "8px",
                    padding: "10px 20px",
                },
                transition: "bounce", // Add a bounce animation
            });

        }
    };

    const columns = [
        {
            field: "serial",
            headerName: "S.No",
            headerClassName: "table-header",
            width: 70,
            renderCell: (params) => {
                // Get the index from the rows array based on the params.row.id
                const index = rows.findIndex((row) => row.id === params.row.id);
                return <span>{index + 1}</span>; // Add 1 to make it 1-based index
            },
        },
        {
            field: "id",
            headerName: "ID",
            headerClassName: "table-header",
            width: 70,
            hide: true,
        },
        {
            field: "name",
            headerName: "Name",
            headerClassName: "table-header",
            width: 250,
        },
        {
            field: "contactNumber",
            headerName: "Contact Number",
            headerClassName: "table-header",
            width: 150,
        },
        {
            field: "alternateNumber",
            headerName: "Alternate Number",
            headerClassName: "table-header",
            width: 150,
        },
        {
            field: "cementName",
            headerName: "Cement Name",
            headerClassName: "table-header",
            width: 180,
        },
        {
            field: "quantity",
            headerName: "Quantity",
            headerClassName: "table-header",
            width: 100,
        },
        {
            field: "city",
            headerName: "City",
            headerClassName: "table-header",
            width: 200,
        },
        {
            field: "state",
            headerName: "State",
            headerClassName: "table-header",
            width: 200,
        },
        {
            field: "pinCode",
            headerName: "Pin Code",
            headerClassName: "table-header",
            width: 120,
        },
        {
            field: "delete",
            headerName: "Delete",
            headerClassName: "table-header",
            width: 100,
            renderCell: (params) => (
                <IconButton onClick={() => handleDelete(params.row.id)} aria-label="delete">
                    <Delete style={{ color: "red" }} />
                </IconButton>
            ),
        },
    ];

    return (
        <AdminLayout>
            <Table heading={"All Users Data"} columns={columns} rows={rows} />
        </AdminLayout>
    );
};

export default UserManagement;
