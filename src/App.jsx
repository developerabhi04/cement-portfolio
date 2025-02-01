import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import ChildrenOutlet from "./components/ChildrenOutlet";
import { HelmetProvider } from 'react-helmet-async';
import AdminRouteGuard from "./auth/AdminRouteGuard";
import ProtectedAdminRoute from "./auth/ProtectedAdminRoute";
import LogoManagement from "./pages/admin/management/LogoManagement";
import ContactManagement from "./pages/admin/management/ContactManagement";
import BannerManagement from "./pages/admin/management/BannerManagement";
import SectionOne from "./pages/admin/section/section1/SectionOne";
import SectionTwo from "./pages/admin/section/section2/SectionTwo";
import SectionThree from "./pages/admin/section/section3/SectionThree";
import SectionFour from "./pages/admin/section/section4/SectionFour";
import SectionFive from "./pages/admin/section/section5/SectionFive";
import SectionSix from "./pages/admin/section/section6/SectionSix";


// code spliting
const HomeLayout = lazy(() => import("./components/HomeLayout"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AdminLogin = lazy(() => import("./pages/admin/login/AdminLogin"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const ExportData = lazy(() => import("./pages/admin/management/ExportData"));
const UserManagement = lazy(() => import("./pages/admin/management/UsersManagment"));
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

              <Route path="/admin/logo"
                element={
                  <ProtectedAdminRoute>
                    <LogoManagement />
                  </ProtectedAdminRoute>
                }
              />

              <Route path="/admin/contact-management"
                element={
                  <ProtectedAdminRoute>
                    <ContactManagement />
                  </ProtectedAdminRoute>
                }
              />

              <Route path="/admin/banner-management"
                element={
                  <ProtectedAdminRoute>
                    <BannerManagement />
                  </ProtectedAdminRoute>
                }
              />

              <Route path="/admin/sectionone-management"
                element={
                  <ProtectedAdminRoute>
                    <SectionOne />
                  </ProtectedAdminRoute>
                }
              />

              <Route path="/admin/sectiontwo-management"
                element={
                  <ProtectedAdminRoute>
                    <SectionTwo />
                  </ProtectedAdminRoute>
                }
              />

              <Route path="/admin/sectionthree-management"
                element={
                  <ProtectedAdminRoute>
                    <SectionThree />
                  </ProtectedAdminRoute>
                }
              />

              <Route path="/admin/sectionfour-management"
                element={
                  <ProtectedAdminRoute>
                    <SectionFour />
                  </ProtectedAdminRoute>
                }
              />

              <Route path="/admin/sectionfive-management"
                element={
                  <ProtectedAdminRoute>
                    <SectionFive />
                  </ProtectedAdminRoute>
                }
              />

              <Route path="/admin/sectionsix-management"
                element={
                  <ProtectedAdminRoute>
                    <SectionSix />
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