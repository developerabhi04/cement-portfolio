import { Phone } from "@mui/icons-material";



const Content = {
  heading1: "Order Cement Online | Bundle Cement Purchase | Easy Online Cement Booking",
  heading2: "Premium Quality Cement from BuildPro Solutions",
  para: "Discover the Perfect Blend of Strength and Durability with Our High-Grade Cement — Crafted to Meet the Demands of Modern Construction."
};


const Home = () => {
  return (
    <section className="section-banner" id="home">
      <div className="banner"></div>

      <div className="content-wrapper">
        <div className="content">
          <div className="heading-section">
            <h2>{Content.heading1}</h2>
          </div>

          <div className="subheading-section">
            <h2>{Content.heading2}</h2>
          </div>

          <div className="description-section">
            <p>{Content.para}</p>
          </div>

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

export default Home;
