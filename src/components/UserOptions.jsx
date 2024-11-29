import { Backdrop, SpeedDial, SpeedDialAction } from "@mui/material";
import { Fragment, useState } from "react";
import { MarkUnreadChatAlt, WhatsApp, CallOutlined } from "@mui/icons-material"; // Example icons

const UserOptions = () => {
    const [open, setOpen] = useState(false);

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
                    href="tel:918910503006"
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
                    href="https://web.whatsapp.com/send?phone=918910503006&text="
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
