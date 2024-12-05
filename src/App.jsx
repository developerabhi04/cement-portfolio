import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense} from "react";
import ProtectedRoute from "./auth/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import Loaders from "./components/loader/Loaders";
import Fals from "./components/Fals";



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
      <BrowserRouter>
        <Suspense fallback={<Loaders />}>
          <Routes>
              <Route path="/" element={<HomeLayout />} />

              <Route  element={<Fals />}>
                <Route path="/terms" element={<TermsConditions />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
              </Route>

            {/* admin */}
            <Route path={"/admin"} element={<AdminLogin />} />
            

            {/* Protected Admin Routes */}
            <Route path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route path="/admin/users-management"
              element={
                <ProtectedRoute>
                  <UserManagement />
                </ProtectedRoute>
              }
            />
            <Route path="/admin/export-data"
              element={
                <ProtectedRoute>
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