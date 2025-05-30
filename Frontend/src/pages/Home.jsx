import React, { useState, useEffect } from "react";
import axios from "axios";
import Logoslider from "../components/Logoslider";
import Home_info from "../components/Home_info";
import img1 from "../images/homeimgnew-min.png";

const Home = () => {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    try {
      const response = await axios.get(
        "https://official-joke-api.appspot.com/random_joke"
      );
      setJoke(response.data.setup + " " + response.data.punchline);
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  };

  return (
    <div className="home-page">
      <div className="helpline-container">
        <h3 className="marquee-text">
          Helpline Number for mental health support : 📞 080 696 33333
        </h3>
      </div>
      <div className="home-allcontent">
        <div className="home-project-intro-image">
          <img
            src={img1}
            alt="PsychEval: Embrace, Empower, Elevate"
            style={{ height: "700px" }} // Adjust the height to your desired value
          />
        </div>

        <div className="home-project-intro-quote">
          <h3>
            "In the journey of life, may you find solace, laughter, and the
            companionship of kindred souls."
          </h3>
        </div>

        <div className="random-joke">
          <header className="random-joke-header">
            <blockquote>
              <h2>{joke}</h2>
            </blockquote>
          </header>
        </div>
        <div className="home-project-intro">
          <p>
            We hope you enjoy our jokes as much as we do. PschEval has many such
            resources to make you smile even when you feel you can't. We also
            offer a variety of other resources to help you understand yourself
            better. After all we all deserve to know what is going inside us.
          </p>
        </div>

        <Home_info />

        <Logoslider />
      </div>
    </div>
  );
};
export default Home;
