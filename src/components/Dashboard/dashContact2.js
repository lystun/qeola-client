import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DashContact2 = (props) => {
  const [shrink, setShrink] = useState({
    mail: "",
    name: "",
    Num: "",
    proj: "",
    brief: "",
  });
  const [email, setEmail] = useState();
  const [Output, setOutput] = useState();
  // const [Alert, setAlert] = useState();

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`https://qeola-api.herokuapp.com/api/v1/users/get-user`, { email })
      .then(
        (response) => {
          setLoading(false);
          // console.log(response);
          const data = response.data.data;
          toast.success("User's email found", {
            position: "top-right",
            autoClose: 8000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setOutput(
            response && (
              <div style={{ overflowX: "auto" }}>
                <table>
                  <tr>
                    <th>S/N</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date Registered</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.createdAt}</td>
                  </tr>
                </table>
              </div>
            )
          );
        },
        (error) => {
          // console.log(error);
          setLoading(false);
          toast.error(
            "NOT FOUND. The email you entered is not registered to any user.",
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
        }
      );
  };

  const ShrinkName = () => {
    setShrink({ mail: "", name: "shrink", Num: "", proj: "", brief: "" });
  };

  const Enlarge = () => {
    setShrink("");
  };

  return (
    <main>
      <section id="contact" className="py-3">
        <div className="container">
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
          <div className="contact-header position-relative py-3 mx-auto">
            {/* <div className="position-absolute">{Alert}</div> */}
            <h1 className="fs-1 fs-sm-1 fw-bold mt-5 text-center">
              {props.title}
            </h1>
          </div>
          <div className="contact-form mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="row pt-4 pb-2">
                <div
                  className="col-12 col-md-12 my-3"
                  onFocus={ShrinkName}
                  onBlur={Enlarge}
                >
                  <label
                    htmlFor="name"
                    className={
                      shrink.name === "shrink"
                        ? `fs-6 fw-bold ${shrink.name}`
                        : `fs-6 fw-bold`
                    }
                  >
                    {props.email}
                  </label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter the user's email "
                    className="w-100 p-2 my-1 border-0 border-2 border-bottom"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="col-12 col-md-12 my-2 text-center">
                  <button
                    type="submit"
                    className="contact-submit shadow-none btn rounded-pill py-3 my-4 w-50 fw-bold"
                  >
                    {loading ? (
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    ) : (
                      props.btn
                    )}
                  </button>
                </div>
                <div className="col-12 col-md-12 my-2 text-center">
                  {Output}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DashContact2;
