import { useState } from "react";
// import "./contact.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DashContact3 = (props) => {
  const [shrink, setShrink] = useState({
    mail: "",
    name: "",
    Num: "",
    proj: "",
    brief: "",
  });
  const [name, setName] = useState();
  const [loading, setLoading] = useState(false);
  // const [button, setButton] = useState(props.btn);

  const ShrinkName = () => {
    setShrink({ mail: "", name: "shrink", Num: "", proj: "", brief: "" });
  };

  const Enlarge = () => {
    setShrink("");
  };

  let token = "";
  const Tokena = useSelector((state) => state.output);
  if (Tokena) {
    token = Tokena.token;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(
        "https://qeola-api.herokuapp.com/api/v1/categories",
        { name },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(
        (response) => {
          // console.log(response);
          setLoading(false);
          toast.success("You have successfully added a new category", {
            position: "top-right",
            autoClose: 8000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        (error) => {
          setLoading(false);
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
          <div className="contact-header py-3 mx-auto">
            <h1 className="fs-1 fs-sm-1 mt-5 fw-bold text-center">
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
                    {props.name}
                  </label>
                  <br />
                  <input
                    type="name"
                    name="name"
                    placeholder="Name of the category you want to add"
                    className="w-100 p-2 my-1 border-0 border-2 border-bottom"
                    onChange={(e) => setName(e.target.value)}
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
                  {/* <Button variant="contained" size="large" type="submit">
                    {loading ? <CircularProgress /> : button}
                  </Button> */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DashContact3;
