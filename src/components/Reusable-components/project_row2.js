// import { Link } from "react-router-dom";
import Cta2 from "./cta2";
import "./project_row.css";

const ProjectRow2 = (props) => {
  return (
    <div className="row align-items-center justify-contents-center text-center text-md-start  my-3 my-md-5 p-0 mx-auto py-3 py-md-4">
      <div className="col-md-8">
        <img src={props.image} alt="Project" className="img-fluid rounded-3" />
      </div>
      <div className="col-md-4 ">
        <div
          className={
            window.location.hash === "#/case-study"
              ? "card border-0"
              : "card project-card"
          }
        >
          <div className="card-body">
            <h2 className="card-title fw-bold fs-3 fs-md-2 py-2">
              {props.title}
            </h2>
            <p className="card-text m-0 py-1">{props.content}</p>
            {/* <Link
              to="/project"
              className="btn more-clients-btn shadow-none p-0 text-decoration-none"
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
    </div>
  );
};

export default ProjectRow2;
