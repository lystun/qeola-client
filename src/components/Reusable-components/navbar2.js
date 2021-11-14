import { useState } from "react";
import "./navbar2.css";
import { Link } from "react-router-dom";
// import image from "images/Logo/logo.png";

const NavBar2 = () => {
  const [hamburger, setHamburger] = useState(false);
  const [navbg, setNavbg] = useState("");
  const [proj, setProj] = useState(false);

  const ToggleHamburger = (e) => {
    setHamburger(hamburger ? false : true);
  };

  const ToggleNavBg = (e) => {
    setNavbg(window.pageYOffset > 100 ? "bg-dark" : "");
  };

  const OpenNav = () => {
    setProj(true);
  };

  const CloseNav = () => {
    setProj(false);
  };

  return (
    <section id="navbar2">
      <div id="myNav" className={proj ? "over visible" : "over hidden"}>
        <div className="row align-items-center justify-content-center">
          <div
            className="col-12 col-md-8 left"
            style={{
              objectFit: "cover",
              height: "100vh",
            }}
          >
            <img
              src="/images/Home/menu.jpg"
              alt="menu"
              className=" menu-img img-fluid"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div
            className="col-12 col-md-4 position-relative d-flex flex-column"
            style={{
              objectFit: "cover",
              height: "100vh",
            }}
          >
            <button
              className="btn closebtn fw-bold nav-link nav-linkB fs-5 shadow-none"
              onClick={CloseNav}
            >
              CLOSE {"  "} <i className="fas fa-times px-2"></i>
            </button>
            <div className="over-content text-center text-lg-start w-50 mx-auto ">
              <Link to="/clients" className="fw-bold my-3 fs-1 nav-linkB">
                CLIENTS
              </Link>
              <Link to="/industries" className="fw-bold my-3 fs-1 nav-linkB ">
                INDUSTRIES
              </Link>
              <Link to="/blog" className="fw-bold my-3 fs-1 nav-linkB ">
                BLOG
              </Link>
            </div>
            <div className="row d-inline-block my-2 fs-3  mt-auto mb-4 text-center text-lg-start w-50 mx-auto">
              <a
                href="https://www.facebook.com/officialqeola/"
                className="d-inline"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-square d-inline mx-2 p-2 fs-2 social-icons"></i>
              </a>
              <a
                href="https://www.instagram.com/officialqeola/"
                className="d-inline"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram d-inline mx-2 p-2 fs-2 social-icons"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/qeola"
                className="d-inline"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin d-inline mx-2 p-2 fs-2 social-icons"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <nav
          className={`navbar  navbar-expand-lg navbar-light bg-transparent py-sm-4  ${navbg}`}
          onScroll={ToggleNavBg}
        >
          <div className="container">
            <Link className="navbar-brand me-auto" to="/">
              <img
                src={"/images/logo.png"}
                alt="Qeola's logo"
                className="img-fluid w-50"
              />
            </Link>
            <button
              onClick={ToggleHamburger}
              className="navbar-toggler custom-toggler shadow-none border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <div
                className={
                  hamburger ? "animated-icon11 open" : "animated-icon11"
                }
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item mx-4">
                  <Link
                    className={
                      window.location.pathname === "/about"
                        ? "nav-link px-0 active"
                        : "nav-link px-0"
                    }
                    aria-current="page"
                    to="/about"
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item mx-4">
                  <Link
                    className={
                      window.location.pathname === "/case-study"
                        ? "nav-link px-0 active"
                        : "nav-link px-0"
                    }
                    to="/case-study"
                  >
                    Case Studies
                  </Link>
                </li>
                <li className="nav-item  mx-4">
                  <Link
                    className={
                      window.location.pathname === "/contact"
                        ? "nav-link px-0 active"
                        : "nav-link px-0"
                    }
                    to="/contact"
                  >
                    Talk to us
                  </Link>
                </li>
                <li className="nav-item ps-md-3  px-3 px-sm-0 py-md-0 fs-6 ">
                  {/* <Link
                    class=""
                    to="/contact"
                  >
                    Talk to us
                  </Link> */}
                  <button
                    to=""
                    style={{ cursor: "pointer" }}
                    className="nav-link px-0 btn shadow-none nav-linkage"
                    onClick={OpenNav}
                  >
                    Menu &#9776;
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default NavBar2;
