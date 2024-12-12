import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children, redirect = "/admin" }) => {
    // Check for token in localStorage or cookies
    const token = localStorage.getItem("Admin-Token")

    if (!token) return <Navigate to={redirect} />;

    return children ? children : <Outlet />;
};

export default ProtectedRoute;
