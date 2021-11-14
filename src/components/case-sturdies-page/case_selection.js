import axios from "axios";
import { useEffect, useState } from "react";
import ProjectRow from "../Reusable-components/project_row";
import ProjectRow2 from "../Reusable-components/project_row2";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { useDispatch } from "react-redux";
import EmptyState from "../Reusable-components/empty_state";

const CaseSelection = () => {
  const [selectCat, setSelectCat] = useState();
  const [loading, setLoading] = useState(false);
  // const [empty, setEmpty] = useState();
  // const [activeCat, setActiveCat] = useState("");
  // let arry;

  const dispatch = useDispatch();
  const { openCasestudy } = bindActionCreators(actionCreators, dispatch);

  const [active, setActive] = useState({
    Allworks: "active",
    Branding: "",
    WebDesign: "",
    MobileApp: "",
    Marketing: "",
  });
  const [sturdies, setSturdies] = useState();
  const url = "https://qeola-api.herokuapp.com/api/v1/projects?page=1&limit=5";

  useEffect(() => {
    setLoading(true);
    axios.get(url).then(
      (response) => {
        setLoading(false);
        // console.log(response);
        setSturdies(
          response &&
            response.data.data.map((item, i) => {
              return i % 2 === 0 ? (
                <ProjectRow2
                  title={item.title}
                  content={item.description}
                  image={item.image}
                  key={item._id}
                  project={() => openCasestudy(item.id)}
                  path={`/project/${item.id}`}
                />
              ) : (
                <ProjectRow
                  title={item.title}
                  content={item.description}
                  image={item.image}
                  key={item._id}
                  project={() => openCasestudy(item.id)}
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
    axios.get("https://qeola-api.herokuapp.com/api/v1/categories").then(
      (response) => {
        setSelectCat(response && response.data.data);
      },
      (error) => {
        // console.log(error);
      }
    );
  }, []);

  const Allworks = () => {
    setActive({
      Allworks: "active",
      Branding: "",
      WebDesign: "",
      MobileApp: "",
      Marketing: "",
    });

    axios.get(url).then(
      (response) => {
        // console.log(response);
        setSturdies(
          response &&
            response.data.data.map((item, i) => {
              return i % 2 === 0 ? (
                <ProjectRow2
                  title={item.title}
                  content={item.description}
                  image={item.image}
                  key={item._id}
                  project={() => openCasestudy(item.id)}
                />
              ) : (
                <ProjectRow
                  title={item.title}
                  content={item.description}
                  image={item.image}
                  key={item._id}
                  project={() => openCasestudy(item.id)}
                />
              );
            })
        );
      },
      (error) => {
        // console.log(error);
      }
    );
  };

  const otherCategories = (category, actCat) => {
    setActive({
      Allworks: "",
      branding: category,
      WebDesign: "",
      MobileApp: "",
      Marketing: "",
    });
    axios.get(url).then(
      (response) => {
        // response &&
        const arry = response.data.data.filter(
          (filt) => filt.category.name === category
        );
        if (arry.length === 0) {
          setSturdies(
            <EmptyState
              image={"/images/empty-state/Group2.png"}
              text={"No case Study"}
            />
          );
        } else
          setSturdies(
            arry.map((item, i, arr) => {
              // console.log(arr);
              // setEmpty(arr.length);
              return i % 2 === 0 ? (
                <ProjectRow2
                  title={item.title}
                  content={item.description}
                  image={item.image}
                  key={item._id}
                  project={() => openCasestudy(item.id)}
                />
              ) : (
                <ProjectRow
                  title={item.title}
                  content={item.description}
                  image={item.image}
                  key={item._id}
                  project={() => openCasestudy(item.id)}
                />
              );
            })
          );

        // setSturdies(arry);
        // setEmpty(arry);
      },
      (error) => {
        // console.log(error);
      }
    );
    // axios.get("https://qeola-api.herokuapp.com/api/v1/categories").then(
    //   (response) => {
    //     setActive(
    //       response &&
    //         response.data.data.map((item, i, arr) => {
    //           if (item.id === actCat) {
    //             return {};
    //           }
    //         })
    //     );
    //   },
    //   (error) => {
    //     // console.log(error);
    //   }
    // );
    // console.log({ activeCat });
  };

  // const MobileApp = () => {
  //   setActive({
  //     Allworks: "",
  //     Branding: "",
  //     WebDesign: "",
  //     MobileApp: "active",
  //     Marketing: "",
  //   });
  //   axios.get(url).then(
  //     (response) => {
  //       // console.log(response);
  //       setSturdies(
  //         response &&
  //           response.data.data.map((item, i) => {
  //             if (item.category.name === "Mobile App") {
  //               return i % 2 === 0 ? (
  //                 <ProjectRow2
  //                   title={item.title}
  //                   content={item.description}
  //                   image={item.image}
  //                   key={item._id}
  //                   project={() => openCasestudy(item.id)}
  //                 />
  //               ) : (
  //                 <ProjectRow
  //                   title={item.title}
  //                   content={item.description}
  //                   image={item.image}
  //                   key={item._id}
  //                   project={() => openCasestudy(item.id)}
  //                 />
  //               );
  //             }
  //           })
  //       );
  //     },
  //     (error) => {
  //       // console.log(error);
  //     }
  //   );
  // };

  // const Marketing = () => {
  //   setActive({
  //     Allworks: "",
  //     Branding: "",
  //     WebDesign: "",
  //     MobileApp: "",
  //     Marketing: "active",
  //   });
  //   axios.get(url).then(
  //     (response) => {
  //       // console.log(response);
  //       setSturdies(
  //         response &&
  //           response.data.data.map((item, i) => {
  //             if (item.category.name === "Marketing") {
  //               return i % 2 === 0 ? (
  //                 <ProjectRow2
  //                   title={item.title}
  //                   content={item.description}
  //                   image={item.image}
  //                   key={item._id}
  //                   project={() => openCasestudy(item.id)}
  //                 />
  //               ) : (
  //                 <ProjectRow
  //                   title={item.title}
  //                   content={item.description}
  //                   image={item.image}
  //                   key={item._id}
  //                   project={() => openCasestudy(item.id)}
  //                 />
  //               );
  //             }
  //           })
  //       );
  //     },
  //     (error) => {
  //       // console.log(error);
  //     }
  //   );
  // };

  // const openProject = (id) => {
  //   axios.get(`https://qeola-api.herokuapp.com/api/v1/projects/${id}`).then(
  //     (response) => {
  //       console.log(response);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // };
  // console.log(empty);
  // console.log({ arry });
  // console.log({ empty });
  // console.log({ sturdies });

  return (
    <div>
      <section id="case-study">
        {loading && (
          <div className="overlayc d-flex justify-content-center align-items-center">
            <div className="loader"></div>
          </div>
        )}
        <div className="container">
          <div className="my-5 pt-5">
            <button
              className={`shadow-none px-0 mx-2 py-1 ${active.Allworks}`}
              onClick={Allworks}
            >
              All Works
            </button>
            {selectCat &&
              selectCat.map((item) => {
                return (
                  <button
                    key={item.id}
                    className={`shadow-none px-0 mx-3 py-1 ${
                      active.branding === item.name ? "active" : ""
                    }`}
                    onClick={() => otherCategories(item.name, item.id)}
                  >
                    {item.name}
                  </button>
                );
              })}
          </div>
          <div className="my-5 pb-5">{sturdies}</div>
        </div>
      </section>
    </div>
  );
};

export default CaseSelection;
