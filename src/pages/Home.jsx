import { Phone } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { server } from "../server.js";


const Home = () => {
  const [banners, setBanners] = useState([]);

  // contact
  const [contact, setContacts] = useState([]);

  const fetchBanners = async () => {
    try {
      const response = await axios.get(`${server}/banner/public/getbanner`);
      setBanners(response.data.banners);
      // console.log(response.data.banners);

    } catch (error) {
      console.error("Error fetching banners:", error);
      toast.error("Failed to fetch banners.");
    }
  };

  useEffect(() => {
    fetchBanners();
  }, [])





  // contact
  const fetchContacts = async () => {
    try {
      const response = await axios.get(`${server}/contact/public/get-all-information`);
      setContacts(response.data.contacts);
      // console.log(response.data.contacts);

    } catch (error) {
      console.error("Error fetching contacts:", error);
      toast.error("Failed to fetch contacts.");
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Extract the phone number from the contact data
  const phoneNumber = contact.length > 0 ? contact[0].phoneNumber : ""; // Fallback number

  return (
    <section className="section-banner" id="home">
      <div className="banner"
        style={{
          backgroundImage: banners.length > 0
            ? `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 20%, rgb(47 43 43 / 50%) 40%, rgba(0, 0, 0, 0) 100%), 
         url(${banners[0].bannerUrl})`
            : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >

      </div>

      <div className="content-wrapper">
        <div className="content">
          <div className="heading-section">
            <h2>{banners.length > 0 ? banners[0].headingOne : "Loading..."}</h2>
          </div>

          <div className="subheading-section">
            <h2>{banners.length > 0 ? banners[0].headingTwo : "Loading..."}</h2>
          </div>

          <div className="description-section">
            <p>{banners.length > 0 ? banners[0].paragraph : "Loading..."}</p>
          </div>

          <div className="button-section">
            <a href={`tel:${phoneNumber}`}>
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
