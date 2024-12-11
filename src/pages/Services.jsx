import img1 from "../assets/1.png";
import img2 from "../assets/5.png";
import img3 from "../assets/3.png";
import img4 from "../assets/2.png";
import img5 from "../assets/6.png";
import img6 from "../assets/4.png";


const servicesData = [
    {
        src: img1,
        heading: "Premium Cement for Stronger Foundations",
        para: "Our cement is engineered to provide superior strength and durability, making it the ideal choice for all types of construction projects. Whether you're building residential homes or large-scale infrastructure, our premium cement ensures a solid foundation that lasts.",
    },
    {
        src: img2,
        heading: "Cement That Exceeds Industry Standards",
        para: "Manufactured to meet the highest industry standards, our cement offers exceptional performance in any environment. From extreme weather conditions to demanding applications, our cement ensures long-lasting results with unparalleled reliability."
    },
    {
        src: img3,
        heading: "co-Friendly Cement for a Greener Future",
        para: "We are committed to sustainability by producing eco-friendly cement that reduces carbon emissions and promotes green construction practices. Our innovative manufacturing help minimize environmental impact without compromising on quality.",
    },
    {
        src: img4,
        heading: "Innovative Cement for Modern Construction",
        para: "Our cutting-edge cement formulations are designed to meet the needs of modern construction projects. With enhanced workability, faster setting times, and superior compressive strength, our cement adapts to the unique challenges of today’s industry."
    },
    {
        src: img5,
        heading: "Cost-Effective Cement Without Compromise",
        para: "We offer high-quality cement at competitive prices, ensuring that you get the best value for your money. Our efficient production methods allow us to deliver top-tier cement at cost-effective rates, making it a smart choice for your construction needs."
    },
    {
        src: img6,
        heading: "Trusted Cement for a Stronger Future",
        para: "For decades, we have been a trusted name in the cement industry, providing reliable products that builders and contractors depend on. Our cement is synonymous with strength, durability, and trust, making it the foundation of countless successful projects."
    },
]

const Services = () => {
    return (
        <section className="constructions-containers" id="services">
            <div className="construction-header">
                <p>Services</p>
                <h2>Top-Quality Services Across Diverse Industries!</h2>
            </div>

            {/* 6 Cards */}
            <section className="cards-container">

                {servicesData.map((services, i) => (
                    <div className="card" key={i}>
                        <figure className="card-figure">
                            <img src={services.src} alt="Concrete Mix Supply Logo" />
                        </figure>
                        <div className="card-content">
                            <h3>{services.heading}</h3>
                            <p>{services.para}</p>
                        </div>
                    </div>
                ))}

            </section>
        </section>
    );
};

export default Services;
