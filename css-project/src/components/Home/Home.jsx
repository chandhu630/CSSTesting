import React, { useEffect, useState } from "react";
import "./Home.css";

const slides = [
  {
    image: "https://www.godienergy.com/img/hero/discover.webp",
    title: "DISCOVER",
    description: "The New Dawn Of Energy Technology",
  },
  {
    image: "https://www.godienergy.com/img/hero/energy.webp",
    title: "HARVEST",
    description: "The New Dawn Of Energy Technology",
  },
  {
    image: "https://www.godienergy.com/img/hero/forest.webp",
    title: "VERDANT",
    description: "The New Dawn Of Energy Technology",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000); // 3 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${slides[current].image})` }}
    >
      <div className="content">
        <h1>{slides[current].title}</h1>
        <p>{slides[current].description}</p>
      </div>

      <div className="bars">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`bar ${current === index ? "active" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Home;
