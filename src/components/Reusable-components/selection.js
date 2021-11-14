import axios from "axios";
import { useEffect, useState } from "react";
import EmptyState from "./empty_state";
// import { useSelector } from "react-redux";

// CSS
import "./selection.css";
const Selection = () => {
  const [selectCat, setSelectCat] = useState();
  const [brands, setBrands] = useState();
  const [loading, setLoading] = useState(false);
  // const [act, setAct] = useState({ activeId: null });
  const [active, setActive] = useState({
    Allworks: "active",
    Branding: "",
    WebDesign: "",
    MobileApp: "",
    Marketing: "",
  });

  useEffect(() => {
    setLoading(true);

    axios.get(`https://qeola-api.herokuapp.com/api/v1/clients`).then(
      (response) => {
        setLoading(false);
        // console.log(response);
        setBrands(
          response &&
            response.data.data.map((item) => {
              return (
                <div
                  className="col-6 col-lg-2 col-md-3  align-self-center text-center px-5 px-md-4 py-4"
                  key={item.id}
                >
                  <img
                    src={item.image}
                    alt="client's brand logo"
                    className="img-fluid w-75"
                  />
                </div>
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
        // setAct(
        //   response &&
        //     response.data.data.map((item) => {
        //       return act.activeId === item.name;
        //     })
        // );
        // console.log(act);
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
    axios.get(`https://qeola-api.herokuapp.com/api/v1/clients`).then(
      (response) => {
        // console.log(response);
        setBrands(
          response &&
            response.data.data.map((item) => {
              return (
                <div
                  className="col-6 col-lg-2 col-md-3  align-self-center text-center px-5 px-md-4 py-4"
                  key={item.id}
                >
                  <img
                    src={item.image}
                    alt="client's brand logo"
                    className="img-fluid"
                  />
                </div>
              );
            })
        );
      },
      (error) => {
        // console.log(error);
      }
    );
  };
  // console.log(active);
  const otherCategories = (category) => {
    // console.log(act);
    // setAct({ activeId: id });

    setActive({
      Allworks: "",
      Branding: `${category}`,
      WebDesign: "",
      MobileApp: "",
      Marketing: "",
    });

    axios.get(`https://qeola-api.herokuapp.com/api/v1/clients`).then(
      (response) => {
        const arry = response.data.data.filter(
          (filt) => filt.category.name === category
        );

        if (arry.length === 0) {
          setBrands(
            <EmptyState
              image={"/images/empty-state/Group1.png"}
              text={"No client"}
            />
          );
        } else {
          setBrands(
            arry.map((item) => {
              return (
                item.category.name === category && (
                  <div
                    className="col-6 col-lg-2 col-md-3  align-self-center text-center px-5 px-md-4 py-4"
                    key={item.id}
                  >
                    <img
                      src={item.image}
                      alt="client's brand logo"
                      className="img-fluid"
                    />
                  </div>
                )
              );
            })
          );
        }
      },
      (error) => {
        // console.log(error);
      }
    );
  };

  return (
    <section id="selection">
      {loading && (
        <div className="overlayc d-flex justify-content-center align-items-center">
          <div className="loader"></div>
        </div>
      )}
      <div className="container">
        <div className="my-5 pt-5">
          <button
            className={`shadow-none px-0 mx-3 py-1 ${active.Allworks}`}
            onClick={Allworks}
          >
            All Clients
          </button>
          {selectCat &&
            selectCat.map((item) => {
              return (
                <button
                  key={item._id}
                  className={
                    active.Branding === item.name
                      ? `shadow-none px-0  mx-3 py-1 active `
                      : `shadow-none px-0 mx-3 py-1`
                  }
                  // value={item.name}
                  onClick={() => otherCategories(item.name, item.id)}
                >
                  {item.name}
                </button>
              );
            })}
        </div>
        <div className="row py-2 align-content-center justify-content-start my-5 pb-5">
          {brands}
        </div>
      </div>
    </section>
  );
};

export default Selection;
