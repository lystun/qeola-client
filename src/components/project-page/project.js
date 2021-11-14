import Header from "../Reusable-components/navbar";
import Contact from "../Reusable-components/contact";
import ProjectHero from "./project_hero";
import ProjectBody from "./proj_body";
import Footer from "../Reusable-components/footer";

// CSS
import "./project.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Cta3 from "../Reusable-components/cta3";

const Project = (props) => {
  const [hero, setHero] = useState();
  const [next, setNext] = useState();
  const [loading, setLoading] = useState(false);
  // const [prev, setPrev] = useState();
  // let nxt;
  useEffect(() => {
    setLoading(true);
    // console.log({ next });
    // setPrev(
    //   axios.get(`https://qeola-api.herokuapp.com/api/v1/projects`).then(
    //     (response) => {
    //       console.log("prev" + response);
    //       // if(props.match.params.id === ){

    //       // }
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   )
    // );
    axios
      .get(
        `https://qeola-api.herokuapp.com/api/v1/projects/${props.match.params.id}`
      )
      .then(
        (response) => {
          setLoading(false);
          // console.log(response);
          setHero(
            <div>
              <ProjectHero
                image={response.data.data.image}
                title={response.data.data.title}
                description={response.data.data.description}
              />
              <ProjectBody
                content={response.data.data.content}
                // nextPage={next}
                // prevPage={prev}
              />
            </div>
          );
        },
        (error) => {
          setLoading(false);
          // console.log(error);
        }
      );
    axios.get(`https://qeola-api.herokuapp.com/api/v1/projects`).then(
      (response) => {
        setNext(
          response &&
            response.data.data.map((item, i, arr) => {
              // console.log({ win: i, len: arr.length - 1 });
              return (
                item._id === props.match.params.id && (
                  <div className="text-center my-5 py-5" key={i}>
                    <Cta3
                      pathB={`/project/${
                        i === arr.length - 1 ? arr[0].id : arr[i + 1].id
                      }`}
                      pathA={`/project/${
                        i === 0 ? arr[arr.length - 1].id : arr[i - 1].id
                      }`}
                      // pathB={
                      //   i === arr.length
                      //     ? `/project/${arr[i].id}`
                      //     : `/project/${arr[i + 1].id}`
                      // }
                      // pathA={
                      //   i === 0
                      //     ? `/project/${arr[i].id}`
                      //     : `/project/${arr[i - 1].id}`
                      // }
                      textA={"Previous Project"}
                      textB={"Next Project"}
                    />
                  </div>
                )
              );
            })
          // .indexOf(props.match.params.id)
        );
      },
      (error) => {
        // console.log(error);
      }
    );

    // axios.get(`https://qeola-api.herokuapp.com/api/v1/projects`).then(
    //   (response) => {
    //     console.log(response);
    //     setNext(
    //       response &&
    //         response.data.data.map((item, i) => {
    //           if (item.category.id === props.match.params.id) {
    //             return (
    //               <div className="text-center">
    //                 <Cta3
    //                   pathA={`project/${--item.id}`}
    //                   textA={"Previous Project"}
    //                   textB={"Next Project"}
    //                 />
    //               </div>
    //             );
    //           }
    //         })
    //     );
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // ),
    // setPrev();
  }, []);
  return (
    <div>
      {loading && (
        <div className="overlayc d-flex justify-content-center align-items-center">
          <div className="loader"></div>
        </div>
      )}
      <Header />
      {hero}
      {next}
      {/* <ProjectHero /> */}
      {/* <ProjectBody /> */}
      <Contact title={"Inspired? Let’s Talk"} />
      <Footer />
    </div>
  );
};

export default Project;
