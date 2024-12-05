import img1 from "../assets/Construction-Cement-bulk.jpeg"


const Construction = () => {
  return (
    <section className="construction-container">
      <div className="construction-header">
        <h2>Reliable Cement Services</h2>
      </div>

      {/* 3 Cards */}
      <section className="cards-container" >
        <div className="card">
          <figure className="card-figure">
            <img src={img1} alt="Concrete Mix Supply Logo" />
          </figure>
          <div className="card-content">
            <h3>Premium Concrete Mix Supply</h3>
            <p>
              For large-scale projects, we understand the need for an efficient procurement process.
              We offers a reliable solution for all your bulk cement needs, ensuring a smooth experience from start to finish.
            </p>
          </div>
        </div>

        <div className="card">
          <figure className="card-figure">
            <img src={img1} alt="Cement Franchisee Logo" />
          </figure>
          <div className="card-content">
            <h3>Cement Business Franchise</h3>
            <p>
              Join our Franchisee Program, where success meets opportunity. Enter the thriving construction materials market and build a prosperous business with our trusted support.
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
              Join the NonTradeCement.org Cement Dealership Program – an exclusive opportunity to tap into the growing
              construction materials market and build a successful business.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Construction;
