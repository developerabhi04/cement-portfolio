import { Done, Phone } from "@mui/icons-material";


const cementData = [
    {
        icon: <Done />,
        title: "Premium Quality White Cement",
    },
    {
        icon: <Done />,
        title: "Waterproof Cement for Stronger Structures",
    },
    {
        icon: <Done />,
        title: "Reliable Cement Suppliers Across India",
    },
    {
        icon: <Done />,
        title: "Comprehensive Testing for Superior Quality",
    },
    {
        icon: <Done />,
        title: "Top-Rated Construction Companies You Can Trust",
    },
    {
        icon: <Done />,
        title: "Order Cement Online with Ease",
    },
    {
        icon: <Done />,
        title: "Convenient Cement Booking Made Simple",
    },
    {
        icon: <Done />,
        title: "Leading Cement Agencies for Your Needs",
    },
    {
        icon: <Done />,
        title: "Bulk Cement Orders with Guaranteed Delivery",
    },
]

const cement = [
    {
        icon: <Done />,
        title: "High-Performance Cemstar White Cement",
    },
    {
        icon: <Done />,
        title: "Affordable Cement Prices for Your Projects",
    },
    {
        icon: <Done />,
        title: "Trusted Bulk Cement Suppliers Nationwide",
    },
    {
        icon: <Done />,
        title: "Exclusive Cement Agency Deals and Partnerships",
    },
]

const headerMessage = [
    "Get the finest quality cement for your construction projects with Cemstar Supplies, India’s leading cement supplier. We emphasize on quality, reliable contractors, and the right location for all your building needs. Explore more today!"
]



const ServicesFooter = () => {
    return (
        <section className="Services-Footer">
            <div>
                <div>
                    <h1>{headerMessage}</h1>
                </div>

                <div>
                    <ul>
                        {cementData.map((cement, i) => (
                            <li key={i}>
                                <span>{cement.icon}</span>
                                <span>{cement.title}</span>
                            </li>
                        ))}
                    </ul>


                    <ul>
                        {cement.map((cement, i) => (
                            <li key={i}>
                                <span>{cement.icon}</span>
                                <span>{cement.title}</span>
                            </li>
                        ))}
                    </ul>



                    <div className="button-section">
                        <a href="tel:919903075394">
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