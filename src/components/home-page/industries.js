// import { Link } from "react-router-dom";
import CardIndustry from "../Reusable-components/card_industry";
import Cta2 from "../Reusable-components/cta2";
import "./industries.css";

const Industries = () => {
  return (
    <section id="industries" className="industries py-5">
      <div className="container text-center text-md-start">
        <div className="Section-header py-5">
          <h1 className="fs-1 fs-sm-1 fw-bold">Industries we have served</h1>
        </div>
        <div className="row align-items-center ">
          <div className="col-6 col-lg-3 col-md-3 px-1 p-3">
            <CardIndustry
              title={"Education"}
              image={"images/Home/icons/education.png"}
            />
          </div>
          <div className="col-6 col-lg-3 col-md-3 px-1 ">
            <CardIndustry
              title={"Health"}
              image={"images/Home/icons/health.png"}
            />
          </div>
          <div className="col-6 col-lg-3 col-md-3 px-1 ">
            <CardIndustry
              title={"Agriculture"}
              image={"images/Home/icons/agriculture.png"}
            />
          </div>
          <div className="col-6 col-lg-3 col-md-3 px-1 ">
            <CardIndustry
              title={"Startup and Venture Capital"}
              image={"images/Home/icons/startup_and_venture_capital.png"}
            />
          </div>

          <div className="text-center my-3 my-md-5">
            {/* <Link
              to="/case-study"
              className="btn more-clients-btn p-0 fw-bold shadow-none"
            >
              View more Industries <i class="fas fa-arrow-right m-2"></i>
            </Link> */}
            <Cta2
              text={"View more Industries"}
              path={"/industries"}
              xclass={"fw-bold"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
