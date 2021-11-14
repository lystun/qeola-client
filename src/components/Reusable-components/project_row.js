// import { Link } from "react-router-dom";
import Cta2 from "./cta2";
import "./project_row.css";

const ProjectRow = (props) => {
  return (
    <div className="row align-items-center justify-contents-center text-center text-md-start  my-3 my-md-5 p-0 py-3 py-md-4">
      <div className="col-md-4 order-1 order-sm-0">
        <div
          className={
            window.location.hash === "#/case-study"
              ? "card border-0"
              : "card project-card"
          }
        >
          <div className="card-body p-0 my-3">
            <h2 className="card-title fw-bold fs-3 fs-md-2 m-0 py-2 py-sm-3">
              {props.title}
            </h2>
            <p className="card-text m-0 py-1 ">{props.content}</p>
            {/* <Link
              to="/project"
              className="text-decoration-none"
              href="#"
              className="btn shadow-none more-clients-btn p-0 m-0 py-1 py-sm-2"
            >
              See Project <i class="fas fa-arrow-right m-2"></i>
            </Link> */}
            <Cta2
              xclass={"fw-bold"}
              text={"See Project"}
              path={props.path}
              click={props.project}
            />
          </div>
        </div>
      </div>
      <div className="col-md-8 order-0 order-sm-1">
        <img
          src={props.image}
          alt="Project"
          className="img-fluid b-1 rounded-3"
        />
      </div>
    </div>
  );
};

export default ProjectRow;
