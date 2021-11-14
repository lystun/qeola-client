import axios from "axios";
import { useState } from "react";
import "../home-page/hero.css";
import "./footer.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const [email, setEmail] = useState("");
  // const [loading, setLoading] = useState(true);
  // console.log(email);

  const subcribeUser = (e) => {
    e.preventDefault();
    // setLoading(true);
    axios
      .post("https://qeola-api.herokuapp.com/api/v1/users/subscribe", { email })
      .then(
        (response) => {
          // setLoading(false);
          toast.success(
            "Thank you for subscribing to our mailing list. Expect amazing content from us soon.",
            {
              position: "top-right",
              autoClose: 8000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
        },
        (error) => {
          // setLoading(false);
          toast.error("Something went wrong please try again", {
            position: "top-right",
            autoClose: 8000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };

  return (
    <footer id="footer" className="pt-4 pb-2 pt-sm-5 pb-sm-4 mt-5 ">
      <div className="container  my-3 my-sm-4">
        {/* {loading && (
          <div className="overlayc d-flex justify-content-center align-items-center">
            <div className="loader"></div>
          </div>
        )} */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
        <div className="row  text-center text-sm-start">
          <div className="col-12  col-lg-8">
            <div className="row">
              <div className="col-12 col-sm-6 my-3 my-sm-4">
                <p className="my-1 ">
                  <small>Phone</small>
                </p>
                <h6 className="py-2">+234 805 176 2471</h6>
              </div>
              <div className="col-12 col-sm-6 my-3 my-sm-4">
                <p className="my-1 ">
                  <small>Enquiries</small>
                </p>
                <h6 className="py-1">consultation@qeola.com</h6>
              </div>
            </div>
            <div className="row ">
              <div className="col-12 col-sm-6 my-3  my-sm-4">
                <p className="my-1 fs-6">
                  <small>Address</small>
                </p>
                <h6 className="py-1 fs-6">
                  50, Ogbomoso-Ilorin Road, General, Ogbomoso, Oyo-State.
                </h6>
              </div>
              <div className="col-12 col-sm-6 my-3  my-sm-4">
                <p className="my-1 ">
                  <small>Follow us</small>
                </p>
                <div className="row d-inline-block py-1 fs-6">
                  <a
                    href="https://www.facebook.com/officialqeola/"
                    className="text-decoration-none"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fs-4 fa-facebook-square d-inline mx-1"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/officialqeola/"
                    className="text-decoration-none"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fs-4 fa-instagram d-inline mx-1"></i>
                  </a>
                  <a
                    href="https://twitter.com/officialqeola?t=ULeCqB5FyBZ_yjrfaW_AEw&s=09"
                    className="text-decoration-none"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fs-4 fa-twitter d-inline mx-1"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/qeola"
                    className="text-decoration-none"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <i className="fab fs-4 fa-linkedin d-inline mx-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-12 col-lg-4 px-3 px-sm-3 ">
            <p>
              <small>Subscribe to our newsletter</small>
            </p>
            <input
              type="email"
              name="email"
              placeholder="yourname@xyx.com"
              className="p-3 w-100 rounded-pill fs-6 form-control"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Button
            </button>
          </div> */}
          {/* <form onSubmit={subcribeUser}> */}
          <form
            onSubmit={subcribeUser}
            className="col-12 col-lg-4 px-3 px-sm-3 subscribe my-3 my-sm-4"
          >
            <p className="my-1 fs-6">
              <small>Subscribe to our newsletter</small>
            </p>
            <div className="input-group mb-3 rounded-pill py-2">
              <input
                type="text"
                value={email}
                className="form-control p-3  fs-6 border-end-0"
                placeholder="yourname@xyx.com"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                className="btn border border-2 border-start-0 pe-4 shadow-none"
                type="submit"
                id="button-addon2"
              >
                <i className="fas fa-2x fa-long-arrow-alt-right"></i>
                {/* <i class="material-icons">arrow_right_alt</i> */}
              </button>
            </div>
          </form>
          {/* </form> */}
        </div>
        <div className="row text-center mt-5 ">
          <p>
            <small> &copy; {year} Qeola Limited</small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
