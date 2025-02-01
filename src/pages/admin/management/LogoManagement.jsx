import { useState, useEffect } from "react";
import axios from "axios";
import AdminLayout from "../AdminLayout";
import toast from "react-hot-toast";
import { server } from "../../../server.js";

const LogoManagement = () => {
    const [logos, setLogos] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editLogoId, setEditLogoId] = useState(null);
    const [newLogoName, setNewLogoName] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    // Fetch all logos
    const fetchLogos = async () => {
        try {
            const response = await axios.get(`${server}/logo/public/getlogo`);
            setLogos(response.data.logos);
            // console.log(response);
        } catch (error) {
            console.error("Error fetching logos:", error);
        }
    };

    useEffect(() => {
        fetchLogos();
    }, []);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };



    // add
    const handleAddLogo = async (e) => {
        e.preventDefault();
        if (!selectedFile || !newLogoName) {
            toast.error("Please provide a name and select a logo file.");
            return;
        }

        const formData = new FormData();
        formData.append("name", newLogoName);
        formData.append("imageUrl", selectedFile);

        try {
            setIsLoading(true);
            // Corrected API URL here
            await axios.post(`${server}/logo/admin/addlogo`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
                withCredentials: true,
            });
            toast.success("Logo added successfully!");
            setNewLogoName("");
            setSelectedFile(null);
            fetchLogos();
        } catch (error) {
            console.error("Error adding logo:", error);
            toast.error("Failed to add logo.");
        } finally {
            setIsLoading(false);
        }
    };



    // edit
    const handleEditLogo = async (e) => {
        e.preventDefault();
        if (!newLogoName && !selectedFile) {
            toast.error("Please provide a new name or select a new logo file.");
            return;
        }

        const formData = new FormData();
        if (newLogoName) formData.append("name", newLogoName);
        if (selectedFile) formData.append("imageUrl", selectedFile);

        try {
            setIsLoading(true);
            await axios.put(`${server}/logo/admin/edit/${editLogoId}`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
                withCredentials: true,
            });
            alert("Logo updated successfully!");
            setIsEditing(false);
            setNewLogoName("");
            setSelectedFile(null);
            fetchLogos();
        } catch (error) {
            console.error("Error updating logo:", error);
            toast.error("Failed to update logo.");
        } finally {
            setIsLoading(false);
        }
    };


    // delete
    const handleDeleteLogo = async (id) => {
        if (!window.confirm("Are you sure you want to delete this logo?")) return;

        try {
            await axios.delete(`${server}/logo/admin/delete/${id}`, { withCredentials: true });
            alert("Logo deleted successfully!");
            fetchLogos();
        } catch (error) {
            console.error("Error deleting logo:", error);
            alert("Failed to delete logo.");
        }
    };

    const startEdit = (logo) => {
        setIsEditing(true);
        setEditLogoId(logo._id);
        setNewLogoName(logo.name);
    };

    return (
        <AdminLayout>
            <div className="logo-management">
                <h1 className="title">Logo Management</h1>

                <div className="logo-list">
                    {logos.length > 0 ? (
                        logos.map((logo) => (
                            <div key={logo._id} className="logo-item">
                                <img src={logo.imageUrl} alt={logo.name} className="logo-image" />
                                <p className="logo-name">{logo.name}</p>
                                <div className="logo-actions">
                                    <button
                                        className="btn edit-btn"
                                        onClick={() => startEdit(logo)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn delete-btn"
                                        onClick={() => handleDeleteLogo(logo._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No logos available.</p>
                    )}
                </div>


                <form
                    className="logo-form"
                    onSubmit={isEditing ? handleEditLogo : handleAddLogo}
                >
                    <h2>{isEditing ? "Edit Logo" : "Add Logo"}</h2>
                    <label htmlFor="logo-name">Logo Name</label>
                    <input
                        type="text"
                        id="logo-name"
                        value={newLogoName}
                        onChange={(e) => setNewLogoName(e.target.value)}
                        placeholder="Enter logo name"
                    />
                    <label htmlFor="logo-file">Select Logo</label>
                    <input
                        type="file"
                        id="logo-file"
                        onChange={handleFileChange}
                        accept="image/*"
                        required={!isEditing}
                    />
                    <button type="submit" className="btn submit-btn" disabled={isLoading}>
                        {isLoading ? "Processing..." : isEditing ? "Update Logo" : "Add Logo"}
                    </button>
                    {isEditing && (
                        <button
                            type="button"
                            className="btn cancel-btn"
                            onClick={() => setIsEditing(false)}
                        >
                            Cancel
                        </button>
                    )}
                </form>
            </div>
        </AdminLayout>
    );
};

export default LogoManagement;
