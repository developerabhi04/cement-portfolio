import { useEffect, useState, Fragment } from "react";
import { Add } from "@mui/icons-material";

const LiveCount = () => {
    const [projectCount, setProjectCount] = useState(300);
    const [managerCount, setManagerCount] = useState(499);
    const [toolsCount, setToolsCount] = useState(899);
    const [productCount, setProductCount] = useState(654);

    // Use useEffect to trigger the count-up animation
    useEffect(() => {
        const duration = 4000; // Duration of the count-up
        const step = (targetValue) => Math.ceil(targetValue / (duration / 100));

        const animateCount = (targetValue, setter) => {
            let count = 0;
            const interval = setInterval(() => {
                if (count < targetValue) {
                    count += step(targetValue);
                    setter(count);
                } else {
                    clearInterval(interval);
                }
            }, 100);
        };

        animateCount(300, setProjectCount);
        animateCount(499, setManagerCount);
        animateCount(899, setToolsCount);
        animateCount(654, setProductCount);

    }, []);

    return (
        <Fragment>
            <section className="live-Data">
                <div>
                    <div>
                        <h2>Our Accomplishments</h2>
                        <h1>Experience To Be Trusted</h1>
                    </div>

                    <section>
                        <div>
                            <span className="animate">{projectCount}</span>
                            <span><Add /></span>
                            <h3>Project</h3>
                        </div>

                        <div>
                            <span className="animate">{managerCount}</span>
                            <span><Add /></span>
                            <h3>Project Managers</h3>
                        </div>

                        <div>
                            <span className="animate">{toolsCount}</span>
                            <span><Add /></span>
                            <h3>Development Tools</h3>
                        </div>

                        <div>
                            <span className="animate">{productCount}</span>
                            <span><Add /></span>
                            <h3>Innovative Products</h3>
                        </div>
                    </section>
                </div>
            </section>



            {/* section section */}
            <section className="bulk-data">
                <div>

                    {/* right */}
                    <div>
                        <h2>Cement Booking in bulk</h2>
                        <div>
                            <p>
                                Establishing an online cement dealership that proudly features an array of premium brands demands meticulous planning,
                                strategic brand alliances, and impactful marketing approaches. Below is a comprehensive step-by-step manual on initiating
                                and overseeing an online cement dealership under our esteemed brand, ensuring excellence and diversity in our product offerings.
                            </p>
                        </div>
                    </div>

                    {/* left card */}
                    <div>
                        <h2>Cement Booking in bulk</h2>
                        <div>
                            <p>
                                Establishing an online cement dealership that proudly features an array of premium brands demands meticulous planning,
                                strategic brand alliances, and impactful marketing approaches. Below is a comprehensive step-by-step manual on initiating
                                and overseeing an online cement dealership under our esteemed brand, ensuring excellence and diversity in our product offerings.
                            </p>
                        </div>
                    </div>

                </div>

            </section>


        </Fragment>
    );
};

export default LiveCount;
