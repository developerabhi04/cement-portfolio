import { useEffect, useState } from "react";
import { ArrowDropUp, ArrowRight, Done } from "@mui/icons-material";
import axios from "axios";
import toast from "react-hot-toast";
import { server } from "../server.js";


const Solution = () => {
    const [sectionThree, setSectionThree] = useState([]);

    const [activeTab, setActiveTab] = useState(0);
    const [isImageMoved, setIsImageMoved] = useState(false);

    const toggleTab = (tab) => {
        setActiveTab(activeTab === tab ? 0 : tab);
        setIsImageMoved(!isImageMoved); // Toggle the image movement
    };


    const fetchSectionOnes = async () => {
        try {
            const response = await axios.get(`${server}/section-three/public/get-all-section-three`);
            setSectionThree(response.data.sectionThree);
            // console.log(response.data.sectionThree);
        } catch (error) {
            console.error("Error fetching sectionOne:", error);
            toast.error("Failed to fetch sectionOne.");
        }
    };

    useEffect(() => {
        fetchSectionOnes();
    }, []);

    return (
        <section className="solution-container">
            <div className="content">
                <p>{sectionThree.length > 0 ? sectionThree[0].hOne : "Loading..."}</p>
                <h2>{sectionThree.length > 0 ? sectionThree[0].hTwo : "Loading..."}</h2>
                <ul>
                    <li>
                        <span>{<Done />}</span>
                        <span>{sectionThree.length > 0 ? sectionThree[0].contentOne : "Loading..."}</span>
                    </li>
                    <li>
                        <span>{<Done />}</span>
                        <span>{sectionThree.length > 0 ? sectionThree[0].contentTwo : "Loading..."}</span>
                    </li>
                    <li>
                        <span>{<Done />}</span>
                        <span>{sectionThree.length > 0 ? sectionThree[0].contentThree : "Loading..."}</span>
                    </li>
                    <li>
                        <span>{<Done />}</span>
                        <span>{sectionThree.length > 0 ? sectionThree[0].contentFour : "Loading..."}</span>
                    </li>
                </ul>

                <Faq activeTab={activeTab} toggleTab={toggleTab} faqs={sectionThree} />
            </div>

            <div className={`image-container ${isImageMoved ? "move-down" : ""}`}>
                {sectionThree.length > 0 ? (
                    <>
                        <img src={sectionThree[0].cardUrl} alt="Construction" />
                    </>
                ) : ("Loading...")}

            </div>
        </section>
    );
};



const Faq = ({ activeTab, toggleTab, faqs }) => {
    return (
        <div className="faq-section">
            <div className="faq-items">
                {faqs.length > 0 ? (
                    faqs.map((faq, index) => (
                        <div key={index}>
                            {/* First FAQ */}
                            <div className={`faq-item ${activeTab === `q1-${index}` ? "active" : ""}`}>
                                <button className="faq-question" onClick={() => toggleTab(`q1-${index}`)}>
                                    {activeTab === `q1-${index}` ? <ArrowDropUp /> : <ArrowRight />}
                                    <span>{faq.QuestionOne}</span>
                                </button>
                                {activeTab === `q1-${index}` && (
                                    <div className="faq-answer active">
                                        <p>{faq.AnswerOne}</p>
                                    </div>
                                )}
                            </div>

                            {/* Second FAQ */}
                            <div className={`faq-item ${activeTab === `q2-${index}` ? "active" : ""}`}>
                                <button className="faq-question" onClick={() => toggleTab(`q2-${index}`)}>
                                    {activeTab === `q2-${index}` ? <ArrowDropUp /> : <ArrowRight />}
                                    <span>{faq.QuestionTwo}</span>
                                </button>
                                {activeTab === `q2-${index}` && (
                                    <div className="faq-answer active">
                                        <p>{faq.AnswerTwo}</p>
                                    </div>
                                )}
                            </div>

                            {/* Third FAQ */}
                            <div className={`faq-item ${activeTab === `q3-${index}` ? "active" : ""}`}>
                                <button className="faq-question" onClick={() => toggleTab(`q3-${index}`)}>
                                    {activeTab === `q3-${index}` ? <ArrowDropUp /> : <ArrowRight />}
                                    <span>{faq.QuestionThree}</span>
                                </button>
                                {activeTab === `q3-${index}` && (
                                    <div className="faq-answer active">
                                        <p>{faq.AnswerThree}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    "Loading..."
                )}
            </div>
        </div>
    );
};


export default Solution;





























































// const solutionData = [
//     {
//         icon: <Done />,
//         title: "Reliable Expertise"
//     },
//     {
//         icon: <Done />,
//         title: "Superior Craftsmanship"
//     },
//     {
//         icon: <Done />,
//         title: "Guaranteed Satisfaction"
//     },
//     {
//         icon: <Done />,
//         title: "Precise Testing Methods"
//     },
// ]
// const Solution = () => {
//     const [activeTab, setActiveTab] = useState(0);
//     const [isImageMoved, setIsImageMoved] = useState(false);

//     const toggleTab = (tab) => {
//         setActiveTab(activeTab === tab ? 0 : tab);
//         setIsImageMoved(!isImageMoved); // Toggle the image movement
//     };

//     return (
//         <section className="solution-container">
//             <div className="content">
//                 <p>Why Us</p>
//                 <h2>Solutions for All Industries</h2>
//                 <ul>
//                     {solutionData.map((solution, i) => (
//                         <li key={i}>
//                             <span>{solution.icon}</span>
//                             <span>{solution.title}</span>
//                         </li>
//                     ))}
//                 </ul>

//                 <Faq activeTab={activeTab} toggleTab={toggleTab} />
//             </div>

//             <div className={`image-container ${isImageMoved ? "move-down" : ""}`}>
//                 <img src={img} alt="Construction" />
//             </div>
//         </section>
//     );
// };



// const Faq = ({ activeTab, toggleTab }) => {
//     return (
//         <div className="faq-section">
//             <div className="faq-items">

//                 <div className={`faq-item ${activeTab === 1 ? "active" : ""}`}>
//                     <button className="faq-question" onClick={() => toggleTab(1)}>
//                         {activeTab === 1 ? <ArrowDropUp /> : <ArrowRight />}
//                         <span>What is your return policy?</span>
//                     </button>
//                     <div className={`faq-answer ${activeTab === 1 ? "active" : ""}`}>
//                         <p>
//                             If you're not satisfied with your purchase, we accept returns within 30 days of delivery.
//                         </p>
//                     </div>
//                 </div>

//                 <div className={`faq-item ${activeTab === 2 ? "active" : ""}`}>
//                     <button className="faq-question" onClick={() => toggleTab(2)}>
//                         {activeTab === 2 ? <ArrowDropUp /> : <ArrowRight />}
//                         <span>How do I request a quote for my non-trade cement project?</span>
//                     </button>
//                     <div className={`faq-answer ${activeTab === 2 ? "active" : ""}`}>
//                         <p>
//                             Requesting a quote is easy. Just visit our “Contact Us” page, fill out the form with your project details, and we'll provide a personalized quote promptly.
//                         </p>
//                     </div>
//                 </div>

//                 <div className={`faq-item ${activeTab === 3 ? "active" : ""}`}>
//                     <button className="faq-question" onClick={() => toggleTab(3)}>
//                         {activeTab === 3 ? <ArrowDropUp /> : <ArrowRight />}
//                         <span>Are you licensed and insured for non-trade cement work?</span>
//                     </button>
//                     <div className={`faq-answer ${activeTab === 3 ? "active" : ""}`}>
//                         <p>
//                             Yes, we are fully licensed and insured to provide cement contracting services. We prioritize safety and compliance to ensure your project is handled with care and professionalism.
//                         </p>
//                     </div>
//                 </div>

//             </div>
//         </div>

//     );
// };

// export default Solution;

