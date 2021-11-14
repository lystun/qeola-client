// import ReactPlayer from "react-player";
// import HeroVideo from "./vid.mp4";
import ReactTypingEffect from "react-typing-effect";

import "./hero.css";
// import { useState } from "react";
import Cta1 from "../Reusable-components/cta1";

const Hero = () => {
  // const [count, setCount] = useState(1);

  return (
    // <header style={{ backgroundImage: `url("images/Home/vid.mp4")` }}></header>
    <div
      className="hero-container"
      style={{
        backgroundImage: `url("images/hero.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <ReactPlayer
        url={HeroVideo}
        playing
        loop
        muted
        width="100%"
        height="100%"
      /> */}
      <div className="overlay">
        <div className="container">
          <div className="hero-text mx-auto ms-md-0 align-text-center justify-content-center text-center text-md-start">
            <h1 className="fw-bold">
              <ReactTypingEffect
                staticText={"We Will Make Your Brand"}
                text={[
                  "Visible",
                  "Memorable",
                  "Lovable",
                  "Accessible",
                  "Powerful",
                ]}
                eraseDelay={3000}
                typingDelay={0}
              />
            </h1>

            <Cta1 text={"See the clients we have served"} path={"/clients"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
