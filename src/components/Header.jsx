import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import logo from "../assets/adn.png";
import { useEffect, useState } from "react";
import { Close, Menu } from "@mui/icons-material";

const Header = () => {
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
                <Link to={"/"}>
                    <img src={logo} alt="logo" />
                </Link>
                <h2>Cemstar</h2>
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
                    <Link to={"tel:919903075394"} className="call-now-btn">
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
