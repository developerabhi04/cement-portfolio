import { Phone } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { server } from "../server.js";

const AboutUs = () => {
    const [sectionTwo, setSectionTwo] = useState([]);
    const [contact, setContacts] = useState([]);



    // Fetch all Section1
    const fetchSectionTwos = async () => {
        try {
            const response = await axios.get(`${server}/section-two/public/get-all-section-two`);
            setSectionTwo(response.data.sectionTwos);
            // console.log(response.data.sectionTwos);



        } catch (error) {
            console.error("Error fetching sectionOne:", error);
            toast.error("Failed to fetch sectionOne.");
        }
    };


    useEffect(() => {
        fetchSectionTwos();
    }, []);




    // contact
    const fetchContacts = async () => {
        try {
            const response = await axios.get(`${server}/contact/public/get-all-information`);
            setContacts(response.data.contacts);
            // console.log(response.data.contacts);

        } catch (error) {
            console.error("Error fetching contacts:", error);
            toast.error("Failed to fetch contacts.");
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    // Extract the phone number from the contact data
    const phoneNumber = contact.length > 0 ? contact[0].phoneNumber : ""; // Fallback number

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
                    {sectionTwo.length > 0 ? (
                        <>
                            <div className="image-container">

                                <img src={sectionTwo[0].cardUrl} alt="About-Us" />


                            </div>
                        </>

                    ) : "Loading..."}


                    <div className="content">
                        <div className="content">
                            <h2>{sectionTwo.length > 0 ? sectionTwo[0].hOne : "Loading..."}</h2>
                            <h2>{sectionTwo.length > 0 ? sectionTwo[0].hTwo : "Loading..."}</h2>
                            <p>{sectionTwo.length > 0 ? sectionTwo[0].content : "Loading..."}</p>

                            <a href={`tel:${phoneNumber}`}>
                                <button>
                                    <Phone />
                                    Call Now
                                </button>
                            </a>
                        </div>


                    </div>

                </div>


            </section>
        </>
    );
};

export default AboutUs;
