import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import UserOptions from "./components/UserOptions.jsx";
import NotFound from "./pages/NotFound.jsx";


// code spliting
const Header = lazy(() => import("./components/Header"));
const HomeLayout = lazy(() => import("./components/HomeLayout"));
const Footer = lazy(() => import("./pages/Footer.jsx"));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <UserOptions />
        <Suspense>
          <Routes>
            <Route path={"/"} element={<HomeLayout />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App