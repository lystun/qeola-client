// import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
// import propTypes from "prop-types";

import "./admin.css";

const Aside = ({ setToken }) => {
  const dispatch = useDispatch();
  const {
    mainWelcome,
    welcome,
    briefing,
    caseStudy,
    client,
    industry,
    // media,
    category,
    Logout,
  } = bindActionCreators(actionCreators, dispatch);

  // const cred = useSelector((state) => state.output);

  const handleLogout = (e) => {
    e.preventDefault();
    Logout();
  };

  const [active, setActive] = useState({
    blog: "",
    brief: "",
    case: "",
    client: "",
    industry: "",
    media: "",
    category: "",
  });

  const activeBlog = () => {
    setActive({
      blog: "activ",
      brief: "",
      case: "",
      client: "",
      industry: "",
      media: "",
      category: "",
    });
    mainWelcome();
  };

  const activeBrief = () => {
    setActive({
      blog: "",
      brief: "activ",
      case: "",
      client: "",
      industry: "",
      media: "",
      category: "",
    });
    briefing();
  };

  const activeCase = () => {
    setActive({
      blog: "",
      brief: "",
      case: "activ",
      client: "",
      industry: "",
      media: "",
      category: "",
    });
    caseStudy();
  };

  const activeClient = () => {
    setActive({
      blog: "",
      brief: "",
      case: "",
      client: "activ",
      industry: "",
      media: "",
      category: "",
    });
    client();
  };

  const activeIndustry = () => {
    setActive({
      blog: "",
      brief: "",
      case: "",
      client: "",
      industry: "activ",
      media: "",
      category: "",
    });
    industry();
  };

  // const activeMedia = () => {
  //   setActive({
  //     blog: "",
  //     brief: "",
  //     case: "",
  //     client: "",
  //     industry: "",
  //     media: "activ",
  //     category: "",
  //   });
  //   media();
  // };
  const activeCategory = () => {
    setActive({
      blog: "",
      brief: "",
      case: "",
      client: "",
      industry: "",
      media: "",
      category: "activ",
    });
    category();
  };

  return (
    // <div className="m-0 position-fixed ">
    <aside
      className="d-flex flex-column align-items-center mb-auto py-2 aside"
      // style={{ height: "100vh", margin: "0" }}
    >
      <div className="avatar my-4 mb-5 text-center">
        {/* <i class="material-icons fs-1">account_circle</i>{" "} */}
        <img
          src="images/logo.png"
          alt=""
          className="img-fluid w-50 mx-auto"
          onClick={() => welcome()}
        />
      </div>
      <button
        className={
          active
            ? `btn dash-btn py-1 py-md-3 d-flex align-items-center w-100 rounded-0 shadow-none ${active.blog}`
            : "btn dash-btn py-1 py-md-3 d-flex align-items-center w-100 rounded-0 shadow-none"
        }
        onClick={activeBlog}
      >
        <i className="fas fa-blog me-2 p-0 ms-0"></i>Blog
      </button>

      <button
        className={
          active
            ? `btn dash-btn py-1 py-md-3 d-flex align-items-center w-100 rounded-0 shadow-none ${active.brief}`
            : "btn dash-btn py-1 py-md-3 d-flex align-items-center w-100 rounded-0 shadow-none"
        }
        onClick={activeBrief}
      >
        <i className="fas fa-business-time me-2 p-0 ms-0 "></i>
        Brief
      </button>
      <button
        className={
          active
            ? `btn dash-btn py-1 py-md-3 d-flex align-items-center w-100 rounded-0 shadow-none ${active.case}`
            : "btn dash-btn py-1 py-md-3 d-flex align-items-center w-100 rounded-0 shadow-none"
        }
        onClick={activeCase}
      >
        <i className="fas fa-file-alt me-2 p-0 ms-0"></i>Case study
      </button>
      <button
        className={
          active
            ? `btn dash-btn py-1 py-md-3 d-flex align-items-center w-100 rounded-0 shadow-none ${active.client}`
            : "btn dash-btn py-1 py-md-3 d-flex align-items-center w-100 rounded-0 shadow-none"
        }
        onClick={activeClient}
      >
        <i className="fas fa-smile-wink me-2 p-0 ms-0"></i>Client
      </button>
      <button
        className={
          active
            ? `btn dash-btn py-1 py-md-3 d-flex align-items-center w-100 rounded-0 shadow-none ${active.industry}`
            : "btn dash-btn py-1 py-md-3 d-flex align-items-center w-100 rounded-0 shadow-none"
        }
        onClick={activeIndustry}
      >
        <i className="fas fa-users me-2 p-0 ms-0"></i>Users
      </button>
      {/* <a
          className={
            active
              ? `btn dash-btn py-1 py-md-3 d-flex align-items-center w-100 rounded-0 shadow-none ${active.media}`
              : "btn dash-btn py-1 py-md-3 d-flex align-items-center w-100 rounded-0 shadow-none"
          }
          onClick={activeMedia}
        >
          <i class="fas fa-medal me-2 p-0 ms-0"></i>Media mentions
        </a> */}
      <button
        className={
          active
            ? `btn dash-btn py-1 py-md-3 d-flex align-items-center w-100 rounded-0 shadow-none ${active.category}`
            : "btn dash-btn py-1 py-md-3 d-flex align-items-center w-100 rounded-0 shadow-none"
        }
        onClick={activeCategory}
      >
        {/* <i className="fas fa-medal me-2 p-0 ms-0"></i>Category */}
        <span className="material-icons me-2 p-0 ms-0">widgets</span> Category
      </button>
      <Link
        to="/"
        className="btn mt-auto logout-btn align-self-center d-flex align-items-center w-100 rounded-0 d-flex align-items-center fw-bold text-decoration-none shadow-none text-center"
        onClick={handleLogout}
      >
        <i className="material-icons me-2 p-0 ms-0">logout</i> Logout
      </Link>
    </aside>
    // </div>
  );
};
// Aside.propTypes = {
//   setToken: propTypes.func.isRequired,
// };

export default Aside;
