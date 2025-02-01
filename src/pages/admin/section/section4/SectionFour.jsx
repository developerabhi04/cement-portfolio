import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Delete, Edit } from "@mui/icons-material";
import AdminLayout from "../../AdminLayout";
import { server } from "../../../../server.js";

const SectionFour = () => {
    const [sectionFour, setSectionFour] = useState([]); // Corrected state name

    // Edit
    const [isEditing, setIsEditing] = useState(false);
    const [editSectionFourId, setEditSectionFourId] = useState(null); // Corrected state name

    // Add
    const [newSectionHOne, setNewSectionHOne] = useState("");
    const [newSectionHTwo, setNewSectionHTwo] = useState("");
    const [newSectionHThree, setNewSectionHThree] = useState("");
    const [newContent, setNewContent] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // Modal state
    const [showModal, setShowModal] = useState(false);
    const [sectionFourToDelete, setSectionFourToDelete] = useState(null); // Corrected state name

    // Fetch all SectionFour
    const fetchSectionFours = async () => {
        try {
            const response = await axios.get(`${server}/section-four/public/get-all-section-four`);
            setSectionFour(response.data.SectionFours || []); // Ensure it's always an array
        } catch (error) {
            console.error("Error fetching sectionFour:", error);
            toast.error("Failed to fetch sectionFour.");
            setSectionFour([]); // Set to empty array on error
        }
    };

    useEffect(() => {
        fetchSectionFours();
    }, []);


    // Add SectionFour
    const handleAddSectionFour = async (e) => {
        e.preventDefault();
        if (!newSectionHThree || !newContent) {
            toast.error("Please fill out all fields.");
            return;
        }


        try {
            setIsLoading(true);
            await axios.post(`${server}/section-four/admin/add-section-four`,
                {
                    hOne: newSectionHOne,
                    hTwo: newSectionHTwo,
                    hThree: newSectionHThree,
                    content: newContent,
                },
                {
                    withCredentials: true,
                }
            );

            toast.success("Section Four added successfully!");
            setNewSectionHOne("");
            setNewSectionHTwo("");
            setNewSectionHThree("");
            setNewContent("");

            fetchSectionFours();
        } catch (error) {
            console.error("Error adding sectionFour:", error);
            toast.error("Failed to add sectionFour.");
        } finally {
            setIsLoading(false);
        }
    };

    // Edit SectionFour
    const handleEditSectionFour = async (e) => {
        e.preventDefault();
        if (!editSectionFourId) {
            toast.error("Please provide updated details.");
            return;
        }

        try {
            setIsLoading(true);
            await axios.put(
                `${server}/section-four/admin/update-section-four/${editSectionFourId}`,
                {
                    hOne: newSectionHOne,
                    hTwo: newSectionHTwo,
                    hThree: newSectionHThree,
                    content: newContent,
                },
                {
                    withCredentials: true,
                }
            );

            toast.success("Content updated successfully!");
            setIsEditing(false);
            setNewSectionHOne("");
            setNewSectionHTwo("");
            setNewSectionHThree("");
            setNewContent("");
            fetchSectionFours();
        } catch (error) {
            console.error("Error updating sectionFour:", error);
            toast.error("Failed to update sectionFour.");
        } finally {
            setIsLoading(false);
        }
    };

    // Delete SectionFour
    const handleDeleteSectionFour = async () => {
        if (!sectionFourToDelete) return;

        try {
            await axios.delete(`${server}/section-four/admin/delete/${sectionFourToDelete}`,
                { withCredentials: true }
            );
            toast.success("Content deleted successfully!");
            setShowModal(false);
            setSectionFourToDelete(null);
            fetchSectionFours();
        } catch (error) {
            console.error("Error deleting sectionFour:", error);
            toast.error("Failed to delete sectionFour.");
        }
    };

    const startEdit = (section) => {
        setIsEditing(true);
        setEditSectionFourId(section._id);
        setNewSectionHOne(section.hOne);
        setNewSectionHTwo(section.hTwo);
        setNewSectionHThree(section.hThree);
        setNewContent(section.content);
    };

    const confirmDelete = (id) => {
        setShowModal(true);
        setSectionFourToDelete(id);
    };

    const cancelDelete = () => {
        setShowModal(false);
        setSectionFourToDelete(null);
    };

    return (
        <AdminLayout>
            <div className="banner-management">
                <h1 className="title">Section Four Management</h1>

                <div className="banner-list">
                    {sectionFour?.length > 0 ? (
                        sectionFour.map((section) => (
                            <div className="banner-item" key={section._id}>
                                <p className="banner-name">1. {section.hOne}</p>
                                <p className="banner-name">2. {section.hTwo}</p>
                                <p className="banner-name">3. {section.hThree}</p>
                                <p className="banner-name">4. {section.content}</p>

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
                        <p>No section four data available.</p>
                    )}
                </div>

                <form
                    className="banner-form"
                    onSubmit={isEditing ? handleEditSectionFour : handleAddSectionFour}
                >
                    <h2>{isEditing ? "Edit Content" : "Add Content"}</h2>
                    <label htmlFor="banner-name">First Heading</label>
                    <input
                        type="text"
                        id="banner-name"
                        value={newSectionHOne}
                        onChange={(e) => setNewSectionHOne(e.target.value)}
                        placeholder="Enter First Heading"

                    />

                    <label htmlFor="banner-name">Second Heading</label>
                    <input
                        type="text"
                        id="banner-name"
                        value={newSectionHTwo}
                        onChange={(e) => setNewSectionHTwo(e.target.value)}
                        placeholder="Enter Second Heading"

                    />

                    <label htmlFor="banner-name">Third Heading</label>
                    <input
                        type="text"
                        id="banner-name"
                        value={newSectionHThree}
                        onChange={(e) => setNewSectionHThree(e.target.value)}
                        placeholder="Enter Third Heading"
                        required={!isEditing}
                    />

                    <label htmlFor="banner-name">Content</label>
                    <input
                        type="text"
                        id="banner-name"
                        value={newContent}
                        onChange={(e) => setNewContent(e.target.value)}
                        placeholder="Enter Paragraph"
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

                {/* Modal Popup */}
                {showModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <p>Are you sure you want to delete?</p>
                            <div className="modal-actions">
                                <button className="btn confirm-btn" onClick={handleDeleteSectionFour}>
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

export default SectionFour;