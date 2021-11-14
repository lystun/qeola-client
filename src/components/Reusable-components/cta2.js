import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "../home-page/hero.css";

const Cta2 = (props) => {
  const [animate, setAnimate] = useState(false);

  const ActiveAnime = () => {
    setAnimate(true);
  };
  const DeactiveAnime = () => {
    setAnimate(false);
  };
  return (
    <div className="m-0">
      <Link
        to={props.path ? props.path : "/"}
        className={`btn more-clients-btn p-0 m-0 my-2 fw-bold shadow-none `}
        onMouseOver={ActiveAnime}
        onMouseOut={DeactiveAnime}
      >
        {props.text}

        {props.text && (
          <i
            className={
              animate
                ? `fas fa-arrow-right m-2 animate`
                : `fas fa-arrow-right m-2`
            }
          ></i>
        )}
      </Link>
    </div>
  );
};
export default Cta2;
