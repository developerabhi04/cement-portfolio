import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { useEffect, useState } from "react";
import { Close, Menu } from "@mui/icons-material";
import axios from "axios";
import toast from "react-hot-toast";
import { server } from "../server.js";


const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [logos, setLogos] = useState([]);

    // contact
    const [contact, setContacts] = useState([]);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMobileMenu = () => {
        setShowMobileMenu((prev) => !prev);
    };


    // Fetch all logos
    const fetchLogos = async () => {
        try {
            const response = await axios.get(`${server}/logo/public/getlogo`);

            setLogos(response.data.logos);
            // console.log(response.data.logos);
        } catch (error) {
            console.error("Error fetching logos:", error);
        }
    };

    useEffect(() => {
        fetchLogos();
    }, []);




    // contact
    const fetchContacts = async () => {
        try {
            const response = await axios.get(`${server}/contact/public/get-all-information`);
            setContacts(response.data.contacts);
            // console.log(response.data.contacts);

        } catch (error) {
            console.error("Error fetching contacts:", error);
            toast.error("Failed to fetch contacts.");
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    // Extract the phone number from the contact data
    const phoneNumber = contact.length > 0 ? contact[0].phoneNumber : ""; // Fallback number


    return (
        <nav className={`header ${scrolled ? "sticky-header" : ""}`}>
            <div className="logo">
                {logos.map((logo) => (
                    <Link to={"/"} key={logo._id}>
                        <img src={logo.imageUrl} alt="logo" />
                    </Link>
                ))}

            </div>

            <div className="right">
                <ul className={`center ${showMobileMenu ? "show-mobile-menu" : ""}`}>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <LinkScroll
                            to="about"
                            smooth={true}
                            duration={500}
                        >
                            About Us
                        </LinkScroll>
                    </li>
                    <li>
                        <LinkScroll
                            to="services"
                            smooth={true}
                            duration={500}
                        >
                            Services
                        </LinkScroll>
                    </li>
                    <li>
                        <LinkScroll
                            to="contact"
                            smooth={true}
                            duration={500}
                        >
                            Contact Us
                        </LinkScroll>
                    </li>
                </ul>

                <div>
                    <Link to={`tel:${phoneNumber}`} className="call-now-btn">
                        CALL NOW
                    </Link>
                </div>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button className="mobile-toggle-btn" onClick={toggleMobileMenu}>
                {showMobileMenu ? <Close /> : <Menu />}
            </button>
        </nav>
    );
};

export default Header;
