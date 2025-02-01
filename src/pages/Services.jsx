import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { server } from "../server.js";

const Services = () => {
    const [sectionFive, setSectionFive] = useState([]);

    // Fetch all Section1
    const fetchSectionFives = async () => {
        try {
            const response = await axios.get(`${server}/section-five/public/get-all-section-five`);
            setSectionFive(response.data.sectionFives);
            // console.log(response.data.sectionFives);
        } catch (error) {
            console.error("Error fetching sectionOne:", error);
            toast.error("Failed to fetch sectionOne.");
        }
    };

    useEffect(() => {
        fetchSectionFives();
    }, []);

    return (
        <section className="constructions-containers" id="services">
            <div className="construction-header">
                <p>Services</p>
                <h2>{sectionFive.length > 0 ? sectionFive[0].hOne : "loading"}</h2>
            </div>

            {/* 6 Cards */}
            <section className="cards-container">

                {sectionFive.map((services, i) => (
                    <div className="card" key={i}>
                        <figure className="card-figure">
                            <img src={services.cardUrl} alt="Concrete Mix Supply Logo" />
                        </figure>
                        <div className="card-content">
                            <h3>{services.hTwo}</h3>
                            <p>{services.content}</p>
                        </div>
                    </div>
                ))}

            </section>
        </section>
    );
};

export default Services;
