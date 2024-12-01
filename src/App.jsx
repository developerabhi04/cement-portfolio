import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import axios from "axios";
import { server } from "./main";
import ProtectedRoute from "./auth/ProtectedRoute";
import { Toaster } from "react-hot-toast";



// code spliting
const HomeLayout = lazy(() => import("./components/HomeLayout"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const ExportData = lazy(() => import("./pages/admin/ExportData"));
const UserManagement = lazy(() => import("./pages/admin/UsersManagment"));



const App = () => {
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const checkAdminAuth = async () => {
      try {
        await axios.get(`${server}/admin/stats`, { withCredentials: true });
        setAdmin(true);
      } catch (error) {
        console.error(error)
        setAdmin(false);
      }
    };
    checkAdminAuth();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Suspense>
          <Routes>
            <Route path={"/"} element={<HomeLayout />} />

            {/* admin */}
            <Route path={"/admin"} element={<AdminLogin />} />
            

            {/* Protected Admin Routes */}
            <Route path="/admin/dashboard"
              element={
                <ProtectedRoute user={admin}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route path="/admin/users-management"
              element={
                <ProtectedRoute user={admin}>
                  <UserManagement />
                </ProtectedRoute>
              }
            />
            <Route path="/admin/export-data"
              element={
                <ProtectedRoute user={admin}>
                  <ExportData />
                </ProtectedRoute>
              }
            />


            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Toaster position="top-center" reverseOrder={false} toastOptions={{ duration: 5000 }} />
      </BrowserRouter>
    </>
  )
}

export default App