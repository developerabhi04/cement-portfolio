import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import ChildrenOutlet from "./components/ChildrenOutlet";
import { HelmetProvider } from 'react-helmet-async';
import AdminRouteGuard from "./auth/AdminRouteGuard";
import ProtectedAdminRoute from "./auth/ProtectedAdminRoute";




// code spliting
const HomeLayout = lazy(() => import("./components/HomeLayout"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const ExportData = lazy(() => import("./pages/admin/ExportData"));
const UserManagement = lazy(() => import("./pages/admin/UsersManagment"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./pages/TermCondition"));



const App = () => {
  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          <Suspense>
            <Routes>

              <Route element={<ChildrenOutlet />}>
                <Route path="/" element={<HomeLayout />} />
                <Route path="/terms" element={<TermsConditions />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
              </Route>



              {/* admin */}
              <Route path={"/admin"} element={
                <AdminRouteGuard>
                  <AdminLogin />
                </AdminRouteGuard>
              } />

              {/* Protected Admin Routes */}
              <Route path="/admin/dashboard"
                element={
                  <ProtectedAdminRoute>
                    <Dashboard />
                  </ProtectedAdminRoute>
                }
              />

              <Route path="/admin/users-management"
                element={
                  <ProtectedAdminRoute>
                    <UserManagement />
                  </ProtectedAdminRoute>
                }
              />
              <Route path="/admin/export-data"
                element={
                  <ProtectedAdminRoute>
                    <ExportData />
                  </ProtectedAdminRoute>
                }
              />


              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Toaster position="top-center" reverseOrder={false} toastOptions={{ duration: 5000 }} />
        </BrowserRouter>
      </HelmetProvider>
    </>
  )
}

export default App