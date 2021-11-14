// import { Link } from "react-router-dom";
import Cta2 from "./cta2";

import "./otherHero.css";

const OtherHero = (props) => {
  return (
    <section id="other-hero">
      <div className="container">
        <div className="hero-header text-center mx-auto d-flex flex-column justify-content-center align-items-center">
          <h1 className={" mb-3 fw-bolder mx-auto"}>
            {props.title}
            <br />
            {props.titleb}
          </h1>
          <p className={props.text ? "mt-2 mb-3 fs-5" : "mt-2 mb-3 d-none"}>
            {props.text}
          </p>
          {/* <Link
            to="/case-study"
            className="btn more-clients-btn p-0 mt-1 mb-3 fw-bold shadow-none mt-5 py-5 my-sm-5 pt-5 py-sm-2"
          >
            {props.cta} {props.cta && <i class="fas fa-arrow-right m-2"></i>}
          </Link> */}
          <Cta2 text={props.cta} xclass={"fw-bold"} path={props.path} />
        </div>
      </div>
    </section>
  );
};

export default OtherHero;
