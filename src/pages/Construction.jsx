import img1 from "../assets/premium-concrete-mix-supply.jpg";
import img2 from "../assets/cement-franchise.jpg";
import img3 from "../assets/Wholesale-cement.jpg";



const services = [
  {
    src: img1,
    heading: "Premium Concrete Mix Supply",
    paragraph: "For large-scale projects, we understand the need for an efficient procurement process. We offers a reliable solution for all your bulk cement needs, ensuring a smooth experience from start to finish.",
  },
  {
    src: img2,
    heading: "Cement Business Franchise",
    paragraph: "Join our Franchisee Program, where success meets opportunity. Enter the thriving construction materials market and build a prosperous business with our trusted support.",
  },
  {
    src: img3,
    heading: "Wholesale Cement Suppliers",
    paragraph: "Join the NonTradeCement.org Cement Dealership Program – an exclusive opportunity to tap into the growing construction materials market and build a successful business.",
  },
]




const Construction = () => {
  return (
    <section className="construction-container">
      <div className="construction-header">
        <h2>Reliable Cement Services</h2>
      </div>

      {/* 3 Cards */}
      <section className="cards-container" >

        {services.map((value, index) => (
          <div className="card" key={index}>
            <figure className="card-figure">
              <img src={value.src} alt="Concrete Mix Supply Logo" />
            </figure>
            <div className="card-content">
              <h3>{value.heading}</h3>
              <p>{value.paragraph}</p>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Construction;
