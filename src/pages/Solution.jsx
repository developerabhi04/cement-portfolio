import { useState } from "react";
import img from "../assets/construction.png";
import { ArrowDropUp, ArrowRight, Done } from "@mui/icons-material";

const Solution = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isImageMoved, setIsImageMoved] = useState(false);

    const toggleTab = (tab) => {
        setActiveTab(activeTab === tab ? 0 : tab);
        setIsImageMoved(!isImageMoved); // Toggle the image movement
    };

    return (
        <section className="solution-container">
            <div className="content">
                <p>Why Us</p>
                <h2>Solutions for All Industries</h2>
                <ul>
                    <li>
                        <span><Done /></span>
                        <span>Reliable Expertise</span>
                    </li>
                    <li>
                        <span><Done /></span>
                        <span>Superior Craftsmanship</span>
                    </li>
                    <li>
                        <span><Done /></span>
                        <span>Guaranteed Satisfaction</span>
                    </li>
                    <li>
                        <span><Done /></span>
                        <span>Precise Testing Methods</span>
                    </li>
                </ul>

                <Faq activeTab={activeTab} toggleTab={toggleTab} />
            </div>

            <div className={`image-container ${isImageMoved ? "move-down" : ""}`}>
                <img src={img} alt="Construction" />
            </div>
        </section>
    );
};

const Faq = ({ activeTab, toggleTab }) => {
    return (
        <div className="faq-section">
            <div className="faq-items">

                <div className={`faq-item ${activeTab === 1 ? "active" : ""}`}>
                    <button className="faq-question" onClick={() => toggleTab(1)}>
                        {activeTab === 1 ? <ArrowDropUp /> : <ArrowRight />}
                        <span>What is your return policy?</span>
                    </button>
                    <div className={`faq-answer ${activeTab === 1 ? "active" : ""}`}>
                        <p>
                            If you're not satisfied with your purchase, we accept returns within 30 days of delivery.
                        </p>
                    </div>
                </div>

                <div className={`faq-item ${activeTab === 2 ? "active" : ""}`}>
                    <button className="faq-question" onClick={() => toggleTab(2)}>
                        {activeTab === 2 ? <ArrowDropUp /> : <ArrowRight />}
                        <span>How do I request a quote for my non-trade cement project?</span>
                    </button>
                    <div className={`faq-answer ${activeTab === 2 ? "active" : ""}`}>
                        <p>
                            Requesting a quote is easy. Just visit our “Contact Us” page, fill out the form with your project details, and we'll provide a personalized quote promptly.
                        </p>
                    </div>
                </div>

                <div className={`faq-item ${activeTab === 3 ? "active" : ""}`}>
                    <button className="faq-question" onClick={() => toggleTab(3)}>
                        {activeTab === 3 ? <ArrowDropUp /> : <ArrowRight />}
                        <span>Are you licensed and insured for non-trade cement work?</span>
                    </button>
                    <div className={`faq-answer ${activeTab === 3 ? "active" : ""}`}>
                        <p>
                            Yes, we are fully licensed and insured to provide cement contracting services. We prioritize safety and compliance to ensure your project is handled with care and professionalism.
                        </p>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Solution;
