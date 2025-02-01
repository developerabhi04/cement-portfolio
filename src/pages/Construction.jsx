import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { server } from "../server.js";


const Construction = () => {

  const [sectionOnes, setSectionOne] = useState([]);

  // Fetch all Section1
  const fetchSectionOnes = async () => {
    try {
      const response = await axios.get(`${server}/section-one/public/get-all-section-one`);
      setSectionOne(response.data.sectionOnes);
      // console.log(response.data.sectionOnes);
    } catch (error) {
      console.error("Error fetching sectionOne:", error);
      toast.error("Failed to fetch sectionOne.");
    }
  };

  useEffect(() => {
    fetchSectionOnes();
  }, []);
  return (
    <section className="construction-container">
      <div className="construction-header">
        <h2>{sectionOnes.length > 0 ? sectionOnes[0].hOne : "Loading..."}</h2>
      </div>

      {/* 3 Cards */}
      <section className="cards-container">

        {sectionOnes.map((value, index) => (
          <div className="card" key={index}>
            <figure className="card-figure">
              <img src={value.cardUrl} alt="Concrete Mix Supply Logo" />
            </figure>
            <div className="card-content">
              <h3>{value.hTwo}</h3>
              <p>{value.content}</p>
            </div>
          </div>
        ))}

      </section>
    </section>
  );
};

export default Construction;
