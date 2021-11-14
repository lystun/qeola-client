// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import "../home-page/hero.css";

const ProjectHero = (props) => {
  // const proj = useSelector((state) => state.output);
  // const [image, setImage] = useState();
  // const [name, setName] = useState();
  // const [description, setDescription] = useState();

  // let image;
  // useEffect(() => {
  //   setImage(proj.openCaseStudy && proj.openCaseStudy.data.data.image);
  //   setName(proj.openCaseStudy && proj.openCaseStudy.data.data.title);
  //   setDescription(
  //     proj.openCaseStudy && proj.openCaseStudy.data.data.description
  //   );
  // }, []);

  return (
    // <header style={{ backgroundImage: `url("images/Home/vid.mp4")` }}></header>
    <div
      className="hero-container"
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px",
      }}
    >
      <div className="overlayb">
        <div className="container">
          <div className="hero-text mx-auto ms-md-0 align-text-center justify-content-center text-start text-md-start">
            <h1 className="fw-bold fs-1">{props.title}</h1>
            <p
              className="btn hero-para project-hero-desc p-0 m-0 my-2 text-start text-md-start "
              style={{ cursor: "text" }}
            >
              {props.description}
              {/* Developing a brand identity for a venture buider{" "} */}
              {/* <i class="fas fa-arrow-right m-2"></i> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHero;
