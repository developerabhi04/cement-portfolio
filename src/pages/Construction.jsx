import img1 from "../assets/Construction-Cement-bulk.jpeg"


const Construction = () => {
  return (
    <section className="construction-container">
      <div className="construction-header">
        <h2>Cement Construction Services</h2>
      </div>

      {/* 3 Cards */}
      <section className="cards-container" >
        <div className="card">
          <figure className="card-figure">
            <img src={img1} alt="Concrete Mix Supply Logo" />
          </figure>
          <div className="card-content">
            <h3>Concrete Mix Supply</h3>
            <p>
              When it comes to large-scale construction projects, we understand the
              significance of a seamless and efficient procurement process. NonTradeCement.org
              offers a hassle-free and reliable solution for all your cement bulk order requirements.
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
      </section>
    </section>
  );
};

export default Construction;
