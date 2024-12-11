import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const TermsConditions = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Helmet>
                <title>Terms and Conditions | Your Website Name</title>
                <meta name="description" content="Read the terms and conditions of our website, which outline the rules and regulations for using our services." />
                <meta name="keywords" content="terms, conditions, website, rules, regulations" />
            </Helmet>

            <div className="terms-conditions-page">
                <div className="content-container">
                    <header className="page-header">
                        <h1 className="page-title">Terms and Conditions</h1>
                        <p className="page-description">
                            By accessing and using this website, you agree to be bound by these terms and conditions. Please read carefully.
                        </p>
                    </header>

                    <section className="section">
                        <h2 className="section-title">1. Acceptance of Terms</h2>
                        <p className="section-content">
                            By using our website, you agree to abide by these terms and conditions and our Privacy Policy. If you disagree
                            with any part of the terms, do not use the website.
                        </p>
                    </section>

                    <section className="section">
                        <h2 className="section-title">2. Use of the Website</h2>
                        <p className="section-content">
                            You agree to use this website in a lawful manner. Unauthorized use or access is prohibited.
                        </p>
                    </section>

                    <section className="section">
                        <h2 className="section-title">3. Account Registration</h2>
                        <p className="section-content">
                            If you register for an account, you are responsible for keeping your login credentials secure and up-to-date.
                        </p>
                    </section>

                    <section className="section">
                        <h2 className="section-title">4. Intellectual Property</h2>
                        <p className="section-content">
                            All content on this website is owned by us and protected by intellectual property laws.
                        </p>
                    </section>

                    <section className="section">
                        <h2 className="section-title">5. Limitation of Liability</h2>
                        <p className="section-content">
                            We are not responsible for any damages arising from the use of our website or services.
                        </p>
                    </section>

                    <section className="section">
                        <h2 className="section-title">6. Termination</h2>
                        <p className="section-content">
                            We reserve the right to suspend or terminate your access if we believe you have violated these terms.
                        </p>
                    </section>

                    <section className="section">
                        <h2 className="section-title">7. Changes to Terms and Conditions</h2>
                        <p className="section-content">
                            We may update these terms from time to time. Changes will be posted on this page.
                        </p>
                    </section>

                    <section className="section">
                        <h2 className="section-title">8. Governing Law</h2>
                        <p className="section-content">
                            These terms will be governed by the laws of [Your Country]. Any disputes will be resolved in the courts of [Your Country].
                        </p>
                    </section>

                    <section className="section">
                        <h2 className="section-title">9. Contact Us</h2>
                        <p className="section-content">
                            For any inquiries, contact us at{' '}
                            <a href="mailto:contact@nontradecement.org" className="email-link">contact@nontradecement.org</a>.
                        </p>
                    </section>
                </div>
            </div>
        </>
    );
};

export default TermsConditions;





// {/* <Helmet>
//     {/* Standard SEO */}
//     <title>Privacy Policy | Your Website Name</title>
//     <meta name="description" content="Learn more about our privacy policy, how we handle user data, and how we protect your personal information." />
//     <meta name="keywords" content="privacy, policy, data protection, personal information" />
//     <meta name="robots" content="index, follow" />
//     <link rel="canonical" href="https://www.yourwebsite.com/privacy" />

//     {/* Open Graph (OG) tags for social media */}
//     <meta property="og:title" content="Privacy Policy | Your Website Name" />
//     <meta property="og:description" content="Learn more about our privacy policy, how we handle user data, and how we protect your personal information." />
//     <meta property="og:url" content="https://www.yourwebsite.com/privacy" />
//     <meta property="og:type" content="website" />
//     <meta property="og:image" content="https://www.yourwebsite.com/images/privacy-thumbnail.jpg" /> {/* Add the URL to your privacy policy image */}
//     <meta property="og:site_name" content="Your Website Name" />

//     {/* Twitter Cards */}
//     <meta name="twitter:card" content="summary_large_image" />
//     <meta name="twitter:title" content="Privacy Policy | Your Website Name" />
//     <meta name="twitter:description" content="Learn more about our privacy policy, how we handle user data, and how we protect your personal information." />
//     <meta name="twitter:image" content="https://www.yourwebsite.com/images/privacy-thumbnail.jpg" /> {/* Add the URL to your privacy policy image */}
//     <meta name="twitter:site" content="@YourTwitterHandle" /> {/* Optional: Your Twitter handle */}

//     {/* Additional SEO */}
//     <meta name="author" content="Your Website Name" />
//     <meta name="viewport" content="width=device-width, initial-scale=1" />
//     <meta http-equiv="content-language" content="en" />
// </Helmet> */}