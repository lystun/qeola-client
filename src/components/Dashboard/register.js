import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";

const Register = () => {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [confirmP, SetConfirmP] = useState("");
  // const [alert, setAlert] = useState();

  const [loading, setLoading] = useState(false);

  // console.log({ name, email, password, confirmP });
  let history = useHistory();

  const Submit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("https://qeola-api.herokuapp.com/api/v1/auth/register", {
        name: name,
        email: email,
        password: password,
        passwordConfirm: confirmP,
      })
      .then(
        (response) => {
          setLoading(false);
          // console.log(response);
          if (response) {
            history.push("/dashboard");
          }
        },
        (error) => {
          // console.log(error);
          setLoading(false);
          if (error) {
            store.addNotification({
              title: `Sorry`,
              message: "Something went very wrong.",
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
          }
        }
      );
  };
  return (
    <div className="container">
      <ReactNotification />
      <div className="my-3 mb-4 text-center w-75">
        {/* <h2 className="fs-3 fw-bold">Please register an account</h2> */}
        {/* {alert} */}
      </div>
      <div className="w-25 mt-5 text-center mx-auto">
        <img
          src="images/logo.png"
          alt="qeola icon"
          className="img-fluid w-50 my-2 "
        />
      </div>
      <h2 className="fs-3 fw-bold my-3 text-center">Register an account</h2>
      <form onSubmit={Submit} className="w-75 mx-auto">
        <div className="my-3">
          <label for="username" className="fw-bold text-start">
            {" "}
            Username
          </label>{" "}
          <br />
          <input
            id="username"
            className="username w-100 p-1 border-0 border-2 border-bottom"
            type="text"
            name="username"
            onChange={(e) => SetName(e.target.value)}
            required
          />
        </div>
        <div className="my-3">
          <label for="email" className="fw-bold text-start">
            {" "}
            Email
          </label>{" "}
          <br />
          <input
            id="email"
            className="username w-100 p-1 border-0 border-2 border-bottom"
            type="email"
            name="email"
            onChange={(e) => SetEmail(e.target.value)}
            required
          />
        </div>
        <div className="my-3">
          <label for="password" className="fw-bold">
            {" "}
            Password
          </label>{" "}
          <br />
          <input
            id="password"
            className="password w-100 p-1  border-0 border-2 border-bottom"
            type="password"
            name="password"
            onChange={(e) => SetPassword(e.target.value)}
            required
          />
        </div>
        <div className="my-3">
          <label for="confirm-password" className="fw-bold">
            {" "}
            Confirm Password
          </label>{" "}
          <br />
          <input
            id="confirm-password"
            className="password w-100 p-1  border-0 border-2 border-bottom"
            type="password"
            name="confirm-password"
            onChange={(e) => SetConfirmP(e.target.value)}
            required
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="my-1 btn contact-submit shadow-none w-100"
          >
            {" "}
            {loading ? (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            ) : (
              "Register"
            )}
          </button>
        </div>
        <div className="my-1">
          <Link
            to="/dashboard"
            type="submit"
            className=" btn back-to-home-btn w-100 shadow-none"
          >
            {" "}
            Already Registered? Click to login{" "}
            <i class="fas fa-arrow-right m-2"></i>
          </Link>
          <Link
            to="/"
            type="submit"
            className=" btn back-to-home-btn w-100 shadow-none"
          >
            {" "}
            <i class="fas fa-arrow-left m-2"></i> Back to home
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
