import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Affiliate Program</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get Help</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Demo</a>
              </li>
              <li>
                <a href="#">Demo</a>
              </li>
              <li>
                <a href="#">Demo</a>
              </li>
              <li>
                <a href="#">Demo</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Demo</h4>
            <ul>
              <li>
                <a href="#">Demo</a>
              </li>
              <li>
                <a href="#">Demo</a>
              </li>
              <li>
                <a href="#">Demo</a>
              </li>
              <li>
                <a href="#">Demo</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#">
                <Facebook />
              </a>
              <a href="#">
                <Twitter />
              </a>
              <a href="#">
                <Instagram/>
              </a>
              <a href="#">
                <LinkedIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
