import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Delete, Edit } from "@mui/icons-material";
import AdminLayout from "../../AdminLayout";
import { server } from "../../../../server.js";



const SectionSix = () => {
  const [sectionSix, setSectionSix] = useState([]);

  // Edit
  const [isEditing, setIsEditing] = useState(false);
  const [editSectionOneId, setEditSectionOneId] = useState(null);


  // Add
  const [newSectionHOne, setNewSectionHOne] = useState("");
  const [newSectionHTwo, setNewSectionHTwo] = useState("");
  const [newSectionHThree, setNewSectionHThree] = useState("");

  const [isLoading, setIsLoading] = useState(false);


  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [sectionOneToDelete, setSectionOneToDelete] = useState(null);

  // Fetch all Section1
  const fetchSectionSix = async () => {
    try {
      const response = await axios.get(`${server}/section-six/public/get-all-section-six`);
      setSectionSix(response.data.sectionSixs);
    } catch (error) {
      console.error("Error fetching sectionSix:", error);
      toast.error("Failed to fetch sectionSix.");
    }
  };

  useEffect(() => {
    fetchSectionSix();
  }, []);



  // Add Banner
  const handleAddSectionOne = async (e) => {
    e.preventDefault();


    try {
      setIsLoading(true);
      await axios.post(`${server}/section-six/admin/add-section-six`,
        {
          hOne: newSectionHOne,
          hTwo: newSectionHTwo,
          hThree: newSectionHThree,
        },
        {
          withCredentials: true,
        }
      );

      toast.success("Section Six Field added successfully!");
      setNewSectionHOne("");
      setNewSectionHTwo("");
      setNewSectionHThree("");



      fetchSectionSix();
    } catch (error) {
      console.error("Error adding section Six:", error);
      toast.error("Failed to add Section six.");
    } finally {
      setIsLoading(false);
    }
  };

  // Edit Banner
  const handleEditSectionOne = async (e) => {
    e.preventDefault();
    if (!editSectionOneId) {
      toast.error("Please provide updated details");
      return;
    }



    try {
      setIsLoading(true);
      await axios.put(`${server}/section-six/admin/update-section-six/${editSectionOneId}`,
        {
          hOne: newSectionHOne,
          hTwo: newSectionHTwo,
          hThree: newSectionHThree,
        },
        {
          withCredentials: true,
        }
      );

      toast.success("Section Six updated successfully!");
      setIsEditing(false);
      setNewSectionHOne("");
      setNewSectionHTwo("");
      setNewSectionHThree("");




      fetchSectionSix();
    } catch (error) {
      console.error("Error updating Section Six:", error);
      toast.error("Failed to update Section Six.");
    } finally {
      setIsLoading(false);
    }
  };



  // Delete Banner
  const handleDeleteSectionOne = async () => {
    if (!sectionOneToDelete) return;

    try {
      await axios.delete(`${server}/section-six/admin/delete/${sectionOneToDelete}`,
        { withCredentials: true }
      );
      toast.success("Section Six deleted successfully!");
      setShowModal(false);
      setSectionOneToDelete(null);
      fetchSectionSix();

    } catch (error) {
      console.error("Error deleting Section:", error);
      toast.error("Failed to delete Section.");
    }
  };

  const startEdit = (section) => {
    setIsEditing(true);
    setEditSectionOneId(section._id);

    setNewSectionHOne(section.hOne);
    setNewSectionHTwo(section.hTwo);
    setNewSectionHThree(section.hThree);

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


        <div className="banner-list">
          {sectionSix.length > 0 ? (
            sectionSix.map((section) => (
              <div key={section._id} className="banner-item">
                <p className="banner-name">1. {section.hOne}</p>
                <p className="banner-name">2. {section.hTwo}</p>
                <p className="banner-name">3. {section.hThree}</p>
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
            <p>No Content available.</p>
          )}
        </div>

        <form
          className="banner-form"
          onSubmit={isEditing ? handleEditSectionOne : handleAddSectionOne}
        >
          <h2>{isEditing ? "Edit Content" : "Add Content"}</h2>

          {/* <label htmlFor="banner-name">First Heading</label>
          <input
            type="text"
            id="banner-name"
            value={newSectionHOne}
            onChange={(e) => setNewSectionHOne(e.target.value)}
            placeholder="Enter First Heading"

          /> */}

          {(sectionSix.length === 0 || (isEditing && editSectionOneId === sectionSix[0]?._id)) && (
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


          <label htmlFor="banner-name">Third Heading</label>
          <input
            type="text"
            id="banner-name"
            value={newSectionHThree}
            onChange={(e) => setNewSectionHThree(e.target.value)}
            placeholder="Enter third Heading"

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

export default SectionSix;
