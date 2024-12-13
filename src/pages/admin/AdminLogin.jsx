import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, Container, IconButton, InputAdornment, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { server } from "../../main";
import toast from "react-hot-toast";

const AdminLogin = () => {
    const navigate = useNavigate();
    const [secretKey, setSecretKey] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);




    const logout = () => {
        localStorage.removeItem("Admin-Token");
        localStorage.removeItem("token-expiration");
        // toast.success("Logged out successfully");
        navigate("/admin");
    };


    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { data } = await axios.post(`${server}/admin/verify`, { secretKey }, { withCredentials: true });

            if (data.success) {
                const expirationTime = new Date().getTime() + 1 * 60 * 1000; // Token expires in 1 minute
                // Store token and expiration time in both cookies and localStorage

                localStorage.setItem("Admin-Token", expirationTime);
                localStorage.setItem("token-expiration", expirationTime);

                toast.success("Login successful, Welcome Admin!");
                navigate("/admin/dashboard");

                // Set a timeout to log the user out when the token expires
                setTimeout(logout, expirationTime - new Date().getTime());
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || "Invalid Admin Key");
        } finally {
            setLoading(false);
        }
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Container
            component={"main"}
            maxWidth="xs"
            sx={{
                height: "90vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Paper
                elevation={5}
                sx={{
                    borderRadius: 2,
                    padding: 5,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}
            >
                <Typography variant="h5">Admin Login</Typography>
                <form
                    style={{ width: "100%", marginTop: "1rem" }}
                    onSubmit={handleLogin}
                >
                    <TextField
                        required
                        fullWidth
                        label="Secretkey"
                        type={showPassword ? "text" : "password"}
                        margin="normal"
                        variant="outlined"
                        value={secretKey}
                        autoComplete="new-password"
                        onChange={(e) => setSecretKey(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleTogglePassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff size={20} /> : <Visibility size={20} />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button
                        sx={{ marginTop: "2rem" }}
                        variant="contained"
                        color="primary"
                        type="submit"
                        fullWidth
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default AdminLogin;
