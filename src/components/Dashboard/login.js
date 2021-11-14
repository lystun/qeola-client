import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./admin.css";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { useDispatch, useSelector } from "react-redux";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { Login } = bindActionCreators(actionCreators, dispatch);
  const [loading, setLoading] = useState(false);
  // const [button, setButton] = useState("login");

  const cred = useSelector((state) => state.output);
  // const [alert, setAlert] = useState();

  useEffect(() => {}, []);

  const Submit = (e) => {
    e.preventDefault();
    setLoading(true);
    Login(email, password);
    // console.log(cred.data && cred.data);
    if (cred.data) {
      setLoading(false);
      store.addNotification({
        title: `Sorry, check again`,
        message: cred.data.message,
        type: "danger",
        insert: "top",
        container: "top-left",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 8000,
          onScreen: true,
        },
      });
    } else if (cred.token) {
      setLoading(false);
      store.addNotification({
        title: `Success`,
        message: "Login Successful, loading....",
        type: "success",
        insert: "top",
        container: "top-left",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 8000,
          onScreen: true,
        },
      });
    }
  };

  return (
    <section
      id="login"
      className="login "
      style={{
        backgroundImage: `url("images/base.jpg")`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <ReactNotification />

      <div className="overlayb"></div>
      <div className="container">
        <div className="login-card mx-auto p-3 p-sm-5 rounded-3 ">
          <form onSubmit={Submit}>
            <div className="my-3 mb-4 text-center w-50 mx-auto">
              <img
                src="images/logo.png"
                alt="qeola icon"
                className="img-fluid w-50 my-2"
              />
            </div>
            <h2 className="fs-3 fw-bold my-3  text-center">Login</h2>

            <div className="my-3">
              <label htmlFor="username" className="fw-bold text-start">
                {" "}
                Email
              </label>{" "}
              <br />
              <input
                id="username"
                className="username w-100 p-1 border-0 border-2 border-bottom"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="my-3">
              <label htmlFor="password" className="fw-bold">
                {" "}
                Password
              </label>{" "}
              <br />
              <input
                id="password"
                className="password w-100 p-1  border-0 border-2 border-bottom"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="my-1 btn contact-submit shadow-none w-100"
              >
                {loading ? (
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                ) : (
                  "Login"
                )}
              </button>
            </div>
            <div className="my-1">
              <Link
                to="/register"
                className=" btn back-to-home-btn w-100 shadow-none fs-6"
              >
                {" "}
                Not Registered?, Click to register
                <i className="fas fa-arrow-right m-2"></i>
              </Link>
              <Link
                to="/"
                className=" btn back-to-home-btn w-100 shadow-none fs-6"
              >
                {" "}
                <i className="fas fa-arrow-left m-2"></i> Back to home
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
// Login.propTypes = {
//   setToken: propTypes.func.isRequired,
// };

export default Login;
