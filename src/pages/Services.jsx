import img1 from "../assets/Construction-Cement-bulk.jpeg"


const Services = () => {
    return (
        <section className="constructions-containers" id="services">
            <div className="construction-header">
                <p>Services</p>
                <h2>Top-Quality Services Across Diverse Industries!</h2>
            </div>

            {/* 6 Cards */}
            <section className="cards-container">
                <div className="card">
                    <figure className="card-figure">
                        <img src={img1} alt="Concrete Mix Supply Logo" />
                    </figure>
                    <div className="card-content">
                        <h3>Concrete Mix Supply</h3>
                        <p>
                            For large-scale construction projects, we recognize the importance of an efficient and smooth procurement process.
                            NonTradeCement.org provides a reliable, hassle-free solution to fulfill all your bulk cement ordering needs.
                        </p>
                    </div>
                </div>

                <div className="card">
                    <figure className="card-figure">
                        <img src={img1} alt="Cement Franchisee Logo" />
                    </figure>
                    <div className="card-content">
                        <h3>Cement Franchisee</h3>
                        <p>
                            Welcome to the NonTradeCement.org Franchisee Program, where opportunity meets
                            excellence. Are you ready to step into the world of construction materials
                            and build a thriving business?
                        </p>
                    </div>
                </div>

                <div className="card">
                    <figure className="card-figure">
                        <img src={img1} alt="Wholesale Cement Suppliers Logo" />
                    </figure>
                    <div className="card-content">
                        <h3>Wholesale Cement Suppliers</h3>
                        <p>
                            Welcome to NonTradeCement.org Cement Dealership Program – a platform that opens doors to
                            lucrative business opportunities in the dynamic construction materials industry.
                        </p>
                    </div>
                </div>

                <div className="card">
                    <figure className="card-figure">
                        <img src={img1} alt="Wholesale Cement Suppliers Logo" />
                    </figure>
                    <div className="card-content">
                        <h3>Wholesale Cement Suppliers</h3>
                        <p>
                            Welcome to NonTradeCement.org Cement Dealership Program – a platform that opens doors to
                            lucrative business opportunities in the dynamic construction materials industry.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <figure className="card-figure">
                        <img src={img1} alt="Wholesale Cement Suppliers Logo" />
                    </figure>
                    <div className="card-content">
                        <h3>Wholesale Cement Suppliers</h3>
                        <p>
                            Welcome to NonTradeCement.org Cement Dealership Program – a platform that opens doors to
                            lucrative business opportunities in the dynamic construction materials industry.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <figure className="card-figure">
                        <img src={img1} alt="Wholesale Cement Suppliers Logo" />
                    </figure>
                    <div className="card-content">
                        <h3>Wholesale Cement Suppliers</h3>
                        <p>
                            Welcome to NonTradeCement.org Cement Dealership Program – a platform that opens doors to
                            lucrative business opportunities in the dynamic construction materials industry.
                        </p>
                    </div>
                </div>

            </section>
        </section>
    );
};

export default Services;
