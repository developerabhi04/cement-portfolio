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
                    <h2>Concerted Efforts To Build Better.</h2>
                    <p>
                        High-quality cement designed to last for years. Durable and strong,
                        perfect for construction projects of any size. Low shrinkage rate,
                        ensuring a more stable structure. High-strength cement offers superior
                        durability and stability.
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
