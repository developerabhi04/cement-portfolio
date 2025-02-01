import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { server } from "../server.js";

const PrivacyPolicy = () => {
    const [contact, setContacts] = useState([]);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


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
    const FullAddress = contact.length > 0 ? contact[0].address : ""; // Fallback number

    return (
        <>
            <Helmet>
                <title>Privacy Policy | Cemstar Supplies</title>
                <meta name="description" content="Learn more about our privacy policy, how we handle user data, and how we protect your personal information." />
                <meta name="keywords" content="privacy, policy, data protection, personal information" />
            </Helmet>

            <div className="privacy-policy-page">
                <div className="content-container">
                    <header className="page-header">
                        <h1 className="page-title">Privacy Policy</h1>
                        <p className="page-description">
                            Your privacy is important to us. This document outlines the information we collect and how we use it.
                        </p>
                    </header>

                    <section className="section">
                        <h2 className="section-title">1. Information We Collect</h2>
                        <p className="section-content">
                            We collect personal data such as your name, email address, phone number, and any other details you provide
                            through our contact forms, services, and registration processes.
                        </p>
                    </section>

                    <section className="section">
                        <h2 className="section-title">2. How We Use Your Information</h2>
                        <p className="section-content">
                            The information we collect helps us improve our services, personalize your experience, and communicate relevant
                            updates.
                        </p>
                        <ul className="section-list">
                            <li>Provide customer support and services</li>
                            <li>Improve website performance and security</li>
                            <li>Send promotional offers (if opted-in)</li>
                        </ul>
                    </section>

                    <section className="section">
                        <h2 className="section-title">3. Data Security</h2>
                        <p className="section-content">
                            We implement security measures to protect your personal information. While we use industry-standard practices,
                            no method of transmission over the internet is fully secure.
                        </p>
                    </section>

                    <section className="section">
                        <h2 className="section-title">4. Cookies</h2>
                        <p className="section-content">
                            We use cookies to enhance your browsing experience. You can manage cookies through your browser settings.
                        </p>
                    </section>

                    <section className="section">
                        <h2 className="section-title">5. Third-Party Services</h2>
                        <p className="section-content">
                            We may share your data with trusted third-party services such as payment processors and analytics tools.
                        </p>
                    </section>


                    <section className="section">
                        <h2 className="section-title">6. Changes to This Privacy Policy</h2>
                        <p className="section-content">
                            We may update this privacy policy. Changes will be posted here with the date of the revision.
                        </p>
                    </section>

                    <section className="section">
                        <h2 className="section-title">7. Contact Us</h2>
                        <p className="section-content">
                            If you have questions, contact us at{' '}
                            <a className="email-link">
                                <br></br>
                                Address: {FullAddress}
                                <br></br>
                                Phone: +91{" "}{phoneNumber}
                            </a>.

                        </p>
                    </section>
                </div>
            </div>

        </>
    );
};

export default PrivacyPolicy;
