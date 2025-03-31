import React, { useState, useEffect } from "react";
import "./About.css";

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 4); // We know there are 4 images
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
    <div className="About_Fix">
      <div className="About_FLex">
        <div className="AboutFirst_Half">
          <div className="helloContainer">
            <h2 className="helloText">ABOUT US</h2>
            <hr className="helloHover" />
          </div>
          <p>GODI is an innovative organization focused on research and development (R&D), and Giga scale Manufacturing (Indigenous Gigafactory), and Recycling of sustainable green energy storage technology. The company is committed to achieving a zero-carbon footprint by promoting and adopting environmentally benign technologies in the fastest and safest possible way.</p>
          <p>In this domain, GODI is a first-of-its-kind company based in India that is innovating across all verticals of energy storage technology. GODI has India’s largest R&D house with a large team of scientists and engineers, with vast expertise in electrochemistry, material science, thermal engineering, and advanced manufacturing.</p>
          <p>The company’s efforts are to develop ground-breaking materials with unique cell chemistries, superiorly engineered Li-ion cells, Na-ion cells and Supercapacitors by using environmentally friendly electrode making processes and Recycling of spent batteries towards a carbon neutral Giga-scale manufacturing.</p>
        </div>

        <div className="AboutSecond_Half">
          <div className="slider-container">
            {/* Image Tags */}
            <img
              src="https://www.godienergy.com/img/about/cathode.png"
              className={`slider-image ${currentIndex === 0 ? "visible" : "hidden"}`}
              alt="Image 1"
            />
            <img
              src="https://www.godienergy.com/img/cell-images/latest-19/NIB-Prismatic.png"
              className={`slider-image ${currentIndex === 1 ? "visible" : "hidden"}`}
              alt="Image 2"
            />
            <img
            // style={{width:"500px",height:"200px"}}
            id="thirdSlide"
              src="https://www.godienergy.com/img/cell-images/latest-19/LFB-Prismatic.png"
              className={`slider-image ${currentIndex === 2 ? "visible" : "hidden"}`}
              alt="Image 3"
            />
            <img
              src="https://www.godienergy.com/img/cell-images/latest-19/G2000-EP-LIC-Super.png"
              className={`slider-image ${currentIndex === 3 ? "visible" : "hidden"}`}
              alt="Image 4"
            />

            {/* Dots */}
            <div className="vertical-dots">
              {[0, 1, 2, 3].map((index) => (
                <div
                  key={index}
                  className={`dot ${currentIndex === index ? "active" : ""}`}
                  onClick={() => handleDotClick(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
