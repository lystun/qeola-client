import React, { useState } from "react";
import "./../home-page/hero.css";

const Cta1 = (props) => {
  const [animate, setAnimate] = useState(false);

  const ActiveAnime = () => {
    setAnimate(true);
  };
  const DeactiveAnime = () => {
    setAnimate(false);
  };
  return (
    <div>
      <a
        href={props.path}
        className={`btn hero-cta p-0 m-0 my-3 shadow-none fw-bold`}
        onMouseOver={ActiveAnime}
        onMouseOut={DeactiveAnime}
      >
        {props.text}{" "}
        <i
          id="anime"
          className={
            animate
              ? `fas fa-arrow-right m-2 animate`
              : `fas fa-arrow-right m-2`
          }
        ></i>
      </a>
    </div>
  );
};
export default Cta1;
