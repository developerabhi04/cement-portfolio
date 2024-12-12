import { Done, Phone } from "@mui/icons-material";


const cementData = [
    {
        icon: <Done />,
        title: "Best White cement",
    },
    {
        icon: <Done />,
        title: "Best Waterproof cement",
    },
    {
        icon: <Done />,
        title: "Best Cement suppliers",
    },
    {
        icon: <Done />,
        title: "Accurate Testing Processes",
    },
    {
        icon: <Done />,
        title: "Best Construction companies",
    },
    {
        icon: <Done />,
        title: "Buy cement online",
    },
    {
        icon: <Done />,
        title: "Cement online booking",
    },
    {
        icon: <Done />,
        title: "Best Cement agency",
    },
    {
        icon: <Done />,
        title: "Cement booking in bulk",
    },
]


const cement = [
    {
        icon: <Done />,
        title: "Best Birla white cement",
    },
    {
        icon: <Done />,
        title: "Best Cement price",
    },
    {
        icon: <Done />,
        title: "Best Bulk cement suppliers",
    },
    {
        icon: <Done />,
        title: "Best Cement agency dealership",
    },

]


const headerMessage = [
    "Find the best cement for home construction & build with Cemstar Supplies cement, Indias No. 1 Cement. Never compromise on 3 things: Location, Contractor, & Cement. Visit now for more tips."
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
                        <a href="tel:918910503006">
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