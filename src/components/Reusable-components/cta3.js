import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "../home-page/hero.css";

const Cta3 = (props) => {
  const [animate, setAnimate] = useState(false);
  const [animateA, setAnimateA] = useState(false);

  const ActiveAnimeA = () => {
    setAnimateA(true);
  };
  const DeactiveAnimeA = () => {
    setAnimateA(false);
  };

  const ActiveAnime = () => {
    setAnimate(true);
  };
  const DeactiveAnime = () => {
    setAnimate(false);
  };
  return (
    <div className="m-0 row w-75 mx-auto">
      <div className="col-12 col-sm-6 ">
        <a
          href={props.pathA}
          className={`btn more-clients-btn p-0 m-0 my-1 shadow-none fw-bold`}
          onMouseOver={ActiveAnimeA}
          onMouseOut={DeactiveAnimeA}
        >
          {props.textA && (
            <i
              className={
                animateA
                  ? `fas fa-arrow-left m-2 animateA`
                  : `fas fa-arrow-left m-2`
              }
            ></i>
          )}
          {props.textA}
        </a>
      </div>
      <div className="col-12 col-sm-6">
        {" "}
        <a
          href={props.pathB}
          className={`btn more-clients-btn p-0 m-0 my-1 shadow-none fw-bold`}
          onMouseOver={ActiveAnime}
          onMouseOut={DeactiveAnime}
        >
          {props.textB}

          {props.textB && (
            <i
              className={
                animate
                  ? `fas fa-arrow-right m-2 animate`
                  : `fas fa-arrow-right m-2`
              }
            ></i>
          )}
        </a>
      </div>{" "}
    </div>
  );
};
export default Cta3;
