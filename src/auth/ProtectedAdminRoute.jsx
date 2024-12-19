import { Navigate } from 'react-router-dom';

const ProtectedAdminRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('Admin-Token'); // Adjust as per your auth logic

    if (!isAuthenticated) {
        // If not logged in, redirect to the login page
        return <Navigate to="/admin" replace />;
    }

    return children;
};

export default ProtectedAdminRoute;