import { Phone } from "@mui/icons-material";
import img from "../assets/aboutUs.jpg";
// import { Helmet } from "react-helmet-async";


const content = {
    heading: "Unified Efforts for Stronger Foundations",
    para: "Premium-grade cement built for long-lasting performance. Strong and durable, ideal for projects of all sizes. With a low shrinkage rate, it ensures enhanced stability and structure.Our high- strength cement provides exceptional durability and reliability."
}

const AboutUs = () => {
    return (
        <>
            {/* <Helmet>
                <title>About Us - Your Website Name</title>
                <meta name="description" content="Learn more about our company, values, and team." />
                <meta name="keywords" content="about us, company, team" />
                <link rel="canonical" href="https://yourwebsite.com/about" />
            </Helmet> */}

            <section className="about-us" id="about">
                <div>
                    <div className="image-container">
                        <img src={img} alt="Construction" />
                    </div>
                    <div className="content">
                        <h2>About Us</h2>
                        <h2>{content.heading}</h2>
                        <p>{content.para}</p>
                        <a href="tel:918910503006">
                            <button>
                                <Phone />
                                Call Now
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;
