import AdminLayout from "../AdminLayout";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Delete, Edit } from "@mui/icons-material";
import { server } from "../../../server.js";

const BannerManagement = () => {
    const [banners, setBanners] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null); // Ref for file input

    // Edit
    const [isEditing, setIsEditing] = useState(false);
    const [editBannerId, setEditBannerId] = useState(null);


    // Add
    const [newBannerHeadingOne, setNewBannerHeadingOne] = useState("");
    const [newBannerHeadingTwo, setNewBannerHeadingTwo] = useState("");
    const [newBannerParagraph, setNewBannerParagraph] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    // Modal state
    const [showModal, setShowModal] = useState(false);
    const [bannerToDelete, setBannerToDelete] = useState(null);


    // Fetch all banners
    const fetchBanners = async () => {
        try {
            const response = await axios.get(`${server}/banner/public/getbanner`);
            setBanners(response.data.banners);
        } catch (error) {
            console.error("Error fetching banners:", error);
            toast.error("Failed to fetch banners.");
        }
    };


    useEffect(() => {
        fetchBanners();
    }, []);



    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };


    // Add Banner
    const handleAddBanner = async (e) => {
        e.preventDefault();
        if (!selectedFile || !newBannerHeadingOne || !newBannerHeadingTwo || !newBannerParagraph) {
            toast.error("Please fill out all fields and select a banner file.");
            return;
        }

        const formData = new FormData();
        formData.append("headingOne", newBannerHeadingOne);
        formData.append("headingTwo", newBannerHeadingTwo);
        formData.append("paragraph", newBannerParagraph);
        formData.append("bannerUrl", selectedFile);

        try {
            setIsLoading(true);
            await axios.post(`${server}/banner/admin/addbanner`,
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                    withCredentials: true,
                }
            );

            toast.success("Banner added successfully!");
            setNewBannerHeadingOne("");
            setNewBannerHeadingTwo("");
            setNewBannerParagraph("");
            setSelectedFile(null);

            // Reset file input
            if (fileInputRef.current) fileInputRef.current.value = "";

            fetchBanners();
        } catch (error) {
            console.error("Error adding banner:", error);
            toast.error("Failed to add banner.");
        } finally {
            setIsLoading(false);
        }
    };

    // Edit Banner
    const handleEditBanner = async (e) => {
        e.preventDefault();
        if (!editBannerId && !selectedFile) {
            toast.error("Please provide updated details or select a new banner file.");
            return;
        }

        const formData = new FormData();
        if (newBannerHeadingOne) formData.append("headingOne", newBannerHeadingOne);
        if (newBannerHeadingTwo) formData.append("headingTwo", newBannerHeadingTwo);
        if (newBannerParagraph) formData.append("paragraph", newBannerParagraph);
        if (selectedFile) formData.append("bannerUrl", selectedFile);

        try {
            setIsLoading(true);
            await axios.put(`${server}/banner/admin/edit/${editBannerId}`, formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                    withCredentials: true,
                }
            );

            toast.success("Banner updated successfully!");
            setIsEditing(false);
            setNewBannerHeadingOne("");
            setNewBannerHeadingTwo("");
            setNewBannerParagraph("");
            setSelectedFile(null);

            // Reset file input
            if (fileInputRef.current) fileInputRef.current.value = "";

            fetchBanners();
        } catch (error) {
            console.error("Error updating banner:", error);
            toast.error("Failed to update banner.");
        } finally {
            setIsLoading(false);
        }
    };

    // Delete Banner
    const handleDeleteBanner = async () => {
        if (!bannerToDelete) return;

        try {
            await axios.delete(`${server}/banner/admin/delete/${bannerToDelete}`,
                { withCredentials: true }
            );
            toast.success("Banner deleted successfully!");
            setShowModal(false);
            setBannerToDelete(null);
            fetchBanners();

        } catch (error) {
            console.error("Error deleting banner:", error);
            toast.error("Failed to delete banner.");
        }
    };

    const startEdit = (banner) => {
        setIsEditing(true);
        setEditBannerId(banner._id);

        setNewBannerHeadingOne(banner.headingOne);
        setNewBannerHeadingTwo(banner.headingTwo);
        setNewBannerParagraph(banner.paragraph);
    };


    const confirmDelete = (id) => {
        setShowModal(true);
        setBannerToDelete(id);
    };

    const cancelDelete = () => {
        setShowModal(false);
        setBannerToDelete(null);
    };

    return (
        <AdminLayout>
            <div className="banner-management">
                <h1 className="title">Banner Management</h1>


                <div className="banner-list">
                    {banners.length > 0 ? (
                        banners.map((banner) => (
                            <div key={banner._id} className="banner-item">
                                <img src={banner.bannerUrl} alt={banner.name} className="banner-image" />
                                <p className="banner-name">{banner.headingOne}</p>
                                <p className="banner-name">{banner.headingTwo}</p>
                                <p className="banner-name">{banner.paragraph}</p>
                                <div className="banner-actions">
                                    <button
                                        className="btn edit-btn"
                                        onClick={() => startEdit(banner)}
                                    >
                                        <Edit />
                                    </button>
                                    <button
                                        className="btn delete-btn"
                                        onClick={() => confirmDelete(banner._id)}
                                    >
                                        <Delete />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No banners available.</p>
                    )}
                </div>

                <form
                    className="banner-form"
                    onSubmit={isEditing ? handleEditBanner : handleAddBanner}
                >
                    <h2>{isEditing ? "Edit Banner" : "Add Banner"}</h2>
                    <label htmlFor="banner-name">First Heading</label>
                    <input
                        type="text"
                        id="banner-name"
                        value={newBannerHeadingOne}
                        onChange={(e) => setNewBannerHeadingOne(e.target.value)}
                        placeholder="Enter First Heading"
                        required={!isEditing}
                    />

                    <label htmlFor="banner-name">Second Heading</label>
                    <input
                        type="text"
                        id="banner-name"
                        value={newBannerHeadingTwo}
                        onChange={(e) => setNewBannerHeadingTwo(e.target.value)}
                        placeholder="Enter Second Heading"
                        required={!isEditing}
                    />

                    <label htmlFor="banner-name">Paragraph</label>
                    <input
                        type="text"
                        id="banner-name"
                        value={newBannerParagraph}
                        onChange={(e) => setNewBannerParagraph(e.target.value)}
                        placeholder="Enter Paragraph"
                        required={!isEditing}
                    />

                    <label htmlFor="banner-file">Select Banner</label>
                    <input
                        type="file"
                        id="banner-file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/*"
                        required={!isEditing}
                    />
                    <button type="submit" className="btn submit-btn" disabled={isLoading}>
                        {isLoading ? "Uploading..." : isEditing ? "Update Banner" : "Add Banner"}
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


                {/* Modal Popup */}
                {showModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <p>Are you sure you want to delete this banner?</p>
                            <div className="modal-actions">
                                <button className="btn confirm-btn" onClick={handleDeleteBanner}>
                                    Confirm
                                </button>
                                <button className="btn cancel-btn" onClick={cancelDelete}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </AdminLayout>
    );
};

export default BannerManagement;
