import { useState, useEffect, useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Delete, Edit } from "@mui/icons-material";
import AdminLayout from "../../AdminLayout";
import { server } from "../../../../server.js";



const SectionOne = () => {
    const [sectionOne, setSectionOne] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null); // Ref for file input

    // Edit
    const [isEditing, setIsEditing] = useState(false);
    const [editSectionOneId, setEditSectionOneId] = useState(null);


    // Add
    const [newSectionHOne, setNewSectionHOne] = useState("");
    const [newSectionHTwo, setNewSectionHTwo] = useState("");
    const [newContent, setNewContent] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    // Modal state
    const [showModal, setShowModal] = useState(false);
    const [sectionOneToDelete, setSectionOneToDelete] = useState(null);

    // Fetch all Section1
    const fetchSectionOnes = async () => {
        try {
            const response = await axios.get(`${server}/section-one/public/get-all-section-one`);
            setSectionOne(response.data.sectionOnes);
        } catch (error) {
            console.error("Error fetching sectionOne:", error);
            toast.error("Failed to fetch sectionOne.");
        }
    };

    useEffect(() => {
        fetchSectionOnes();
    }, []);



    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    // Add Banner
    const handleAddSectionOne = async (e) => {
        e.preventDefault();
        if (!selectedFile || !newSectionHTwo || !newContent) {
            toast.error("Please fill out all fields and select a banner file.");
            return;
        }

        const formData = new FormData();
        formData.append("hOne", newSectionHOne);
        formData.append("hTwo", newSectionHTwo);
        formData.append("content", newContent);
        formData.append("cardUrl", selectedFile);

        try {
            setIsLoading(true);

            await axios.post(`${server}/section-one/admin/add-section-one`,
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                    withCredentials: true,
                }
            );

            toast.success("Section One Field added successfully!");
            setNewSectionHOne("");
            setNewSectionHTwo("");
            setNewContent("");
            setSelectedFile(null);

            fetchSectionOnes();
        } catch (error) {
            console.error("Error adding banner:", error);
            toast.error("Failed to add banner.");
        } finally {
            setIsLoading(false);
        }
    };

    // Edit Banner
    const handleEditSectionOne = async (e) => {
        e.preventDefault();
        if (!newSectionHTwo && !newContent && !selectedFile) {
            toast.error("Please provide updated details or select a new banner file.");
            return;
        }

        const formData = new FormData();
        if (newSectionHOne) formData.append("hOne", newSectionHOne);
        if (newSectionHTwo) formData.append("hTwo", newSectionHTwo);
        if (newContent) formData.append("content", newContent);
        if (selectedFile) formData.append("cardUrl", selectedFile);

        try {
            setIsLoading(true);
            await axios.put(`${server}/section-one/admin/update-section-one/${editSectionOneId}`, formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                    withCredentials: true,
                }
            );

            toast.success("Banner updated successfully!");
            setIsEditing(false);
            setNewSectionHOne("");
            setNewSectionHTwo("");
            setNewContent("");

            setSelectedFile(null);
            fetchSectionOnes();
        } catch (error) {
            console.error("Error updating banner:", error);
            toast.error("Failed to update banner.");
        } finally {
            setIsLoading(false);
        }
    };

    // Delete Banner
    const handleDeleteSectionOne = async () => {
        if (!sectionOneToDelete) return;

        try {
            await axios.delete(`${server}/section-one/admin/delete/${sectionOneToDelete}`,
                { withCredentials: true }
            );
            toast.success("Banner deleted successfully!");
            setShowModal(false);
            setSectionOneToDelete(null);
            fetchSectionOnes();

        } catch (error) {
            console.error("Error deleting banner:", error);
            toast.error("Failed to delete banner.");
        }
    };

    const startEdit = (section) => {
        setIsEditing(true);
        setEditSectionOneId(section._id);

        setNewSectionHOne(section.hOne);
        setNewSectionHTwo(section.hTwo);
        setNewContent(section.content);
    };


    const confirmDelete = (id) => {
        setShowModal(true);
        setSectionOneToDelete(id);
    };

    const cancelDelete = () => {
        setShowModal(false);
        setSectionOneToDelete(null);
    };

    return (
        <AdminLayout>
            <div className="banner-management">
                <h1 className="title">Section-One Management</h1>

                <form
                    className="banner-form"
                    onSubmit={isEditing ? handleEditSectionOne : handleAddSectionOne}
                >
                    <h2>{isEditing ? "Edit Section" : "Add Section"}</h2>


                    {/* Show First Heading ONLY IF: */}
                    {/* 1. There are no existing cards (Adding the first one) */}
                    {/* 2. Editing the first card (sectionOne[0]) */}
                    {(sectionOne.length === 0 || (isEditing && editSectionOneId === sectionOne[0]?._id)) && (
                        <>
                            <label htmlFor="banner-name">First Heading</label>
                            <input
                                type="text"
                                id="banner-name"
                                value={newSectionHOne}
                                onChange={(e) => setNewSectionHOne(e.target.value)}
                                placeholder="Enter First Heading"
                            />
                        </>
                    )}

                    <label htmlFor="banner-name">Second Heading</label>
                    <input
                        type="text"
                        id="banner-name"
                        value={newSectionHTwo}
                        onChange={(e) => setNewSectionHTwo(e.target.value)}
                        placeholder="Enter Second Heading"
                    />

                    <label htmlFor="banner-name">Content</label>
                    <input
                        type="text"
                        id="banner-name"
                        value={newContent}
                        onChange={(e) => setNewContent(e.target.value)}
                        placeholder="Enter Paragraph"
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
                        {isLoading ? "Uploading..." : isEditing ? "Update Data" : "Submit"}
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



                <div className="banner-list">
                    {sectionOne.length > 0 ? (
                        sectionOne.map((section) => (
                            <div key={section._id} className="banner-item">
                                <img src={section.cardUrl} alt={section.name} className="banner-image" />
                                <p className="banner-name"> {section.hOne}</p>
                                <p className="banner-name"> {section.hTwo}</p>
                                <p className="banner-name"> {section.content}</p>
                                <div className="banner-actions">
                                    <button
                                        className="btn edit-btn"
                                        onClick={() => startEdit(section)}
                                    >
                                        <Edit />
                                    </button>
                                    <button
                                        className="btn delete-btn"
                                        onClick={() => confirmDelete(section._id)}
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




                {/* Modal Popup */}
                {showModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <p>Are you sure you want to delete?</p>
                            <div className="modal-actions">
                                <button className="btn confirm-btn" onClick={handleDeleteSectionOne}>
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

export default SectionOne;
