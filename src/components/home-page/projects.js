import axios from "axios";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Cta2 from "../Reusable-components/cta2";
import ProjectRow from "../Reusable-components/project_row";
import ProjectRow2 from "../Reusable-components/project_row2";

// CSS
import "./projects.css";

const Projects = () => {
  const [project, setProject] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const url =
      "https://qeola-api.herokuapp.com/api/v1/projects?page=1&limit=3";

    axios.get(url).then(
      (response) => {
        setLoading(false);
        // console.log(response);

        setProject(
          response &&
            response.data.data.map((item, i) => {
              return i % 2 === 0 ? (
                <ProjectRow2
                  title={item.title}
                  content={item.description}
                  image={item.image}
                  key={item._id}
                  path={`/project/${item.id}`}
                />
              ) : (
                <ProjectRow
                  title={item.title}
                  content={item.description}
                  image={item.image}
                  key={item._id}
                  path={`/project/${item.id}`}
                />
              );
            })
        );
      },
      (error) => {
        setLoading(false);

        // console.log(error);
      }
    );
  }, []);

  return (
    <section id="projects" className="py-4 py-sm-5">
      {loading && (
        <div className="overlayc d-flex justify-content-center align-items-center">
          <div className="loader"></div>
        </div>
      )}
      <div className="container">
        {project}

        <div className="text-center my-3 my-md-5 pt-md-3">
          <Cta2
            text={"View more case studies"}
            xclass={"fw-bold"}
            path={"case-study"}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
