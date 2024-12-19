
import { Navigate } from 'react-router-dom';

const AdminRouteGuard = ({ children }) => {
    const isAuthenticated = localStorage.getItem('Admin-Token'); // Adjust as per your auth logic

    if (isAuthenticated) {
        // If logged in and trying to access the login page, redirect to the dashboard
        return <Navigate to="/admin/dashboard" replace />;
    }

    return children;
};

export default AdminRouteGuard;
