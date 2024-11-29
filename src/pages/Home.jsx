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
            <p>Discover the epitome of strength and reliability with Adani Group Cement Nontrade Cement, where innovation meets tradition, and every structure embodies the essence of endurance.</p>
          </div>

          <div className="button-section">
            <button>
              <Phone />
              Call Now
            </button>
          </div>

        </div>
      </div>

    </section>



  )
}

export default Home;
