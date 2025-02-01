import AdminLayout from "../AdminLayout";
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Delete, Edit } from "@mui/icons-material";
import { server } from "../../../server.js";


const ContactManagement = () => {
  const [contacts, setContacts] = useState([]);

  // Edit State
  const [isEditing, setIsEditing] = useState(false);
  const [editContactId, setEditContactId] = useState(null);

  // Add/Edit Fields
  const [newAddress, setNewAddress] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Modal State
  const [showModal, setShowModal] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  // Fetch Contacts
  const fetchContacts = async () => {
    try {
      const response = await axios.get(`${server}/contact/admin/get-all-information`,
        { withCredentials: true }
      );
      setContacts(response.data.contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      toast.error("Failed to fetch contacts.");
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Add Contact
  const handleAddContact = async (e) => {
    e.preventDefault();
    if (!newAddress || !newPhoneNumber) {
      toast.error("Please fill out all fields.");
      return;
    }

    try {
      setIsLoading(true);
      await axios.post(`${server}/contact/admin/add-contact-information`,
        {
          address: newAddress,
          phoneNumber: newPhoneNumber
        },
        { withCredentials: true }
      );

      toast.success("Contact added successfully!");
      setNewAddress("");
      setNewPhoneNumber("");
      fetchContacts();
    } catch (error) {
      console.error("Error adding contact:", error);
      toast.error("Failed to add contact.");
    } finally {
      setIsLoading(false);
    }
  };

  // Edit Contact
  const handleEditContact = async (e) => {
    e.preventDefault();
    if (!editContactId) {
      toast.error("No contact selected for editing.");
      return;
    }

    try {
      setIsLoading(true);
      await axios.put(`${server}/contact/admin/update-information/${editContactId}`,
        { address: newAddress, phoneNumber: newPhoneNumber },
        { withCredentials: true }
      );

      toast.success("Contact updated successfully!");
      setIsEditing(false);
      setNewAddress("");
      setNewPhoneNumber("");
      fetchContacts();
    } catch (error) {
      console.error("Error updating contact:", error);
      toast.error("Failed to update contact.");
    } finally {
      setIsLoading(false);
    }
  };

  // Delete Contact
  const handleDeleteContact = async () => {
    if (!contactToDelete) {
      toast.error("No contact selected for deletion.");
      return;
    }

    try {
      await axios.delete(`${server}/contact/admin/delete/${contactToDelete}`,
        { withCredentials: true }
      );
      toast.success("Contact deleted successfully!");
      setShowModal(false);
      setContactToDelete(null);
      fetchContacts();
    } catch (error) {
      console.error("Error deleting contact:", error);
      toast.error("Failed to delete contact.");
    }
  };

  // Start Editing
  const startEdit = (contact) => {
    setIsEditing(true);
    setEditContactId(contact._id);
    setNewAddress(contact.address);
    setNewPhoneNumber(contact.phoneNumber);
  };

  // Confirm Delete
  const confirmDelete = (id) => {
    setShowModal(true);
    setContactToDelete(id);
  };

  const cancelDelete = () => {
    setShowModal(false);
    setContactToDelete(null);
  };

  return (
    <AdminLayout>
      <div className="contact-management">
        <h1 className="title">Contact Management</h1>

        <div className="contact-list">
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <div key={contact._id} className="contact-item">
                <p className="address">{contact.address}</p>
                <p>{contact.phoneNumber}</p>
                <div className="contact-actions">
                  <button className="btn edit-btn" onClick={() => startEdit(contact)}>
                    <Edit />
                  </button>
                  <button className="btn delete-btn"
                    onClick={() => confirmDelete(contact._id)}
                  >
                    <Delete />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No contact information available.</p>
          )}
        </div>

        <form
          className="contact-form"
          onSubmit={isEditing ? handleEditContact : handleAddContact}
        >
          <h2>{isEditing ? "Edit Contact" : "Add Contact"}</h2>
          <label htmlFor="address">Address</label>
          <textarea
            type="text"
            id="address"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
            placeholder="Enter full address"
            required
          />


          <label htmlFor="phone-number">Phone Number</label>
          <input
            type="number"
            id="phone-number"
            value={newPhoneNumber}
            onChange={(e) => setNewPhoneNumber(e.target.value)}
            placeholder="Enter phone number"
            required
          />

          <button type="submit" className="btn submit-btn" disabled={isLoading}>
            {isLoading ? "Processing..." : isEditing ? "Update Contact" : "Add Contact"}
          </button>
          {isEditing && (
            <button className="btn cancel-btn" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          )}
        </form>

        {/* Modal */}
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <p>Are you sure you want to delete this contact?</p>
              <div className="modal-actions">
                <button className="btn confirm-btn" onClick={handleDeleteContact}>
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

export default ContactManagement;
