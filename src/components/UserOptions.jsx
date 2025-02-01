import { Backdrop, SpeedDial, SpeedDialAction } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { MarkUnreadChatAlt, WhatsApp, CallOutlined } from "@mui/icons-material"; // Example icons
import axios from "axios";
import toast from "react-hot-toast";
import { server } from "../server.js";

const UserOptions = () => {
    const [open, setOpen] = useState(false);

    // contact
    const [contact, setContacts] = useState([]);

    // contact
    const fetchContacts = async () => {
        try {
            const response = await axios.get(`${server}/contact/public/get-all-information`);
            setContacts(response.data.contacts);
            // console.log(response.data.contacts);

        } catch (error) {
            console.error("Error fetching contacts:", error);
            toast.error("Failed to fetch contacts.");
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);



    // Ensure contact array is not empty and extract phoneNumber safely
    const rawPhoneNumber = contact.length > 0 && contact[0].phoneNumber
        ? String(contact[0].phoneNumber).trim()  // Ensure it's a string and remove whitespace
        : "";

    // Remove all non-numeric characters (like spaces, dashes, or parentheses)
    let phoneNumber = rawPhoneNumber.replace(/\D/g, "");

    // If the number is exactly 10 digits, add the India country code (+91)
    if (phoneNumber.length === 10) {
        phoneNumber = "91" + phoneNumber;
    }

    // Ensure the number is valid for WhatsApp (minimum 12 digits including country code)
    const whatsappUrl = phoneNumber.length >= 12
        ? `https://wa.me/${phoneNumber}`
        : "#";  // Prevents invalid links

    console.log("Formatted WhatsApp Number:", phoneNumber);
    console.log("Generated WhatsApp URL:", whatsappUrl);


    return (
        <Fragment>
            {/* Backdrop when SpeedDial is open */}
            <Backdrop open={open} style={{ zIndex: "10" }} />

            {/* SpeedDial positioned at the bottom-right corner */}
            <SpeedDial
                ariaLabel="SpeedDial tooltip example"
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                style={{
                    position: "fixed",
                    bottom: "20px",    // Distance from the bottom
                    right: "20px",     // Distance from the right
                    zIndex: "11",
                    flexDirection: "column-reverse", // Optional: Reverse the order of actions
                }}
                icon={<MarkUnreadChatAlt sx={{ fontSize: 30 }} />}
                open={open}
                direction="up" // Buttons will expand upwards
                className="speedDial"
                FabProps={{
                    sx: {
                        backgroundColor: 'rgb(79, 106, 202)',
                        width: 60,
                        height: 60,
                    },

                }}
            >
                {/* Add SpeedDial actions here */}
                <SpeedDialAction
                    icon={<CallOutlined sx={{ fontSize: 38, color: "#fff" }} />}
                    tooltipTitle="Call"
                    onClick={() => console.log("Go to Home")}
                    href={`tel:${phoneNumber}`}
                    target="_blank"
                    sx={{
                        backgroundColor: 'rgb(3, 231, 139)', // Set background color
                        '&:hover': { backgroundColor: 'rgb(3, 231, 139)' }, // Change color on hover
                        padding: "1.5rem", // Increase padding for larger buttons
                        width: 55,
                        height: 55,
                        marginBottom: "2px"

                    }}
                />
                <SpeedDialAction
                    icon={<WhatsApp sx={{ fontSize: 38, color: "#fff" }} />}
                    tooltipTitle="WhatsApp"
                    onClick={() => console.log("Go to Profile")}
                    href={whatsappUrl}
                    target="_blank"
                    sx={{
                        backgroundColor: '#49E670', // Set background color
                        '&:hover': { backgroundColor: '#49E670' }, // Change color on hover
                        padding: "1.5rem", // Increase padding for larger buttons
                        width: 55,
                        height: 55,
                        marginBottom: "2px"

                    }}
                />
            </SpeedDial>
        </Fragment>
    );
};

export default UserOptions;
