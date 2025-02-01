import { useState, useEffect, useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Delete, Edit } from "@mui/icons-material";
import AdminLayout from "../../AdminLayout";
import { server } from "../../../../server.js";



const SectionThree = () => {
  const [sectionOne, setSectionOne] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null); // Ref for file input

  // Edit
  const [isEditing, setIsEditing] = useState(false);
  const [editSectionOneId, setEditSectionOneId] = useState(null);


  // Add
  const [newSectionHOne, setNewSectionHOne] = useState("");
  const [newSectionHTwo, setNewSectionHTwo] = useState("");
  const [newContentOne, setNewContentOne] = useState("");
  const [newContentTwo, setNewContentTwo] = useState("");
  const [newContentThree, setNewContentThree] = useState("");
  const [newContentFour, setNewContentFour] = useState("");

  const [newQuestionOne, setNewQuestionOne] = useState("");
  const [newAnswerOne, setNewAnswerOne] = useState("");
  const [newQuestionTwo, setNewQuestionTwo] = useState("");
  const [newAnswerTwo, setNewAnswerTwo] = useState("");
  const [newQuestionThree, setNewQuestionThree] = useState("");
  const [newAnswerThree, setNewAnswerThree] = useState("");

  const [isLoading, setIsLoading] = useState(false);


  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [sectionOneToDelete, setSectionOneToDelete] = useState(null);

  // Fetch all Section1
  const fetchSectionOnes = async () => {
    try {
      const response = await axios.get(`${server}/section-three/public/get-all-section-three`);
      setSectionOne(response.data.sectionThree);
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
    if (!selectedFile || !newSectionHOne || !newSectionHTwo || !newContentOne || !newContentTwo || !newContentThree || !newContentFour || !newQuestionOne || !newAnswerOne || !newQuestionTwo || !newAnswerTwo || !newQuestionThree || !newAnswerThree) {
      toast.error("Please fill out all fields and select a banner file.");
      return;
    }

    const formData = new FormData();
    formData.append("hOne", newSectionHOne);
    formData.append("hTwo", newSectionHTwo);
    formData.append("contentOne", newContentOne);
    formData.append("contentTwo", newContentTwo);
    formData.append("contentThree", newContentThree);
    formData.append("contentFour", newContentFour);

    formData.append("QuestionOne", newQuestionOne);
    formData.append("AnswerOne", newAnswerOne);
    formData.append("QuestionTwo", newQuestionTwo);
    formData.append("AnswerTwo", newAnswerTwo);
    formData.append("QuestionThree", newQuestionThree);
    formData.append("AnswerThree", newAnswerThree);
    formData.append("cardUrl", selectedFile);

    try {
      setIsLoading(true);

      await axios.post(`${server}/section-three/admin/add-section-three`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      toast.success("Section Three Field added successfully!");
      setNewSectionHOne("");
      setNewSectionHTwo("");
      setNewContentOne("");
      setNewContentTwo("");
      setNewContentThree("");
      setNewContentFour("");
      setNewQuestionOne("");
      setNewAnswerOne("");
      setNewQuestionTwo("");
      setNewAnswerTwo("");
      setNewQuestionThree("");
      setNewAnswerThree("");
      setSelectedFile(null);

      // Reset file input
      if (fileInputRef.current) fileInputRef.current.value = "";

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
    if (!editSectionOneId && !selectedFile) {
      toast.error("Please provide updated details or select a new banner file.");
      return;
    }

    const formData = new FormData();
    if (newSectionHOne) formData.append("hOne", newSectionHOne);
    if (newSectionHTwo) formData.append("hTwo", newSectionHTwo);

    if (newContentOne) formData.append("contentOne", newContentOne);
    if (newContentTwo) formData.append("contentTwo", newContentTwo);
    if (newContentThree) formData.append("contentThree", newContentThree);
    if (newContentFour) formData.append("contentFour", newContentFour);

    if (newQuestionOne) formData.append("QuestionOne", newQuestionOne);
    if (newAnswerOne) formData.append("AnswerOne", newAnswerOne);
    if (newQuestionTwo) formData.append("QuestionTwo", newQuestionTwo);
    if (newAnswerTwo) formData.append("AnswerTwo", newAnswerTwo);
    if (newQuestionThree) formData.append("QuestionThree", newQuestionThree);
    if (newAnswerThree) formData.append("AnswerThree", newAnswerThree);

    if (selectedFile) formData.append("cardUrl", selectedFile);

    try {
      setIsLoading(true);
      await axios.put(`${server}/section-three/admin/update-section-three/${editSectionOneId}`, formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      toast.success("Banner updated successfully!");
      setIsEditing(false);
      setNewSectionHOne("");
      setNewSectionHTwo("");
      setNewContentOne("");
      setNewContentTwo("");
      setNewContentThree("");
      setNewContentFour("");
      setNewQuestionOne("");
      setNewAnswerOne("");
      setNewQuestionTwo("");
      setNewAnswerTwo("");
      setNewQuestionThree("");
      setNewAnswerThree("");
      setSelectedFile(null);

      // Reset file input
      if (fileInputRef.current) fileInputRef.current.value = "";

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
      await axios.delete(`${server}/section-three/admin/delete/${sectionOneToDelete}`,
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

    setNewContentOne(section.contentOne);
    setNewContentTwo(section.contentTwo);
    setNewContentThree(section.contentThree);
    setNewContentFour(section.contentFour);
    setNewQuestionOne(section.QuestionOne);
    setNewAnswerOne(section.AnswerOne);
    setNewQuestionTwo(section.QuestionTwo);
    setNewAnswerTwo(section.AnswerTwo);
    setNewQuestionThree(section.QuestionThree);
    setNewAnswerThree(section.AnswerThree);
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
        <h1 className="title">Section-Three Management</h1>


        <div className="banner-list">
          {sectionOne.length > 0 ? (
            sectionOne.map((section) => (
              <div key={section._id} className="banner-item">
                <img src={section.cardUrl} alt={section.name} className="banner-image" />
                <p className="banner-name">1. {section.hOne}</p>
                <p className="banner-name">2. {section.hTwo}</p>

                <p className="banner-name">3. {section.contentOne}</p>
                <p className="banner-name">3. {section.contentTwo}</p>
                <p className="banner-name">3. {section.contentThree}</p>
                <p className="banner-name">3. {section.contentFour}</p>

                <p className="banner-name">4. {section.QuestionOne}</p>
                <p className="banner-name">4. {section.AnswerOne}</p>
                <p className="banner-name">5. {section.QuestionTwo}</p>
                <p className="banner-name">5. {section.AnswerTwo}</p>
                <p className="banner-name">6. {section.QuestionThree}</p>
                <p className="banner-name">6. {section.AnswerThree}</p>
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

        <form
          className="banner-form"
          onSubmit={isEditing ? handleEditSectionOne : handleAddSectionOne}
        >
          <h2>{isEditing ? "Edit Banner" : "Add Section One"}</h2>
          <label htmlFor="banner-name">First Heading</label>
          <input
            type="text"
            id="banner-name"
            value={newSectionHOne}
            onChange={(e) => setNewSectionHOne(e.target.value)}
            placeholder="Enter First Heading"
            required={!isEditing}
          />

          <label htmlFor="banner-name">Second Heading</label>
          <input
            type="text"
            id="banner-name"
            value={newSectionHTwo}
            onChange={(e) => setNewSectionHTwo(e.target.value)}
            placeholder="Enter Second Heading"
            required={!isEditing}
          />


          <label htmlFor="banner-name">Paragraph 1</label>
          <input
            type="text"
            id="banner-name"
            value={newContentOne}
            onChange={(e) => setNewContentOne(e.target.value)}
            placeholder="Enter Paragraph 1"
            required={!isEditing}
          />

          <label htmlFor="banner-name">Paragraph 2</label>
          <input
            type="text"
            id="banner-name"
            value={newContentTwo}
            onChange={(e) => setNewContentTwo(e.target.value)}
            placeholder="Enter Paragraph 2"
            required={!isEditing}
          />
          <label htmlFor="banner-name">Paragraph 3</label>
          <input
            type="text"
            id="banner-name"
            value={newContentThree}
            onChange={(e) => setNewContentThree(e.target.value)}
            placeholder="Enter Paragraph 3"
            required={!isEditing}
          />
          <label htmlFor="banner-name">Paragraph 4</label>
          <input
            type="text"
            id="banner-name"
            value={newContentFour}
            onChange={(e) => setNewContentFour(e.target.value)}
            placeholder="Enter Paragraph 4"
            required={!isEditing}
          />


          {/* Question & Answer */}
          <h1 className="title">FAQ</h1>

          <label htmlFor="banner-name">Question 1</label>
          <input
            type="text"
            id="banner-name"
            value={newQuestionOne}
            onChange={(e) => setNewQuestionOne(e.target.value)}
            placeholder="Enter Question 1"
            required={!isEditing}
          />
          <label htmlFor="banner-name">Answer 1</label>
          <input
            type="text"
            id="banner-name"
            value={newAnswerOne}
            onChange={(e) => setNewAnswerOne(e.target.value)}
            placeholder="Enter Answer 1"
            required={!isEditing}
          />

          <label htmlFor="banner-name">Question 2</label>
          <input
            type="text"
            id="banner-name"
            value={newQuestionTwo}
            onChange={(e) => setNewQuestionTwo(e.target.value)}
            placeholder="Enter Question 2"
            required={!isEditing}
          />
          <label htmlFor="banner-name">Answer 2</label>
          <input
            type="text"
            id="banner-name"
            value={newAnswerTwo}
            onChange={(e) => setNewAnswerTwo(e.target.value)}
            placeholder="Enter Answer 2"
            required={!isEditing}
          />

          <label htmlFor="banner-name">Question 3</label>
          <input
            type="text"
            id="banner-name"
            value={newQuestionThree}
            onChange={(e) => setNewQuestionThree(e.target.value)}
            placeholder="Enter Question 3"
            required={!isEditing}
          />
          <label htmlFor="banner-name">Answer 3</label>
          <input
            type="text"
            id="banner-name"
            value={newAnswerThree}
            onChange={(e) => setNewAnswerThree(e.target.value)}
            placeholder="Enter Answer 3"
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

export default SectionThree;
