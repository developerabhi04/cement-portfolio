import { Phone } from "@mui/icons-material";
import img from "../assets/construction.png";

const AboutUs = () => {
    return (
        <section className="about-us" id="about">
            <div>
                <div className="image-container">
                    <img src={img} alt="Construction" />
                </div>
                <div className="content">
                    <h2>About Us</h2>
                    <h2>Unified Efforts for Stronger Foundations</h2>
                    <p>
                        Premium-grade cement built for long-lasting performance. Strong and durable, ideal for projects of all sizes. With a low shrinkage rate,
                        it ensures enhanced stability and structure. Our high-strength cement provides exceptional durability and reliability.
                    </p>
                    <a href="tel:918910503006">
                        <button>
                            <Phone />
                            Call Now
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
