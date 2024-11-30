import Home from "../pages/Home";
import Construction from "../pages/Construction";
import Form from "../pages/Form";
import AboutUs from "../pages/AboutUs";
import Services from "../pages/Services";
import Solution from "../pages/Solution";
import LiveCount from "../pages/LiveCount";
import FormPopup from "../pages/FormPopup";
import ServicesFooter from "../pages/ServicesFooter";


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
