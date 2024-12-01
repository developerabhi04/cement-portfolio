import { lazy } from "react";


const Header = lazy(() => import("./Header"));
const Footer = lazy(() => import("./Footer"));
const Home = lazy(() => import("../pages/Home"));
const Construction = lazy(() => import("../pages/Construction"));
const Form = lazy(() => import("../pages/Form"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const Services = lazy(() => import("../pages/Services"));
const LiveCount = lazy(() => import("../pages/LiveCount"));
const FormPopup = lazy(() => import("../pages/FormPopup"));
const Solution = lazy(() => import("../pages/Solution"));
const ServicesFooter = lazy(() => import("../pages/ServicesFooter"));
const UserOptions = lazy(() => import("./UserOptions"));


const HomeLayout = () => {

    return (
        <>
            <Header />
            <FormPopup />
            <Home />
            <Construction />
            <Form />
            <AboutUs />
            <Services />
            <Solution />
            <LiveCount />
            <ServicesFooter />
            <UserOptions />
            <Footer />
        </>
    );
};

export default HomeLayout;
