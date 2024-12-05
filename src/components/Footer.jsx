import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>NonTradeCement</h2>
          <p>Your trusted partner in the construction industry</p>
        </div>

        <div className="footer-links">
          <div className="footer-links-section">
            <h3>Legal</h3>
            <ul>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms">Terms & Conditions</Link>
                </li>
            </ul>
          </div>

          <div className="footer-links-section">
            <h3>Quick Links</h3>
            <ul>
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
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} NonTradeCement. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
