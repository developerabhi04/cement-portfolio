import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie"; // You need to install js-cookie

const ProtectedRoute = ({ children, redirect = "/admin" }) => {
    // Check for token in localStorage or cookies
    const token = localStorage.getItem("Admin-Token") || Cookies.get("Admin-Token");

    if (!token) return <Navigate to={redirect} />;

    return children ? children : <Outlet />;
};

export default ProtectedRoute;
