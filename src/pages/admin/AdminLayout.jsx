import { Close as CloseIcon, Dashboard, ExitToApp as ExitToAppIcon, ImportExport, Menu as MenuIcon, Message } from "@mui/icons-material";
import { Box, Drawer, Grid, IconButton, Stack, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link as LinkComponent, useLocation, useNavigate } from "react-router-dom";
import { matBlack } from "./constants/color";
import { server } from "../../main"
import axios from "axios";
import toast from "react-hot-toast";



const Link = styled(LinkComponent)`
    text-decoration: none;
    border-radius: 2rem;
    padding: 1rem 2rem;
    color: black;
    &:hover {
        color: rgba(0, 0, 0, 0.54)
    }
`;

const adminTabs = [
    {
        name: "Dashboard",
        path: "/admin/dashboard",
        icon: <Dashboard />
    },
    {
        name: "Messages",
        path: "/admin/users-management",
        icon: <Message />
    },
    {
        name: "Export",
        path: "/admin/export-data",
        icon: <ImportExport />
    },
]


const AdminLayout = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();

    const handleMobile = () => setIsMobile(!isMobile);
    const handleClose = () => setIsMobile(false);



    // if (!isAdmin) return <Navigate to={"/admin"} />

    // Automatically logout if the token is expired
    useEffect(() => {
        const checkTokenExpiration = () => {
            const expirationTime = localStorage.getItem("token-expiration");
            const currentTime = new Date().getTime();

            // If token is expired
            if (expirationTime && currentTime >= expirationTime) {
                toast.error("Your session has expired. Please log in again.");
                logout(true); // Pass true to avoid the "Logged out successfully" message
            }
        };

        // Check expiration immediately when the component mounts
        checkTokenExpiration();

        // Check every 30 seconds for token expiration without refresh
        const intervalId = setInterval(checkTokenExpiration, 30000); // Adjust the interval as needed

        // Clear the interval when the component unmounts
        return () => {
            clearInterval(intervalId);
        };
    }, [navigate]);

    const logout = async (isExpired = false) => {
        try {
            // Call the backend logout API to clear any server-side session
            await axios.get(`${server}/admin/logout`, { withCredentials: true });

            // Remove token from localStorage and cookies
            localStorage.removeItem("admin-token");
            localStorage.removeItem("token-expiration");

            // Only show "Logged out successfully" if it's not a session expiration
            if (!isExpired) {
                toast.success("Logged out successfully");
            }

            // Redirect to login
            navigate("/admin");
        } catch (error) {
            console.error("Error logging out:", error);
            toast.error("Failed to log out. Please try again.");
        }
    };

    return (
        <Grid container minHeight={"100vh"}>
            <Box sx={{
                display: { xs: "block", md: "none" },
                position: "fixed",
                right: "1rem",
                top: "1rem",
            }}>
                <IconButton onClick={handleMobile}>
                    {
                        isMobile ? <CloseIcon /> : <MenuIcon />
                    }
                </IconButton>
            </Box>

            <Grid item md={4} lg={3} sx={{ display: { xs: "none", md: "block" } }}>
                <Sidebar />
            </Grid>

            <Grid item md={8} lg={9} xs={12} sx={{ bgcolor: "#f5f5f5" }}>
                {children}
            </Grid>


            <Drawer open={isMobile} onClose={handleClose}>
                <Sidebar w="50vw" />
            </Drawer>
        </Grid>
    )
}


const Sidebar = ({ w = "100%" }) => {

    const location = useLocation();
    const navigate = useNavigate()



    const logoutHandler = async () => {
        try {
            await axios.get(`${server}/admin/logout`, { withCredentials: true });
            localStorage.removeItem("admin-token");
            localStorage.removeItem("token-expiration");
            toast.success("Logged out successfully");
            navigate("/admin");
        } catch (error) {
            console.error("Error logging out:", error);
            toast.error("Failed to log out");
        }
    };



    return (
        <Stack width={w} direction={"column"} p={"3rem"} spacing={"3rem"}>
            <Typography variant="h5" textTransform={"uppercase"}>Admin</Typography>

            <Stack spacing={"1rem"}>
                {adminTabs.map((tab) => (
                    <Link key={tab.path} to={tab.path}
                        sx={
                            location.pathname === tab.path && {
                                bgcolor: matBlack,
                                color: "white",
                                ":hover": { color: "white" },
                            }
                        }
                    >

                        <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
                            {tab.icon}
                            <Typography>{tab.name}</Typography>
                        </Stack>
                    </Link>
                ))}

                <Link onClick={logoutHandler}>

                    <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
                        <ExitToAppIcon />
                        <Typography>Logout</Typography>
                    </Stack>
                </Link>

            </Stack>
        </Stack>
    )
}

export default AdminLayout



// bgcolor: "#ffffff",
// boxShadow: 2,
// borderRight: "1px solid #ddd"























// const AdminLayout = ({ children }) => {

//     const [isMobile, setIsMobile] = useState(false);

//     const handleMobile = () => setIsMobile(!isMobile);

//     const handleClose = () => setIsMobile(false)

//     return (
//         <Grid container minHeight={"100vh"}>
//             <Box sx={{
//                 display: { xs: "block", md: "none" },
//                 position: "fixed",
//                 right: "1rem",
//                 top: "1rem",
//             }}>
//                 <IconButton onClick={handleMobile}>
//                     {
//                         isMobile ? <CloseIcon /> : <MenuIcon />
//                     }
//                 </IconButton>
//             </Box>

//             <Grid item md={4} lg={3} sx={{ display: { xs: "none", md: "block" } }}>
//                 <Sidebar />
//             </Grid>

//             <Grid item md={8} lg={9} xs={12} sx={{ bgcolor: "#f5f5f5" }}>
//                 {children}
//             </Grid>


//             <Drawer open={isMobile} onClose={handleClose}>
//                 <Sidebar w="50vw" />
//             </Drawer>
//         </Grid>
//     )
// }


// const Sidebar = ({ w = "100%" }) => {
//     return (
//         <Stack width={w}>

//         </Stack>
//     )
// }

// export default AdminLayout