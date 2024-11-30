import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Construction = lazy(() => import("../pages/Construction"));
const Form = lazy(() => import("../pages/Form"));
const AboutUs = lazy(() => import("../pages/AboutUs"));
const Services = lazy(() => import("../pages/Services"));
const LiveCount = lazy(() => import("../pages/LiveCount"));
const FormPopup = lazy(() => import("../pages/FormPopup"));
const Solution = lazy(() => import("../pages/Solution"));
const ServicesFooter = lazy(() => import("../pages/ServicesFooter"));


const HomeLayout = () => {

    return (
        <>
            <FormPopup />
            <Home />
            <Construction />
            <Form />
            <AboutUs />
            <Services />
            <Solution />
            <LiveCount />
            <ServicesFooter />

        </>
    );
};

export default HomeLayout;
