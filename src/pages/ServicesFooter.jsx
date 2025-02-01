import { Done, Phone } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { server } from "../server.js";



const ServicesFooter = () => {
    const [sectionFive, setSectionFive] = useState([]);
    const [contact, setContacts] = useState([]);

    // Fetch all Section1
    const fetchSectionFives = async () => {
        try {
            const response = await axios.get(`${server}/section-six/public/get-all-section-six`);
            setSectionFive(response.data.sectionSixs);
            // console.log(response.data.sectionSixs);
        } catch (error) {
            console.error("Error fetching sectionOne:", error);
            toast.error("Failed to fetch sectionOne.");
        };
    }

    useEffect(() => {
        fetchSectionFives();
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
        <section className="Services-Footer">
            <div>
                <div>
                    <h1>{sectionFive.length > 0 ? sectionFive[0].hOne : ("loading")}</h1>
                </div>

                <div>
                    <ul>
                        {sectionFive.map((cement, i) => (
                            <li key={i}>
                                <span><Done /></span>
                                <span>{cement.hTwo}</span>
                            </li>
                        ))}
                    </ul>


                    <ul>
                        {sectionFive.map((cement, i) => (
                            <li key={i}>
                                <span>{cement.hThree}</span>
                            </li>
                        ))}
                    </ul>



                    <div className="button-section">
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
    )
}

export default ServicesFooter;