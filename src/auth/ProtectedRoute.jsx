import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children, redirect = "/admin" }) => {
    // Check for token in localStorage
    const token = localStorage.getItem("admin-token");

    if (!token) return <Navigate to={redirect} />;

    return children ? children : <Outlet />;
}

export default ProtectedRoute;
