import { lazy } from "react";
import { Helmet } from "react-helmet-async";

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
            <Helmet>
                <title>Home - Cemstar Supplies</title>
                <meta name="description" content="This is the home page." />
                <meta name="keywords" content="home, awesome website, react, SEO" />
                <link rel="canonical" href="https://demo.com" />
            </Helmet>

            <FormPopup />
            <Home />
            <Construction />
            <AboutUs />
            <Solution />
            <LiveCount />
            <Services />
            <ServicesFooter />
            <Form />
            <UserOptions />
        </>
    );
};

export default HomeLayout;
