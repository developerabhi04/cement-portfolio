import { Phone } from "@mui/icons-material";


const Home = () => {
  return (
    <section className="section-banner" id="home">
      <div className="banner"></div>

      <div className="content-wrapper">
        <div className="content">
          <div className="heading-section">
            <h2>Buy Cement Online | Cement Online booking | Cement booking in bulk</h2>
          </div>

          <div className="subheading-section">
            <h2>High Quality Non-Trade Cement</h2>
          </div>

          <div className="description-section">
            <p>Experience Unmatched Durability and Trust with Our Premium Cement — Where Modern Engineering and Time-Honored Quality Combine to Build Lasting Foundations</p>
          </div>

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

export default Home;
