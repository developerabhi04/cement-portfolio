import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import AdminLayout from "./AdminLayout";
import { AdminPanelSettings as AdminPanelSettingsIcon, Notifications as NotificationsIcon, Person } from "@mui/icons-material";
import moment from "moment";
import { LineChart } from "./constants/Charts"; // Assuming you have a line chart component
import { useEffect, useState } from "react";
import axios from "axios"; // For making API calls
import { server } from "../../server.js";

const Dashboard = () => {
    const [stats, setStats] = useState({
        usersCount: 0,
        totalChatsCount: 0,
        messagesChart: []
    });
    

    useEffect(() => {
        // Fetching the dashboard stats from backend
        const fetchStats = async () => {
            try {
                const response = await axios.get(`${server}/admin/stats`, { withCredentials: true });
                
                if (response.data.success) {
                    setStats(response.data.stats); // Setting stats from backend response
                }
            } catch (error) {
                console.error("Error fetching stats:", error);
            }
        };
        fetchStats();
    }, []);

    const Widgets = (
        <Stack direction={{ xs: "column", sm: "column" }}>
            <Widget title={"Users"} value={stats.usersCount} Icon={<Person />} />
            {/* <Widget title={"Chats"} value={stats.totalChatsCount} Icon={<Group />} /> */}
            {/* <Widget title={"User Messages"} value={stats.messagesChart.reduce((a, b) => a + b, 0)} Icon={<Message />} /> */}
        </Stack>
    );

    return (
        <AdminLayout>
            <Container component={"main"}>
                <Appbar />

                <Stack direction={{ xs: "column", lg: "row" }}
                    flexWrap={"wrap"}
                    justifyContent={"center"}
                    alignItems={{ xs: "center", lg: "stretch" }}
                    sx={{ gap: "1rem" }}>

                    <Paper elevation={3} sx={{
                        padding: "0.7rem 1.5rem",
                        borderRadius: "0.5rem",
                        width: "100%",
                        maxWidth: "42rem",
                        margin: '1rem 0 0',
                    }}>
                        <Typography margin={"2rem 0"} variant="h5">Last User Messages</Typography>
                        {/* LineCharts-components */}
                        <LineChart value={stats.messagesChart} />
                    </Paper>

                    <Paper elevation={3} sx={{
                        padding: "1rem ",
                        borderRadius: "0.5rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: { xs: "100%", sm: "50%" },
                        maxWidth: "20rem",
                        margin: '1rem 0 0',
                    }}>
                        {Widgets}
                    </Paper>
                </Stack>
            </Container>
        </AdminLayout>
    );
};

const Appbar = () => {
    const [time, setTime] = useState(moment());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(moment());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <Paper elevation={3} sx={{
            padding: "2rem",
            margin: "0.6rem 0 0 ",
            borderRadius: "0.5rem"
        }}>
            <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
                <AdminPanelSettingsIcon sx={{ fontSize: "3rem" }} />
                <Box flexGrow={0.9}></Box>
                <Typography display={{ xs: "none", lg: "block" }} sx={{ fontSize: "1.7rem", fontWeight: 600, padding: "0 3rem" }}>
                    {time.format("Do MMMM YYYY, h:mm:ss a")}
                </Typography>
                <NotificationsIcon sx={{ color: "red" }} />
            </Stack>
        </Paper>
    );
};

const Widget = ({ title, value, Icon }) => {
    return (
        <Stack alignItems={"center"} spacing={"1rem"}>
            <Typography sx={{
                color: "rgba(0,0,0,0.7)",
                borderRadius: "50%",
                border: `10px solid hsl(${value * 4}, ${value}%, 50%)`,
                width: "12rem",
                height: "12rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Typography fontSize={"2.5rem"}>{value}</Typography>
            </Typography>
            <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
                {Icon}
                <Typography fontSize={"1.3rem"}>{title}</Typography>
            </Stack>
        </Stack>
    );
};

export default Dashboard;
