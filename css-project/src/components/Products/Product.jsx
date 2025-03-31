import React, { useState } from "react";
import "./Product.css";

const products = {
  BATTERIES: {
    title: "BATTERIES",
    description:
      "We provide rechargeable batteries that meet innovative technologies with environmental responsibility. We provide advanced battery technologies from cell to pack level, with high energy and power densities (Li-ion Batteries, Na-ion Batteries, All Solid-State Batteries) for a variety of applications across automobiles, consumer electronics, renewable energy storage, and strategic sectors. All our products are tested rigorously to ensure their long life and safe operation.",
    formFactors: [
      { name: "21700-NMC", image: "./imgs/first.png" },
      { name: "32700-NMC", image: "./imgs/seond.png" },
      { name: "PRISMATIC-LFP", image: "./imgs/third.png" },
      { name: "PRISMATIC-NIB", image: "./imgs/fourth.png" },
    ],
  },
  SUPERCAPACITOR: {
    title: "SUPERCAPACITOR",
    description:
      "Our supercapacitors are engineered to deliver high pulse/short-term peak power. We also provide hybrid supercapacitors, enabling high voltage at the cell level. We extend solutions from cell to module level for fast charging, covering a wide range of applications in automotive, renewable energy, and strategic sectors for regenerative braking, short-term storage and burst-power delivery. All our products are manufactured to sustain the vibrations in harsh environments with an ultra-long cycle and calendar life.",
    chemistryHeading: "CELL CHEMISTRY",
    chemistryLines: ["Activated carbon", "Activated carbon - Graphene"],
    formFactors: [
      { name: " CYLINDRICAL 601138", image: "./imgs/SFirst.png" },
      { name: " PRISMATIC LI-SUPERCAP", image: "./imgs/Ssecond.png" },
    ],
  },
};

const ProductPage = () => {
  const [selectedTab, setSelectedTab] = useState("BATTERIES");
  const [selectedFactor, setSelectedFactor] = useState(products[selectedTab].formFactors[0]);
  const data = products[selectedTab];

  return (
    <div className="container">
      <div className="helloContainer">
        <h2 className="helloText">PRODUCTS</h2>
        <hr className="helloHover" />
      </div>

      {/* Tabs for switching between BATTERIES and SUPERCAPACITOR */}
      <div className="tabs">
        {Object.keys(products).map((key) => (
          <span
            key={key}
            className={selectedTab === key ? "active" : ""}
            onClick={() => {
              setSelectedTab(key);
              setSelectedFactor(products[key].formFactors[0]);
            }}
          >
            {products[key].title}
          </span>
        ))}
      </div>

      < p className="description"> {data.description}</p>

      {/* Conditionally render only in SUPERCAPACITOR (without bullet points) */}
      {selectedTab === "SUPERCAPACITOR" && (
        <div className="description"  style={{marginBottom:"50px",marginTop:"50px"}} id="cell-chemistry">
          <h4 style={{color:" rgb(38, 37, 37)"}}>{data.chemistryHeading}</h4>
          
          {data.chemistryLines.map((line, index) => (
            <p className="" key={index}>{line}</p>
          ))}
        </div>
      )}

      <div className="PlacingContent">
        {/* FORM FACTORS Heading (Only for BATTERIES) */}
        {selectedTab === "BATTERIES" && <h4  style={{color:"black", fontSize:"1.5rem"}} id="form_Factor" className="form-factors-heading">FORM FACTORS</h4>}
        
        <div className="content_Product">
          <div className="form-factors">
            {data.formFactors.map((factor) => (
              <div
                key={factor.name}
                className={`factor ${selectedFactor.name === factor.name ? "active" : ""}`}
                onClick={() => setSelectedFactor(factor)}
              >
                {factor.name}
              </div>
            ))}
          </div>

          <div className="image-container">
            <img src={selectedFactor.image} alt={selectedFactor.name} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
