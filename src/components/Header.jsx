import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/adn.png";
import { useEffect, useState } from "react";
import { Close, Menu } from "@mui/icons-material";

const Header = () => {
    const navigate = useNavigate();

    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);

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

    return (
        <nav className={`header ${scrolled ? "sticky-header" : ""}`}>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="right">
                <ul className={`center ${showMobileMenu ? "show-mobile-menu" : ""}`}>
                    <li onClick={() => navigate("/")}>Home</li>
                    <li onClick={() => navigate("/about")}>About us</li>
                    <li onClick={() => navigate("/services")}>Services</li>
                    <li onClick={() => navigate("/contact")}>Contact Us</li>
                </ul>

                <div>
                    <Link to={"tel:918910503006"} className="call-now-btn">
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
