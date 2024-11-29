import { Link } from "react-router-dom";
import logo from "../assets/adn.png"


const Header = () => {
    return (
        <nav className="header">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="right">
                <div>
                    <Link>
                        Home
                    </Link>

                    <Link to={"/about"}>
                        About Us
                    </Link>

                    <Link>
                        Services
                    </Link>

                    <Link>
                        Contact Us
                    </Link>

                    <Link to={"tel:918910503006"}>
                        CALL NOW
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Header
